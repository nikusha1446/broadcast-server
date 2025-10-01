const WebSocket = require('ws');

function startServer(port) {
  const wss = new WebSocket.Server({ port });
  const clients = new Set();
  console.log(`Broadcast server started on port ${port}`);
  console.log('Waiting for clients to connect...');

  wss.on('connection', (ws) => {
    clients.add(ws);
    console.log(`New client connected! Total clients: ${clients.size}`);

    ws.on('message', (data) => {
      const message = data.toString();
      console.log(`Received: ${message}`);

      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log(`Client disconnected. Total clients: ${clients.size}`);
    });

    ws.on('error', (error) => {
      console.error(`Client error: ${error.message}`);
      clients.delete(ws);
    });
  });

  wss.on('error', (error) => {
    console.error(`Server error: ${error.message}`);
  });

  process.on('SIGINT', () => {
    console.log('Shutting down server...');
    wss.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

module.exports = { startServer };

const WebSocket = require('ws');
const readline = require('readline');

function startClient(host, port) {
  const url = `ws://${host}:${port}`;
  console.log(`Connecting to server at ${url}`);

  const ws = new WebSocket(url);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  });

  ws.on('open', () => {
    console.log('Connected to server');
    console.log('Type your message and press Enter to send.\n');
    rl.prompt();

    rl.on('line', (input) => {
      const message = input.trim();

      if (message) {
        ws.send(message);
      }

      rl.prompt();
    });
  });

  ws.on('message', (data) => {
    const message = data.toString();
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    console.log(message);
    rl.prompt();
  });

  ws.on('close', () => {
    console.log('Disconnected from server');
    rl.close();
    process.exit(0);
  });

  ws.on('error', (error) => {
    console.log(`Connection error: ${error.message}`);
    rl.close();
    process.exit(1);
  });

  rl.on('SIGINT', () => {
    console.log('Closing connection...');
    ws.close();
  });
}

module.exports = { startClient };

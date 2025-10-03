# Broadcast Server

A simple real-time broadcast server built with WebSockets that allows multiple clients to connect and send messages that are broadcasted to all connected clients.

## ✨ Features

- Real-time message broadcasting to all connected clients
- Multiple client support
- Graceful connection/disconnection handling
- Command-line interface (CLI)
- Configurable host and port

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm

## 🚀 Installation

1. Clone the repository or download the project files
```bash
git clone https://github.com/nikusha1446/broadcast-server.git
cd broadcast-server
```

2. Install dependencies:
```bash
npm install
```


## 💻 Usage

### Starting the Server

Start the server on default port (8080):
```bash
node index.js start
```

Start the server on a custom port:
```bash
node index.js start --port 3000
```

### Connecting as a Client

Connect to the server on localhost:8080:
```bash
node index.js connect
```

Connect to a specific host and port:
```bash
node index.js connect --host 192.168.1.5 --port 3000
```

## 🔧 Commands

| Command | Description | Options |
|---------|-------------|---------|
| `node index.js start` | Start the broadcast server | `-p, --port <number>` - Port number (default: 8080) |
| `node index.js connect` | Connect to the server as a client | `-h, --host <string>` - Server host (default: localhost)<br>`-p, --port <number>` - Server port (default: 8080) |

## ⚙️ How It Works

1. **Server**: Creates a WebSocket server that listens for incoming connections
2. **Client Storage**: Maintains a list of all connected clients
3. **Broadcasting**: When a client sends a message, the server broadcasts it to all connected clients
4. **Cleanup**: Automatically removes disconnected clients from the list

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **ws** - WebSocket library for Node.js
- **commander** - CLI argument parsing
- **readline** - Terminal input handling (built-in)

## 📄 License

ISC

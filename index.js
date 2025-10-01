const { Command } = require('commander');
const program = new Command();

program
  .name('broadcast-server')
  .description('A simple broadcast server for real-time messaging')
  .version('1.0.0');

program
  .command('start')
  .description('Start the broadcast server')
  .option('-p, --port <number>', 'Port to run the server on', '8080')
  .action((options) => {
    console.log(options);
  });

program
  .command('connect')
  .description('Connect to the broadcast server as a client')
  .option('-h, --host <string>', 'Server host', 'localhost')
  .option('-p, --port <number>', 'Server port', '8080')
  .action((options) => {
    console.log(options);
  });

program.parse(process.argv);

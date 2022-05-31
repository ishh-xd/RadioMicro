const RadioBot = require("./structures/RadioClient");
const client = new RadioBot();
module.exports = client; 
client._loadPlayer()
client._loadClientEvents()
client._loadNodeEvents()
client._loadPlayerEvents()
client._loadCommands()
client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

process.on('multipleResolves', (type, promise, reason) => {
    console.log(type, promise, reason);
});

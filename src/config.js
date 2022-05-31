
require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || '', // bot prefix
  ownerID: process.env.OWNERID || [''], //your discord id
 nonPrefixedUsers: [""], // Non prefixed users id.
    
  SpotifyID: process.env.SPOTIFYID || '', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '', // spotify client secret
  mongourl:
    process.env.MONGO_URI || '', // MongoDb URL
  embedColor: process.env.COlOR || 'GREY', // embed colour
  logs: process.env.LOGS || '', // Discord channel id 
  links: {
    support: '',
    invite: '',
    vote: '',
  },

  nodes: [
    {
      url: 'lavalink.oops.wtf',
      name: 'Node 1',
      auth:  'www.freelavalink.ga',
      secure:  parseBoolean('true'),
    },{
      url: 'usui-linku.kadantte.moe',
      name: 'Node 2',
      auth:  'Usui#0256',
      secure:  parseBoolean('true'),
    },{
      url: 'lava.link',
      name: 'Node 3',
      auth:  'lava3',
      secure:  parseBoolean('false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }

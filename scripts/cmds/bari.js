const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "bari",
    aliases: ["basha", "home", "barite_jai"], // ei sob gulai cholbe
    version: "1.0",
    author: "ariYa'n bb'z 🚩",
    countDown: 2,
    role: 0,
    shortDescription: "Bari video send",
    longDescription: "bari/basha/home likhle video send korbe",
    category: "𝗙𝗨𝗡",
    guide: "{pn}bari"
  },
  onStart: async function ({ api, event, args, message }) {
    const videoPath = path.join(__dirname, "bari.mp4");
    
    if (!fs.existsSync(videoPath)) {
      return api.sendMessage("⚠️ Video file pawa jay nai.\n`scripts/cmds/bari.mp4` e video ta rakho tarpor abar try koro", event.threadID, event.messageID);
    }

    return api.sendMessage({
      body: "Bari asho 🏠❤️",
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);
  }
};

  

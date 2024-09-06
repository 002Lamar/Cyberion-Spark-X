const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "scan", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
 *THE GIVEN LINK TAKES YOU TO THE SESSION SITE*
 
https://github.com/carl24tech/SESSION-SITE 
 
 *𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐀𝐁𝐎𝐕𝐄 𝐒𝐓𝐄𝐏𝐒 𝐀𝐍𝐃 𝐎𝐁𝐓𝐀𝐈𝐍 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃*
 
 ☆. Open link above
 ★. Enter your whatsapp number with your country code eg : 254,255. And tap on submit
 ☆. Cyberion-V1 will send you a code. Copy that code. Then whatsapp will sent Notification
 ★. Tap on that notification then enter in the code that Cyberion sent you.
 ☆. It will load for sometime then Cyberion will send A long session to your inbox on whatsapp at your own number
 ★. Copy that long session and send it to your deployer or deploy it yourself.
 
 ╭───────────────────❒
 │ CYBERION❒⁠⁠⁠⁠
 │ CARLTECH❒⁠⁠
 ⁠⁠⁠⁠╰───────────────────❒
 
 
 `;
    
let menuMsg = `
> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 

                    

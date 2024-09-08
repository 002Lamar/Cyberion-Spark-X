
const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "book", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault('Nairobi/Kenya');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
*𝐇𝐞𝐥𝐥𝐨 𝐯𝐚𝐥𝐮𝐞𝐝 𝐮𝐬𝐞𝐫...𝐬𝐞𝐞𝐦𝐬 𝐲𝐨𝐮 𝐰𝐚𝐧𝐧𝐚 𝐤𝐧𝐨𝐰 𝐚𝐛𝐨𝐮𝐭 𝐂𝐲𝐛𝐞𝐫𝐢𝐨𝐧*😎


*𝑱𝒖𝒔𝒕 𝒓𝒆𝒂𝒅 𝒕𝒉𝒆 𝒂𝒃𝒐𝒗𝒆 𝒊𝒏𝒇𝒐*


*Whatsapp channel*
𝑻𝒉𝒆 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒘𝒂𝒔 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒐𝒏 22.8.2024

This channel was officially created by Carltech,to support the bot and alao share its updates and other Technical-related updates
> https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h
> Follow and stay updated with Cyberion V1

*𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦*
This Telegram link will enable you to reach out the official bot owner,incase of any issue you need to address
> https://t.me.carlltecch 

*For more info*
> https://github.com/carl24tech/CARLTECH-INFO 

*𝐆𝐢𝐭𝐡𝐮𝐛*
> This is the official github account of CarlTech 
> https://github.com/carl24tech
  `;
    
let menuMsg = `
> ®𝐂𝐀𝐑𝐋𝐓𝐄𝐂𝐇
> 𝐄𝐍𝐉𝐎𝐘 𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍 𝐕1
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
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


/*const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "script", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *BMW MD IMPORTANT INFO* 
❒───────────────────❒
*GITHUB LINK*
> https://github.com/ibrahimaitech/BMW-MD

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠
╭───────────────────❒
│❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *DEV* : *Ibrahim Adams*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     𝑰𝑩𝑹𝑨𝑯𝑰𝑴 𝑨𝑫𝑨𝑴𝑺 𝑺𝑪𝑰𝑬𝑵𝑪𝑬

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});*/

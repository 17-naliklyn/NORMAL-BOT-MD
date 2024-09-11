const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
*𝕄ℝ 𝔸ℕ𝕐𝕎À𝕐 𝔸𝕍𝔸𝕀𝕃𝔸𝔹𝕃𝔼 ℂ𝕄𝔻* 


    ▸ *commander* : ${cm.length} 
    ▸ *rom* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
    ▸ *uptime* : ${os.platform()}
    ▸ *theme* : *𝙼𝚁 𝙰𝙽𝚈𝚆𝙰𝚈*

> 𝙼𝚁 𝙰𝙽𝚈𝚆𝙰𝚈 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃
> 𝙋𝙍𝙊𝘿𝙐𝘾𝙏 𝙊𝙁 𝙈𝙍 𝘼𝙉𝙔𝙒𝘼𝙔 🕴️\n${readmore}`;
    
let menuMsg = `
> 𝐻𝑒𝑙𝑙𝑜 ${nomAuteurMessage},,, 𝑡𝑦𝑝𝑒 𝑚𝑒𝑛𝑢2 𝑡𝑜 𝑎𝑐𝑐𝑒𝑠𝑠 𝑡ℎ𝑒 𝑙𝑖𝑠𝑡 𝑚𝑒𝑛𝑢. 
  
╰───────────────────⏣`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *msela-chui-v2*, déveloper Mselachui Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *MSELA-CHUI-V2*, déveloper MSELACHUI TECH" }, { quoted: ms });
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

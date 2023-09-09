import { fileURLToPath } from "url"
import fs from "fs"

// limit
const limit = {
   free: 25,
   premium: 250,
   VIP: "Infinity",
   download: {
      free: 30000000, // use byte
      premium: 100000000, // use byte
      VIP: 1130000000, // use byte 
   }
}


export default {
   limit,
   APIs: {
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "wakwak"
      }
   },

   msg: {
    owner: 'This command can only be used by the Owner!',
       group: 'This command can only be used in groups!',
       private: 'This command can only be used in private chat!',
       admin: 'This command can only be used by group admins!',
       botAdmin: 'Bot is not an admin, cannot access the feature',
       bot: 'This feature can only be accessed by Bots',
       locked: 'This feature has been disabled!',
       media: 'Reply media...',
       error: "There seems to be an error. The bot failed to execute...",
       quoted: "Reply message...",
       wait: "",
       premium: "This command can only be used by premium users!",
       vip: "This command can only be used by VIP users!",
       dlFree: `File over ${formatSize(limit.download.free)} can only be accessed by premium users`,
       dlPremium: `WhatsApp Web cannot send files larger than ${formatSize(limit.download.premium)}`,
       dlVIP: `WhatsApp cannot send files larger than ${formatSize(limit.download.VIP)}`
   },

   options: {
      public: true,
      URI: "database.json", // use mongo or file json
      owner: ["923229931076"],
      pathCommand: 'commands'
   },

   Exif: {
      packId: "Lucifer Md",
      packName: `Lucifer Md :`,
      packPublish: "Lucifer Md.",
      packEmail: "ibrahim@imaibrahim.tech",
      packWebsite: "lucifercloud.me",
      androidApp: "https://play.google.com/login",
      iOSApp: "https://apps.apple.com/login,
      categories: ['😹', '😎', '😱'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: "hisoka"
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})

//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0wyZ0x6cmEvNEJ0UWhlSFpnRlhmZUgxaDh1cEo4VGROQWs0MGc5Y0ZFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGtCTlc4V0tGcFhhRElDWi9PMCtjbUxPdVAyOXppOXNEUk51dWlxSzlqTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RElrYlZERndWdGR2SVJvdGxzeVBoV3FhS2F6eHp3d1lhejcyeEx6cEdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOODVnaXBobis5OGxQVTlCSXZvdGJhWG92cGxUTkNrS1B4T0N6VW5IY1JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEcXB4TzJwajdQMkV3aDRZTlRxc01SVzNFZ003aTdDa0l5YmRLNVBTbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRsN05sNmZJTWZuRGZzVnpONXBuTThYUTRTQnF6bDYyTW16c0FZSmMyRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUViaHNzQ0dlNWNHMDI2U1o0Rzd1R1FvM2o3TUw3ZGhndEFTSjdCaXRsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1pvQ1dSQ2VyakRlWVEvRWpLZE44L21zZzBQTEJ3U05iZnY4cS9ETUprND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQwd1k1SU4yeGpscDNVcjVVWnVnWGRWeUt2N0FTZU9sVkpTY0JEcTBBb3NDTU12a2MzK3FyYVZPalNxWno0NXVDZTh1WDNWRTFncTRXOFg1WUM2SGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJENjhJM3NLakNYVkdhYzRQbEFBc2N3cHlTREJMQXBiZ1VxejhSQTllbWU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUNVBVYUU0X1JtT0Z1WWEzb3FPdUxnIiwicGhvbmVJZCI6ImI1ODYzNThmLWRhMmQtNGRlMC1hZjQ5LTU4MTA3Yjg0ZjFjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRHFzTjVFamNqbU44dG5PSGxvVkZLQkJSQms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGxyWTF3M0ZHU1krNkJpem13dnRJRm0zTTJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlRTjJWQ1M3IiwibWUiOnsiaWQiOiIyMzQ3MDE2MTM4MjkyOjY4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNkZ1UDhERUliUmlia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYV0hMOFYzMm40aStYempla2FQTWxKQjZPd3FBaEVIVkh2amV5cHhsRFhjPSIsImFjY291bnRTaWduYXR1cmUiOiJFUVBPWGM0dEN2T0VuWUIxbTYwZ1A5QndQU21XL3hkdU1IL0dvbGlCdVJlQUN5Z29wWUtwUDNEWThPYzJxd2JoSVdvN2xReTJ2Zm85WUd0TlR3TUJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTDNkT0VQOFB6K2lCYkJUcmszZjR2YzE4NlFYYm1lQUdpM2dOMGpGd01FVEF5cFJrdzVKN2E4VGtVRGVxMlErL1A0UnFacXhmdUtGY0pmeDF2ZXBCaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDE2MTM4MjkyOjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlYxaHkvRmQ5cCtJdmw4NDNwR2p6SlNRZWpzS2dJUkIxUjc0M3NxY1pRMTMifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDMwODI0Mn0="
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR00zOFoxRGtBNjJXZUowalV2QVRmUStJMkhXaGVoQmtleHJaR2ZqbG1uWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJhUTBuTjlQTmxjNTRYWnhYNXRYN0NsdXhDTlVlY1ZCUDNiY3lCSEowOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTS3BnM08wbWN6ZGNhUG4vODVGNDBNTHRGRElabWtGY256UFVFSlpiNjEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Z0tBK1YxMkwyQkQ4RWJscldjNDF6Nzc0Y1BDSDQrNnVJQVZtSm9FV1M0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HSXlDQjk1T21JTXVVM2NrbTNtZUpFZzRCVkNXUXVIQzdYYWxkRHY5Vm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE1ZCtiS2RyVXZwTndqSC9oczZZWWFpSnFvRFdURmpoWXJsZEZwMTdKaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09qaGVhYTlCalpreHliRTgvNHBnOHkyZG9UdE4vdXVpdjhDcEFma1JIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3l4SEtXa05RRXJqZWp3WGJRYUxYMWlHa2VOVXc0K1RIQVJUaUlRbVcxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrSVpQV1FnbVBrYjBUTTJ6bnp6Rmptc1JkMEVONlkzdElkQmtJN29DeURqdXBYSlBBZWNaUlBTU2czem1wcG5rMnRGRkFvOUFKQXhaRXVQUUVZc0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJ1blRCQ3YzNTdFcGpOVlYvUlc2SmlRZzJSTlFyMW81WkowWUdGeERGR1FjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpTjdRYWZHQ1JJbXZEdDJTRGlTNU1BIiwicGhvbmVJZCI6IjczYjIyM2NkLTUxMGQtNDUzMy1iYWY5LTk2ZTYxNTliOTQ4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQlcvbmlTcjRPeDJHT0VpVVF6Vi9tVTB0ZFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpaT0NrYVBKVUZaL01udjRpL0FBeWdZOFl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ4UUhCSk5XIiwibWUiOnsiaWQiOiIyMzMyNTc1MTQ1MDQ6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01XVjhmMFBFSzJGKzdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBLVVllbXBVZjV1cTdYNnI4OUhvV3FTWDNXUmowdktuNi8vYzlGcnZraUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZTb0E1Mi85dVpTcXpVcVZuTUYvZWZWem4xRGZnV0xabVUyL0NWY2VpamlHeFppbUJncEp1VGZhOUJ5UW9EODRoa25MWFErL3ZiQll0b1BIYnJwQWh3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDYkN3ZnF5aHdnMW8yQjNJN2NTTStDQnhmcTZoNXorVGU1cDI3VjlJOE1sKzc1Nktuay9YSUk5OFlBL2doKy80cjJrcXBLWlhDWEUxdDhkM0xPR2ZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI1NzUxNDUwNDo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkQ2xHSHBxVkgrYnF1MStxL1BSNkZxa2w5MWtZOUx5cCt2LzNQUmE3NUloIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAwNjkxNzh9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

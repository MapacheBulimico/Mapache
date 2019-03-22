const browser = typeof window !== 'undefined';
const webpack = !!process.env.__DISCORD_WEBPACK__;

const Discord = require('./');
const ytdl = require('ytdl-core-discord');

async function play(connection, url) {
  connection.playOpusStream(await ytdl(url));
}

module.exports = Discord;
if (browser && webpack) window.Discord = Discord; // eslint-disable-line no-undef
// eslint-disable-next-line no-console
else if (!browser) console.warn('Warning: Attempting to use browser version of Discord.js in a non-browser environment!');

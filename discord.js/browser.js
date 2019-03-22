const browser = typeof window !== 'undefined';
const webpack = !!process.env.__DISCORD_WEBPACK__;

const Discord = require('./');
const ytdl = require('ytdl-core-discord');

async function play(connection, url) {
  connection.playOpusStream(await ytdl(url));
}
var opusscript = require("opusscript");

// 48kHz sampling rate, 20ms frame duration, stereo audio (2 channels)
var samplingRate = 48000;
var frameDuration = 20;
var channels = 2;

// Optimize encoding for audio. Available applications are VOIP, AUDIO, and RESTRICTED_LOWDELAY
var encoder = new opusscript(samplingRate, channels, opusscript.Application.AUDIO);

var frameSize = samplingRate * frameDuration / 1000;

// Get PCM data from somewhere and encode it into opus
var pcmData = new Buffer(pcmSource);
var encodedPacket = encoder.encode(pcmData, frameSize);

// Decode the opus packet back into PCM
var decodedPacket = encoder.decode(encodedPacket);

// Delete the encoder when finished with it (Emscripten does not automatically call C++ object destructors)
encoder.delete();

module.exports = Discord;
if (browser && webpack) window.Discord = Discord; // eslint-disable-line no-undef
// eslint-disable-next-line no-console
else if (!browser) console.warn('Warning: Attempting to use browser version of Discord.js in a non-browser environment!');

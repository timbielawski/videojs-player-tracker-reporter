import videojs from 'video.js';
import {version as VERSION} from '../package.json';
import tracker from './tracking/tracker';
import counter from './counter/counter';

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function that gets get the video played counts and displays it
 * on the toolbar
 *  
 * @function displayCounter
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *  
 */

const displayCounter = (player, options, count) => {
  let counterContainer = document.createElement("div");
  counterContainer.className = "counter-container";

  let countContainer = document.createElement("span");
  countContainer.className = "count";
  countContainer.value = count;

  counterContainer.appendChild(countContainer);
  player.controlBar.el().insertBefore(counterContainer, player.controlBar.fullscreenToggle.el());

}

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const onPlayerReady = (player, options) => {
  counter.init(player, options, (count)=>{
    displayCounter(player, options, count);
  });
  player.addClass('vjs-videojs-player-tracker-reporter');
  tracker.init(player, options);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function playerTrackerReporter
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const playerTrackerReporter = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('playerTrackerReporter', playerTrackerReporter);

// Include the version number.
playerTrackerReporter.VERSION = VERSION;

export default playerTrackerReporter;

import sendXMLHttpRequest from '../helpers/sendXMLHttpRequest';
import getStickedParams from '../helpers/getStickedParams';

/**
 * Counter instance.
*/
const counter = {
  /**
   * @param {Player} player
   *        A Video.js player object
   */
  player: null,

  /**
   * @param {Object} [options={}]
   *        A plain object containing options for the plugin
   */
  options: {},

  /**
   * Will return the current version of the player if it exists.
   *
   * @function getPlayerVersion
   * @return {string}
   *          Player version
   */
  getPlayerVersion() {
    return (this.player.hasOwnProperty('VERSION')) ? this.player.VERSION : null;
  },

  /**
   * Set values of the params that should be initialized when loading the player.
   *
   * @function setInitialParams
   */
  setInitialParams() {
    const params = this.options.params;

    if (!params.hasOwnProperty('player_version') || params.player_version === null) {
      params.player_version = this.getPlayerVersion();
    }
  },

  /**
   * Returns updated params with values of the params
   * that should be updated every tracking event.
   *
   * @function getUpdatedParams
   * @return {Object}
   *         params wich should be sends to server.
   */
  getUpdatedParams() {
    const params = this.options.params;

    params.curr_ts = Math.floor(this.player.currentTime());

    return params;
  },

  /**
   * Will get the latest count from the API 
   *
   * @function getCount
   */
  getCount(callback) {
    const commonParams = this.getUpdatedParams();
    const data = getStickedParams(commonParams, individualParams);
    const url = this.options.url + '?' + data.join('&');
    sendXMLHttpRequest(url, 'GET', callback);
  },

  /**
   * Plugin initialization.
   * Should be called when player is ready.
   *
   * @function init
   * @param    {Player} player
   *           A Video.js player object.
   *
   * @param    {Object} [options={}]
   *           A plain object containing options for the plugin.
   */
  init(player, options, callback) {
    this.player = player;
    this.options = options;
    this.setInitialParams();
    this.getCount(callback);
  }
};

export default tracker;
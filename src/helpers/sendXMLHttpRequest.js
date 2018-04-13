/**
 * Create XMLHttpRequest and send json data to server.
 *
 * @function sendXMLHttpRequest
 * @param {string} url
 *        Page url
 * @param {string} methd
 *        PUT, GET
 * @param {function} 
 *        callback when done
 */
const sendXMLHttpRequest = function(url, method, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (this.status == 200 && callback) {
         callback(xhr.responseText);
      }
  };
    xhr.send();
  };
  
  export default sendXMLHttpRequest;
  
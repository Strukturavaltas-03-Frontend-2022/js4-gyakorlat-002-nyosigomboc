import { state, actions } from './store/ajaxRequest.js';

/**
 * Represents a request factory
 * @param {Object}                    - request properties object
 * @param {string} url                - the request url
 * @param {function} successCallback  - run, when request status is  200 and state is 4
 * @param {string} [method=GET]       - the request method
 * @param {number} [maxRetry=2]       - how many times to retry send the request
 * @param {number} [delay=5000]       - the delay in milisec beetween two retry
 * @returns {function}                - the reqeust function, witch send the request
 */
function ajaxRequest({
  url,
  successCallback,
  method = 'GET',
  delay = 5000,
  maxRetry = 2, // are we supposed to try twice or REtry (so 1+2)?
} = {}) {
  actions.initRequest(maxRetry, delay);
  // state is global, and main.js calls us in parallel with 3 urls
  // so retryCounter will be increased more-or-less randomly as they fail to load
  // I'm not touching anything besides the 3 functions here anyway, the design has to be fixed
  // by luck it succeeds now

  /**
   * Log error message to the console.error
   * @param {string} message - the error message
   */
  function handleError(message) {
    console.error(message); // './json1/users1.json' doesn't exist
  }

  /**
   * Handle ajax onload event
   * @param {Object} xhr - the error message // copy-pasted description, probably wrong
   */
  function handleLoad(xhr) {
    if (xhr.readyState < 4) { // not done yet
      return;
    }
    if (xhr.status < 400) {
      // successCallback(JSON.parse(xhr.response).users); // this works as intended

      successCallback(xhr.responseText); // spec. claims caller wants responseText
      // the string stays a (JSON) string without parsing that
      // (and then tries to use it as if it was an array without ever doing the conversion)
      return;
    }
    actions.increaseRetryCounter();
    // eslint-disable-next-line no-use-before-define
    setTimeout(request, delay);
  }

  /**
   * Send ajax request
   */
  function request() {
    if (state.retryCounter >= maxRetry) {
      handleError(`Resource not avaiable: ${url}`);
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => { handleLoad(xhr); };
    xhr.send();
  }

  return request;
}

export default ajaxRequest;

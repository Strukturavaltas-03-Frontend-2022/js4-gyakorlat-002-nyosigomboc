/**
 * The state of request
 * @constant
 * @type {Object}
 * @property {number} delay         - the delay in milisec beetween two retry
 * @property {number} maxRetry      - how many times to retry send the request
 * @property {number} retryCounter  - the count of actual retries
 * @default
*/
const state = {
  delay: 5000,
  maxRetry: 2,
  retryCounter: 0,
};

/**
 * The actions of request
 * @constant
 * @type {Object}
 * @property {function} initRequest           - initialite request defaults
 * @property {function} setMaxRetry           - set maxRetry value
 * @property {function} setDelay              - set delay value
 * @property {function} increaseRetryCounter  - increase the request counter
 * @property {function} initRetryCounter      - set requestCounter to 0
*/
const actions = {
  initRequest(maxRetry, delay) {
    actions.setMaxRetry(maxRetry);
    actions.setDelay(delay);
    actions.initRetryCounter();
  },
  setMaxRetry(maxRetry) {
    state.maxRetry = maxRetry;
  },
  setDelay(delay) {
    state.delay = delay;
  },
  increaseRetryCounter() {
    state.retryCounter += 1;
  },
  initRetryCounter() {
    state.retryCounter = 0;
  },
};

export {
  state,
  actions,
};

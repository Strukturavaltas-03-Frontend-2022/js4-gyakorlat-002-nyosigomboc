/**
 * The state of users
 * @constant
 * @type {Object}
 * @property {Object[]} users - the users array
 * @default
*/
const state = {
  users: [],
};

/**
 * The actions of users
 * @constant
 * @type {Object}
 * @property {function} setUsers  - add new users to the users array
 * @property {function} logUsers  - log users to the console
*/
const actions = {
  setUsers(users) {
    state.users = [
      ...state.users,
      ...users,
    ];
  },
  logUsers() {
    console.log(state.users);
  },
};

export {
  state,
  actions,
};

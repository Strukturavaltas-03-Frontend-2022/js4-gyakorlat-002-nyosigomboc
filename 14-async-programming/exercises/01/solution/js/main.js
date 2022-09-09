import ajaxRequest from './ajaxRequest.js';
import { actions } from './store/users.js';

const urls = ['./json1/users1.json', './json/users2.json', './json/users3.json'];

function successCallback(responseText) {
  actions.setUsers(responseText);
  actions.logUsers();
}

urls.forEach((url) => ajaxRequest({
  url,
  successCallback,
})());

import http from './axios';

class User {
  get(id) {
    return http.get(`/users/${id}?format=json`);
  }
}

export default new User();

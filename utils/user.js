import http from './axios';

class User {
  get(id) {
    return http.get(`/users/${id}/`);
  }
}

export default new User();

import http from "./axios"

class BookData {
  getAll() {
    return http.get("/readbooks/");
  }

  get(id) {
    return http.get(`/readbooks//${id}`);
  }

  create(data) {
    return http.post("/readbooks/", data);
  }

  update(id, data) {
    return http.put(`/readbooks//${id}`, data);
  }

  delete(id) {
    return http.delete(`/readbooks//${id}`);
  }

  deleteAll() {
    return http.delete(`/readbooks/`);
  }

  findByTitle(name) {
    return http.get(`/readbooks/?name=${name}`);
  }
}

export default new BookData();
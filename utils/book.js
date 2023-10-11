import http from './axios';

class Book {
  getReview(id) {
    return http.get(`/api/bookreview/${id}/`);
  }
  get(id) {
    return http.get(`/api/story/${id}/`);
  }
  getChapters(bookId) {
    return http.get(`/api/chapter/${bookId}/all/`);
  }
  getCategories(id) {
    return http.get(`/api/categorys/${id}/`);
  }
}

export default new Book();

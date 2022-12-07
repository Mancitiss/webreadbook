import http from './axios';

class Book {
  getReview(id) {
    return http.get(`/bookreview/${id}/`);
  }
  get(id) {
    return http.get(`/story/${id}/`);
  }
  getChapters(bookId) {
    return http.get(`/chapter/${bookId}/all/`);
  }
  getCategories(id) {
    return http.get(`/categorys/${id}/`);
  }
}

export default new Book();

const { 
  addBookCaller, 
  getAllBooksCaller, 
  getBookByIdCaller, 
  editBookByIdCaller,
  deleteBookByIdCaller,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookCaller,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksCaller,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdCaller,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdCaller,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdCaller,
  },
];
  
module.exports = routes;
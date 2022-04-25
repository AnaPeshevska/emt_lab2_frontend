import axios from '../custom-axios/axios';

const BookService = {

    fetchAllBooks: () => {
        return axios.get('/books/listAll')
    },
    // fetchBook: (id) => {
    //     return axios.get(`/books/${id}`);
    // },
    // addBook: (formData) =>{
    //     return axios.post(`/books/addBook`,formData)
    // },
    // deleteBook: (id) => {
    //     return axios.delete(`/books/deleteBook/${id}`);
    // },
    // editBook: (formData) => {
    //     return axios.post(`/books/editBook`, formData)
    // },
    // markBookAsTaken: (id) => {
    //     return axios.get(`/books/markBookAsTaken/${id}`)
    // }

}

export default BookService;
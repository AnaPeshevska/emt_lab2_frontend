import './App.css';
import React, {Component} from "react";
import Books from '../books/books'
import bookRepository from "../../repository/bookRepository";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      books: []
    }
  }

  render() {
    return (
        <Router>
            <main>
                <div className="container">
                    <Route path={"/books"} exact render={() => <Books books={this.state.books}/>}/>
                    <Books books={this.state.books}/>
                </div>
            </main>
        </Router>
    );
  }


    loadBooks = () => {
        bookRepository.getAllBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }


  componentDidMount() {
    this.loadBooks()
  }




}

export default App;

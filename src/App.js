import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/Header';
import Shelves from './components/Shelves';
import Search from './components/Search';
import SearchButton from './components/SearchButton';

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: false,
		books: []
	}

	updateSearchPageState = state => {
		this.setState({ showSearchPage: state })
	}

	componentDidMount() {
		//BooksAPI.getAll().then(res => console.log("here they are -->", res)); // testing
		BooksAPI.getAll().then(res => this.setState({ books: res }));
	}

	changeBookShelf(book, shelf) {
		book.shelf = shelf;
	}

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<Search showSearchPage={this.updateSearchPageState} />
				) : (
					<div className="list-books">
						<Header />
						<Shelves allBooks={this.state.books} changeShelf={this.changeBookShelf} />
						<SearchButton showSearchPage={this.updateSearchPageState} />
					</div>
				)}
			</div>
		)
	}
}

export default BooksApp

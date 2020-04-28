import React, { Component } from "react";
import Shelf from './Shelf';

class Shelves extends Component {

	render() {
		const allBooks = this.props.allBooks;
		const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
		const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
		const read = allBooks.filter(book => book.shelf === "read");
		console.log("here they are again from Shelves -->", allBooks);

		return (
			/* Shelves */
			<div className="list-books-content">
				<div>
					<Shelf books={currentlyReading} /> { /* Shelf - Currently Reading */ }
					<Shelf books={wantToRead} /> { /* Shelf - Want to Read */ }
					<Shelf books={read} /> { /* Shelf - Read */ }
				</div>
			</div>
		);
	}
}

export default Shelves;

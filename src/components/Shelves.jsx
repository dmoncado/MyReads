import React, { Component } from "react";
import Shelf from './Shelf';

class Shelves extends Component {

	render() {
		const allBooks = this.props.allBooks;
		const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
		const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
		const read = allBooks.filter(book => book.shelf === "read");
		console.log("From Shelves -->", allBooks);

		return (
			/* Shelves */
			<div className="list-books-content">
				<div>
					<Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf} /> { /* Shelf - Currently Reading */ }
					<Shelf books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf} /> { /* Shelf - Want to Read */ }
					<Shelf books={read} title={"Read"} changeShelf={this.props.changeShelf} /> { /* Shelf - Read */ }
				</div>
			</div>
		);
	}
}

export default Shelves;

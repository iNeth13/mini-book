import React, { useState } from "react";
import Book from "../components/Book";
import "./BookList.css";

export default function BookList() {
  const booksData = [
    {
      id: 1,
      bookName: "Book1",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      bookName: "Book2",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      bookName: "Book3",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      bookName: "Book4",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      bookName: "Book5",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    },
  ];
  const [books, setBooks] = useState(booksData);

  const handleDelete = (id) => {
    //filter books and return remaining books ( book.id !== id )
    const remainingBooks = books.filter((book) => book.id !== id);
    //set remaining books to useState
    setBooks(remainingBooks);
  };
  return (
    <div className="booklist-container">
      <Book books={books} handleDelete={handleDelete} />
    </div>
  );
}

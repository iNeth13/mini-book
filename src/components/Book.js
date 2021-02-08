import React, { useState } from "react";

import "./Book.css";

export default function Book({books , handleDelete}) {
 
  return (
    <div className="book-container">
      {books.map((book) => {
        const { bookName, url, id } = book;
        return (
          <div className="book-wrapper" key={id}>
            <h1>{bookName}</h1>
            <img src={url} className="book-image" />
            <button onClick={()=>handleDelete(id)}>Click To Delete</button>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promised Land",
    author: "Barack Obama",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81LtoDMFyeL._AC_UL200_SR200,200_.jpg",
    title:
      "Bag Man: The Wild Crimes, Audacious Cover-up, and Spectacular Downfall of a Brazen Crook in the White House",
    author: "Rachel Maddow",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

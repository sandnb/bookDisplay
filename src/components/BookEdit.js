import { useState, useContext } from "react"    
import BooksContext from "../context/books";

function BookEdit( { book ,  onSubmit } ) {
    const [newTitle,setNewTitle] = useState( book.title );
    const { editTitleById } = useContext(BooksContext);

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(); //  this closes the form after executing
        editTitleById(book.id, newTitle); // this will call the editTitleById from books.js using the following changed title and book id
    }

    return (
    <form className="book-edit" onSubmit={handleSubmit}> {/* onSubmit will helps to submit the form when user presses the enter key and also helps the button click as submit without onClick event */} 
        <input className="input" value={newTitle} placeholder="Enter a New Title" onChange={handleChange} />
        <button className="button is-primary">
            Save
        </button>
    </form>);
};

export default BookEdit;
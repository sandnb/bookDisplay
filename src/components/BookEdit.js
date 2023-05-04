import { useState } from "react"

function BookEdit( { book ,  onSubmit } ) {
    const [newTitle,setNewTitle] = useState( book.title );

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, newTitle);
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
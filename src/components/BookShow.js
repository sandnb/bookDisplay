import { useState } from "react"
import BookEdit from "./BookEdit"


function BookShow( {book, onDelete, onEdit} ) {
    const [showEdit,setShowEdit] = useState(false); // here we dont want to show the pencil icon / showEdit thing by default.


    const handleDeleteClick = () => {
        onDelete(book.id); // here we are deleting even in App.js through the ID value of the book created so we used book.id
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
        console.log(!showEdit)
    };

    const handleSubmit = (id,newTitle) => {
        setShowEdit(false);
        onEdit(id,newTitle)
    }

let content = <h3>{book.title}</h3>;
if (showEdit) {
    content = <BookEdit book={book}  onSubmit={handleSubmit} />;
}

    return ( 
    <div className="book-show">
        <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/200/300`}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>);
};

export default BookShow;
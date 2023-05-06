import { useState } from "react"
import useBookContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit"


function BookShow( {book} ) { // here we removed the props as we introduced the useContext
    const [showEdit,setShowEdit] = useState(false); // here we dont want to show the pencil icon / showEdit thing by default.
    const { deletebookById } = useBookContext();

    const handleDeleteClick = () => {
        deletebookById(book.id); // here we are deleting even in App.js through the ID value of the book created so we used book.id but now it has been chanegd to deleteBookById
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
        console.log(!showEdit)
    };

    const handleSubmit = () => { // here we removed the props as we introduced useContext and onEdit
        setShowEdit(false);
      
    }

let content = <h3>{book.title}</h3>;
if (showEdit) {
    content = <BookEdit book={book}  onSubmit={handleSubmit} />;
}

    return ( 
    <div className="book-show">
        <img 
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200.webp`}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>);
};

export default BookShow;
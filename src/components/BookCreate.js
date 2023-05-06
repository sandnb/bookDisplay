import { useState ,useContext } from "react";
import BooksContext from "../context/books";
function BookCreate() { // this component is responsible to create a 'books' so we do follow the concept of sending props from this component to parent i.e App via event handling thing we did in imageSearchApp.
// but after using context we are removing the prop that is recieving from the parent so we remove it
    const [title,setTitle] = useState(''); // here we are making use this title as the text enterd in the input element
    const { createBook } = useContext(BooksContext); // by this we are giving the access to Provider for createBook Fucntion using this line

    const handleChange = (e) => { // this is to see whatever text is written inside the input element is being taken and given to setTitle; 
     setTitle(e.target.value);
    };
     const handleSubmit = (e) => { //  this function is to submit the form element
     e.preventDefault();  // this prevent the default nature of form element
     createBook(title); // here we  are sending the title term as a prop to the parent through onCreate but after introduction to the context we are changing this to createBook.
     setTitle(''); // this is to make sure that after submitting the form we makesure our input box is cleared
     };

    return ( 
    <div className="book-create"> {/* here we are recieving onCreate as a prop to BookCreate */}
       <form onSubmit={handleSubmit} >
            <h1>Add A Book</h1>
            <label>Title:</label>
            <input className="input" type="text" value={title} placeholder="Enter the book title" onChange={handleChange}/> {/* here we set the value attribute that has to be taken by the element as title so whatever we give the text it is taken as title after that text is given by the setTitle element*/}
            <button className="button" type="submit">Create!!</button>
       </form>
    </div> );
};

export default BookCreate;
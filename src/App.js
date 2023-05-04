import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"
import BookEdit from "./components/BookEdit"

function App() {
  const[books,setBooks] = useState([]); // we have defined the state of the books in App as this is the parent component of all components so here if we made new changes/additions of books then that change is made in all children elements.
 // and also useState intially create a new reference to the empty array named 'books' that we give it as arg intially.

  const deletebookById = (id) => {
    const updatedBooks = books.filter((book) => { // filter doesnt modify the exsisting array but it gives us the new array with all diff objects inside of it that passed our thruthiness test in return statement;
      return book.id !== id; // here we're deleting the books based on ID
    });
    setBooks(updatedBooks); 
  }; // now this function is sent to the last BookList through prop things

  const createBook = (title) => { // here the name of the passing arg can be anything as we are sending title as arg through onCreate in BookCreate so it is not compulsory to give the arg here same name as we gave in BookCreate.js;
    // console.log("Need to add the book with the title:",title); // here we created the event handler and send the title as arg into the function and we will pass this event handler as a prop to BookCreate;
    // Bad Code-- to update the state which is an array/object using below code
    // books.push({title:title}); // push modifies the existing array by pushing the elements at last of the array
    // console.log(books.push);
    // setBooks(books) // but this setBooks create a new reference to the same old books array created intially during the useState hook makes react think that no rerender is needed as both nwe and old reference are pointing to same old array so this doesnt showup anything.
    // Good Code-- this is how to update the array/object elements when they are used in State
    const updatedBooks = [
      ...books,
    {id:Math.round(Math.random() * 9999) , //here we are generating id randomly
      title }]; // here 'title: title' declaration is given as only 'title' 
    setBooks(updatedBooks);
  };
  const editTitleById = (id,newTitle) => {
      const updatedBooks = books.map ((book) => {
        if(book.id === id) {
          return {...books,title:newTitle};
        }
        return book;
      })
      setBooks(updatedBooks);
  };

  return ( // here we have defined an empty array so by default had no an empty array;
    <div className="app"> 
    {/* the below is the component and we are creating a custom prop onCreate and sending createBook to BookCreate*/}
       <h1>Reading List</h1>
       <BookCreate onCreate={createBook}/> 
       <BookList onEdit={editTitleById} onListOut={ books } onDelete={ deletebookById }/> {/* this is used to show the list of the books  */}
    </div>
      
  );
}

export default App;

import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
function App() {
 
const { fetchBooks } = useContext(BooksContext);
//  fetchBooks(); // never do this as if we do this the App re-renders and again we make a network request above and setBooks and again we hit this function and again from starting runs if you have nay doubt check Fetch/HR undre Network tab and see how many reuqest are being made. 
  useEffect(() => { // the function we write in the useEffect will 'always' be called after the intial render/Dom update is done even for 2nd,3rd and other renders function might called depending upon the 2nd arg i.e array, (which decides to call function even after 2nd and 3rd and other renders) we pass to useEffect.
    fetchBooks();
  }, [fetchBooks]);// this is correct way to call fetchBooks for intial render rather than called in upper method,hrer as 2nd arg we have given array so ot means call the function only once after intial render occurs.If no array is mentioned in 2nd arg then call the function evrytime the app re-renders.
  // if any thing present inside the array then like a variable etc then the fucntion is called if that variable is changed in between 2 renders.
 // to end the eslint error for the useEffect we should not give the fetchBooks inside the dependency of array as this lead to tons of network requests we used useCallback on the books.js




  return ( // here we have defined an empty array so by default had no an empty array;
    <div className="app"> 
    {/* the below is the component and we are creating a custom prop onCreate and sending createBook to BookCreate*/}
       <h1>Reading List</h1>
       <BookCreate /> 
       <BookList /> {/* this is used to show the list of the books  */}
    </div>
      
  );
}

export default App;

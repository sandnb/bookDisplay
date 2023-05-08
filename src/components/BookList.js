import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";

function BookList( ) { // here we map out each book in the list of the books array so thats why we used the arg as book as this rendereing is for each book in the list.But after introducing useContext we remove the props
    const{ books } = useBookContext();
   

    const renderedBooks = books.map((book) => { // here we are sending/Passing Down each book in the list of books array to the BookShow Component whihc render each book on to the screen 
        return <BookShow key={ book.id } book= {book}/> // here key is used as we're building a list of different items so it should be unique and also we're passingdown each book that we taken as arg
    });// eventhough after introducing to useCOntext we here use Props such as key and book here 

    return <div className="book-list">
        
        {renderedBooks}
    </div>
};

export default BookList;
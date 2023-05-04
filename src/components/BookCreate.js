import { useState } from "react";

function BookCreate( {onCreate} ) { // this component is responsible to create a 'books' so we do follow the concept of sending props from this component to parent i.e App via event handling thing we did in imageSearchApp.

    const [title,setTitle] = useState(''); // here we are making use this title as the text enterd in the input elem

    const handleChange = (e) => { // this is to see whatever text is written inside the input element is being taken and given to setTitle; 
     setTitle(e.target.value);
    };
     const handleSubmit = (e) => { //  this function is to submit the form element
     e.preventDefault();  // this prevent the default nature of form element
     onCreate(title); // here we  are sending the title term as a prop to the parent through onCreate
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
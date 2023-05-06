import { createContext , useState } from 'react';

const BooksContext = createContext ();

function Provider ({ children }) { // this is a component that we make teels the Provider in return statement that what data to be shared.
    const [count, setCount] = useState(5);

    const valueToShare = {
        count ,
        incrementCount : () => {
            setCount (count + 1);
        }
    };
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}
export { Provider }; 
export default BooksContext;

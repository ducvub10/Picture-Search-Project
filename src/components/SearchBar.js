import {useState} from 'react'

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange= (event) => {
        setTerm(event.target.value);
    };
    
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value = {term} onChange={handleChange}/>
            
        </form>
        
      
    </div>
    );
    
}

export default SearchBar;

// import { useState } from 'react';

// function SearchBar({ onSubmit }) {
//   const [term, setTerm] = useState('');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     onSubmit('asdf');
//   };

//   const handleChange = (event) => {
//     console.log(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input onChange={handleChange} />
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
import {useState} from 'react';
const axios = require('axios');


const Search = ({text, btnText, placeholder, href}) =>{
    const [query,setQuery]=useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();
      axios.get(`https://cloud-meteo.herokuapp.com?address=${query}`).then((response) => {
         console.log(response.data);
     })

    }

return(
    <div className="search">
     <h1>{text}</h1>
     <div className="search--div">
     <form onSubmit={handleSubmit} className="search--div-form">
     <input onChange={(e) => setQuery(e.target.value)} className="search--div-field" type="search" placeholder={placeholder} value={query}/>
     <button className="search--div-btn" href={href}>{btnText}</button>
     </form>
     </div>
    </div>
)
}

export default Search;

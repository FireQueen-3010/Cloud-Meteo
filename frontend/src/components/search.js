import {useState} from 'react';
const axios = require('axios');
const Search = ({text, btnText, placeholder, href}) =>{
    const [query,setQuery]=useState("");
    const [ret, setRet]=useState("");
    const [data, setData]=useState("");
    var Data="";
   const handleSubmit = (e) =>{
    e.preventDefault();
      axios.get(`https://cloud-meteo.herokuapp.com/?address=${query}`).then((response) => {
         Data=response.data;  
         setRet("Found")
         setData(Data);
     }).catch((err)=>{
         setRet("Error")
        })
     
    }
return(
    <div className="search">
     <h1>{text}</h1>
     <div className="search--div">
     <form onSubmit={handleSubmit} className="search--div-form">
     <input onChange={(e) => setQuery(e.target.value)} className="search--div-field" type="search" placeholder={placeholder} value={query}/>
     <button onClick={(e)=> setRet("Sent")} className="search--div-btn">{btnText}</button>
     </form>
     </div>
     {ret==="Sent"&&(<div className="result--div"><h2 className="result--div-head">Loading your weather...</h2></div>)}
     {ret==="Error"&&(<div className="result--div"><h2 className="result--div-head">Something went wrong...is it the location or your internet?</h2></div>)}
     {ret==="Found"&&(<div className="result--div">
     <h2 className="result--div-head">Location: {data.address}</h2>
     <h2 className="result--div-head2">{data.forecast}</h2>
     </div>)}
    
    </div>
)
}

export default Search;

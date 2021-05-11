const axios = require('axios');

const Search = ({text, btnText, placeholder, href}) =>{
    function handleClick (e){
     e.preventDefault();
     axios.get(`https://cloud-meteo.herokuapp.com/weather?address=Visakhapatnam`).then((response) => {
         console.log(response.data);
     })
    }
return(
    <div className="search">
     <h1>{text}</h1>
     <div className="search--div">
     <input className="search--div-field" type="search" placeholder={placeholder}/>
     <button className="search--div-btn" href={href} onClick={handleClick}>{btnText}</button>
     </div>
    </div>
)
}

export default Search;

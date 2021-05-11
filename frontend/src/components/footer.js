const Footer =({text, href})=>{
    return(
        <div className="footer">
         <h1>Created by : <a href={href} target="_blank" rel="noreferrer" className="footer-text">{text}</a></h1>
        </div>
    )
}

export default Footer;

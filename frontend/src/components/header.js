const Header= ({text}) =>{
    return (
        <div className="header">
            <img className="header-logo" src="logo.svg" alt="logo"></img>
            <h1 className="header-text">{text}</h1>
        </div>
    )
}

export default Header;

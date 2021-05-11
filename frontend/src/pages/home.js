import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";

const Home=() =>{
 
    return (
        <div className="home">
         <Header text="Find your weather on the go"/>
         <Search text="Let's find out the Weather!" placeholder="Enter your location" btnText="Woosh!"/>
         <Footer text="FireQueen-3010" href="https://github.com/FireQueen-3010"/>
        </div>
    )
}

export default Home;

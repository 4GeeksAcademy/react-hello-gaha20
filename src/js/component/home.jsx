import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Cards from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
			< Cards/>
			< Cards/>
			< Cards/>
			< Cards/>
			< Footer/>
			
			
		</div>
	);
};

export default Home;



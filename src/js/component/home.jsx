import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			< Navbar/>	
		<div className="container-fluid">
			< Jumbotron/>	
		<div className="container d-flex">
			< Cards/>
			< Cards/>
			< Cards/>
			< Cards/>
		</div>

		</div>
		    < Footer/>
		</div>
	);
};

export default Home;



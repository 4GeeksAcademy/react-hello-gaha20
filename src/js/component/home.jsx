import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
			
		</div>
	);
};

export default Home;



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
		<div className="container-fluid">
			< Navbar/>
			< Jumbotron/>
			<div className="container-fluid d-flex">
				< Cards/>
				< Cards/>
				< Cards/>
				< Cards/>
			</div>
			<div className="container-fluid d-flex">
				< Footer/>
			</div>
		</div>
	);
};

export default Home;



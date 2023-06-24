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
		<div className="container-fluid p-0">
			<div>
				< Navbar/>	
			</div>
			<div className="container" /*style={{minHeight:"100vh"}}*/>
				<div className="container">
					< Jumbotron/>
				</div>	
				<div className="container d-flex flex-wrap justify-content-between">
					< Cards/>
					< Cards/>
					< Cards/>
					< Cards/>
				</div>
			</div>
			<div>
				< Footer/>
			</div>
		</div>
	);
};

export default Home;



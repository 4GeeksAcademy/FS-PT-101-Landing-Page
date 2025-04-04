import React from "react";
import Navbar from "./navbar";
import DivButton from "./divButton";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="bg-dark">
			<Navbar/>
			</div>	
			<div className="center">
				<DivButton/>
			</div>
			<div className="row center">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
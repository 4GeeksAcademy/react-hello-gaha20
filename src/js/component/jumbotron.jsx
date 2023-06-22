import React from "react";

const Jumbotron = () => {
	return (
		<div className="card">
            <h1 className="card-header bg-secondary bg-opacity-25" style= {{fontSize: "5rem"}}>A Warm Welcome!</h1>
            <div className="card-body bg-secondary bg-opacity-25">
                <p className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta sapiente perspiciatis sed qui consequuntur, est ut minus odio nisi a nulla at, quas repellendus aliquam itaque culpa amet! Tempora?</p>
                <a href="#" className="btn btn-primary">Call to action</a>
            </div>
        </div>
	);
};

export default Jumbotron;
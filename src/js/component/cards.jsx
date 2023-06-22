
import React from "react";
const Cards = () => {
    return(

    <div className="p-2">
        <div className="card" style={{width: "16rem"}}>
            <img src="https://images.pexels.com/photos/2539658/pexels-photo-2539658.jpeg?cs=srgb&dl=pexels-leon-macapagal-2539658.jpg&fm=jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
                <div className="card-footer" style={{paddingLeft: "45px"}}>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>    
    </div>
    )
}
export default Cards;
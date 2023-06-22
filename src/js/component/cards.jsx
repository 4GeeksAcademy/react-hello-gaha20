
import React from "react";
const Cards = () => {
    return(

    <div className="p-2">
        <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>    
    </div>
    )
}
export default Cards;
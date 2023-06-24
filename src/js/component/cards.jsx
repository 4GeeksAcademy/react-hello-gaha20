
import React from "react";
const Cards = () => {
    return(

    <div className="p-2">
        <div className="card text-center" style={{minWidth: "16rem", maxWidth:"18rem"}}>
            <img src="https://picsum.photos/200/200" className="card-img-top w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>    
    </div>
    )
}
export default Cards;
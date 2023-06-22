
import React from "react";
const Cards = () => {
    return(

    <div className="p-2">
        <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/id/870/500/325?grayscale&blur=2" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta sapiente perspiciatis sed qui consequuntur, est ut minus odio nisi a nulla at, quas repellendus aliquam itaque culpa amet! Tempora?</p>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>    
    </div>
    )
}
export default Cards;
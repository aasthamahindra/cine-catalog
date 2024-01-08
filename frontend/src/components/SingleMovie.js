import React from "react";

const SingleMovie = (props) => {
    return ( 
        <div className="card">
            <div className="container">
                <h3>{props.movieName}</h3>
                <h5>{props.movieGenre} - {props.movieYear}</h5>
            </div>
        </div>
     );
}
 
export default SingleMovie;
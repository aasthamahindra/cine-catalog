import React from "react";

const SingleMovie = (props) => {
    return ( 
        <div className="card" style={{ background: `url(${props.movieImage}?fit=bounds&width=1280&height=720) center/cover no-repeat`}}>
            <div className="container">
                <h3>{props.movieName}</h3>
                <h5>{props.movieGenre} - {props.movieYear}</h5>
            </div>
        </div>
     );
}
 
export default SingleMovie;
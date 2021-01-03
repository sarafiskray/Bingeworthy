import React from 'react'

const Header = (props) => {
    const {title, image_url, genre, year, avg_score} = props.attributes 
    const numReviews = props.reviews.length

    return (
        <div className="header">
            <h1> <img src={image_url} alt={title} width="50"/> {title + " (" + year + ")"} </h1>
            <div>
                <div className="totalReviews"> {numReviews} </div>
                <div className="starRating"> {avg_score} </div>
                <div className="genre"> {genre} </div>
            </div>


        </div>
    )
}

export default Header;
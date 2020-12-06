import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Show = (props) => {

    const {title, image_url, genre, year, slug, avg_score} = props.attributes

    return (
        <div className="card">
            <div className="show-img">
                <img src={image_url} alt={name} />
            </div>
            <div className="show-title">
                {title}
            </div>
            <div className="show-genre-and-year">
                {genre + ", " + year}
            </div>
            <div className="show-score">
                {avg_score}
            </div>
            <div className="show-link">
                <Link to={"/shows/" + slug}>See Reviews</Link>
            </div>
        </div>
    )
}

export default Show
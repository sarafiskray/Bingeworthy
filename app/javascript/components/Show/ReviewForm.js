import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have you watched {props.name}? Tell the people your thoughts!</div>
                <div className="field">
                    <input onChange={props.handleChange} type="text" name="headline" placeholder="Headline" /> {/* value={props.review.headline} /> */}
                </div>
                <div className="field">
                    <input onChange={props.handleChange} type="text" name="description" placeholder="Description"/> 
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Bingeworthy Score (out of 5):</div>
                        <div>[Star Rating Options]</div>
                    </div>
                </div>
                <button type="Submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm
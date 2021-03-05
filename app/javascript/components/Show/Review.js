import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const User = styled.div`
    padding-top: 10px
`

const Review = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title"> {props.headline} </span>
                <p>{'"' + props.description + '"'}</p>
                <Rating score={props.score} />
                <User>
                    <p>{"by " + props.user}</p>
                </User>
            </div>
        </div>
        // <ReviewCard>
        //     <Headline>
        //         {props.headline}
        //     </Headline>
        //     <Description>
        //         {props.description}
        //     </Description>
        //     <div className="review-rating">
        //         <Rating score={props.score} />
        //     </div>
        //     <div className="user">
        //         {props.user}
        //     </div>
        // </ReviewCard>
    )
}

export default Review
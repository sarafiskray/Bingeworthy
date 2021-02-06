import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const ReviewCard = styled.div`
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    padding: 20px;
    margin: 0px 20px 20px 0px;
`
const Headline = styled.div`
    padding: 20px 0px;
    font-weight: bold;

`
const Description = styled.div`
    padding: 0 0 20px 0;
`

const Review = (props) => {
    return (
        <ReviewCard>
            <Headline>
                {props.headline}
            </Headline>
            <Description>
                {props.description}
            </Description>
            <div className="review-rating">
                <Rating score={props.score} />
            </div>
            <div className="user">
                {props.user}
            </div>
        </ReviewCard>
    )
}

export default Review
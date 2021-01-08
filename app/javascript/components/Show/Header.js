import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;

    img {
        width: 50px;
    }

    h1 {
        font-size: 50px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const Genre = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

const Header = (props) => {
    const {title, image_url, genre, year, avg_score} = props.attributes 
    const numReviews = props.reviews.length

    return (
        <Wrapper>
            <h1 className="show-title"> <img src={image_url} alt={title} /> {title + " (" + year + ")"} </h1>
            <div>
                <TotalReviews> {numReviews + " user reviews."} </TotalReviews>
                <Rating score={avg_score}/>
                <Genre> {genre} </Genre>
            </div>


        </Wrapper>
    )
}

export default Header;
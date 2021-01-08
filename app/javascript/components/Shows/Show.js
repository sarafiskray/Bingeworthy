import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const ShowImg = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    img {
        height: 50px;
        width: 50px;
        border-radius: 3px;
        border: 1px solid #efefef;
    }
`
const ShowTitle = styled.div`
    padding: 20px;
`
const LinkWrapper = styled.div`
    margin: 20px 0;
    height: 50px;

    a {
        color: #fff;
        background-color: #71b406;
        border-radius: 4px;
        padding: 10px 30px;
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid #71b406;
        text-align: center;
        line-height: 20px;
        min-height: 40px;
        margin: 7px;
        font-weight: 600;
        text-decoration: none;
    }
`



const Show = (props) => {

    const {title, image_url, genre, year, slug, avg_score} = props.attributes

    return (
        <Card>
            <ShowImg>
                <img src={image_url} alt={name} />
            </ShowImg>
            <ShowTitle>
                {title + " (" + year + ")"}
            </ShowTitle>
            <div className="show-genre">
                {genre}
            </div>
            <Rating score={avg_score} />
            <LinkWrapper>
                <Link to={"/shows/" + slug}>See Reviews</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Show
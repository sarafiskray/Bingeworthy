import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Wrapper = styled.div`
    a {
        color: black;
    }
`



const Show = (props) => {

    const {title, image_url, genre, year, slug, avg_score} = props.attributes

    return (
        <Wrapper>
            <Link to={"/shows/" + slug}>
                <div className = "col s12 m4 l3">
                    <div className="card">
                        <div className="card-image">
                            <img src={image_url} alt={title} />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{title + " (" + year + ")"}</span>
                            <p>{genre}</p>
                            <Rating score={avg_score} />
                        </div>
                    </div>
                </div>
            </Link>
        </Wrapper>
        // <Card>
        //     <ShowImg>
        //         <img src={image_url} alt={name} />
        //     </ShowImg>
        //     <ShowTitle>
        //         {title + " (" + year + ")"}
        //     </ShowTitle>
        //     <div className="show-genre">
        //         {genre}
        //     </div>
        //     <Rating score={avg_score} />
        //     <LinkWrapper>
        //         <Link to={"/shows/" + slug}>See Reviews</Link>
        //     </LinkWrapper>
        // </Card>
    )
}

export default Show
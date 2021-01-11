import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import Review from './Review'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    height: 100vh;
    overflow: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 

    &:last-child {
        background: grey;
    }

    ::-webkit-scrollbar { 
        width: 0;
        height: 0;
    }
`

const ContentWrapper = styled.div`
    padding-left: 50px;
`


const Show = (props) => {

    const [show, setShow] = useState({})
    const [review, setReview] = useState({})
    //const [reviews, setReviews] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = props.match.params.slug
        const url = '/api/v1/shows/' + slug

        axios.get(url)
        .then( resp => { 
            setShow(resp.data)
            setLoaded(true)
            //console.log(resp.data.included)

        })

        .catch( resp => console.log(resp))
    }, [])

    let reviews
    if (loaded && show.included.length > 0) {
        reviews = show.included.map( (review, index) => {
            return (
                <Review
                    key = {index}
                    headline = {review.attributes.headline}
                    description = {review.attributes.description}
                    score = {review.attributes.score}
                />
            )
        })
    } 

    return(
        <Wrapper>
            { loaded &&
            <Fragment>
                <Column>
                    <ContentWrapper>
                        <Header
                            attributes={show.data.attributes}
                            reviews= {show.included}
                        />  
                        <div className="reviews">  
                            {reviews}
                        </div>`
                    </ContentWrapper>
                </Column>
                <Column>
                    <ReviewForm/>
                </Column>
            </Fragment>
            }
        </Wrapper>
    )
}

export default Show

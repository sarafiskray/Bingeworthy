import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import Review from './Review'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'
import Nav from '../Nav/Nav'

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
    const [review, setReview] = useState({headline: '', description: '', score: 0 })
    //const [reviews, setReviews] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = props.match.params.slug
        const url = '/api/v1/shows/' + slug

        axios.get(url)
        .then( resp => { 
            setShow(resp.data)
            setLoaded(true)
            console.log(resp.data.included)

        })

        .catch( resp => console.log(resp))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e)
        
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const show_id = show.data.id
        const username = "testuser1"
        axios.post('/api/v1/reviews', { ...review, show_id, username})
        .then( (resp) => {
            const included = [ ...show.included, resp.data.data]
            setShow({ ...show, included})
        })
        .catch( resp => console.log(resp))
    }

    const setRating = (score, e) => {
        e.preventDefault()
        
        setReview({...review, score})
    }

    let reviews
    if (loaded && show.included.length > 0) {
        reviews = show.included.map( (review, index) => {
            return (
                <Review
                    key = {index}
                    headline = {review.attributes.headline}
                    description = {review.attributes.description}
                    score = {review.attributes.score}
                    user = {review.attributes.username}
                />
            )
        })
    } 

    return(
        <Fragment>
            <Nav />
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
                            </div>
                        </ContentWrapper>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            review={review}
                            attributes={show.data.attributes}
                        />
                    </Column>
                </Fragment>
                }
            </Wrapper>
        </Fragment>
    )
}

export default Show

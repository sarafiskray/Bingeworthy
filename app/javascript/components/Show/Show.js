import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

const Show = (props) => {

    const [show, setShow] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = props.match.params.slug
        const url = '/api/v1/shows/' + slug

        axios.get(url)
        .then( resp => { 
            setShow(resp.data)
            setLoaded(true)
        })

        .catch( resp => console.log(resp))
    }, [])

    return(
        <div>
            <div className="column">
                {loaded &&
                <Header
                    attributes={show.data.attributes}
                    reviews= {show.included}
                />
                }
                <div className="reviews">  
                    [Reviews Will Go Here]
                </div>
            </div>
            <div className="column">
                <div className="review-form">
                    [Review Form Will Go Here]
                </div>
            </div>
        </div>
    )
}

export default Show

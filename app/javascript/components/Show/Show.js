import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
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

const HeaderWrapper = styled.div`
    padding-left: 50px;
`


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
        <Wrapper>
            <Column>
                <HeaderWrapper>
                    {loaded &&
                    <Header
                        attributes={show.data.attributes}
                        reviews= {show.included}
                    />
                    }
                    <div className="reviews">  
                        [Reviews Will Go Here]
                    </div>`
                </HeaderWrapper>
            </Column>
            <Column>
                <div className="review-form">
                    [Review Form Will Go Here]
                </div>
            </Column>
        </Wrapper>
    )
}

export default Show

import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Show from './Show' 
import styled from 'styled-components'
import SignUp from '../Cognito/SignUp'

const Home = styled.div`
    text-align: center;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`


const Shows = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {

        axios.get('/api/v1/shows.json')
        .then( resp => {
            setShows(resp.data.data) 
            console.log(resp)
        })
        .catch ( resp => console.log(resp) )
    }, [shows.length])

    const listShows = shows.map ( item => { 
        return (
            <Show key={item.attributes.title} attributes={item.attributes} />
        )
    })

    return(
        <Home>
            <SignUp>
            </SignUp>
            <Header>
                <h1>Bingeworthy</h1>
                <Subheader>Find shows you like, from people you trust.</Subheader>
            </Header>
            <Grid>{listShows}</Grid>
        </Home>
        
       
    )
}

export default Shows
import React, { useState, useEffect, useContext } from 'react'
import { AccountContext } from '../Cognito/Accounts'
import axios from 'axios'
import Show from './Show' 
import styled from 'styled-components'
import Nav from '../Nav/Nav'


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
    padding: 80px 80px 20px 80px;
`


const Shows = () => {

    const [shows, setShows] = useState([])
    const [loginStatus, setLoginStatus] = useState(false)


    const { getSession, logout, getUsername } = useContext(AccountContext)

    //hook for getting show data
    useEffect(() => {

        axios.get('/api/v1/shows.json')
        .then( resp => {
            setShows(resp.data.data) 
            console.log(resp)
        })
        .catch ( resp => console.log(resp) )
    }, [shows.length])

    //hook for checking if logged in
    useEffect(() => {
        getSession()
            .then(session => {
                //console.log('Session: ', session)
                console.log('Logged in!')
                setLoginStatus(true)
            })
            .catch(resp => {
                console.log('Not logged in.')
            })
    }, [])

    const listShows = shows.map ( item => { 
        return (
            <Show key={item.attributes.title} attributes={item.attributes} />
        )
    })

    const username = getUsername()

    return(
        <Home>
            <Nav 
                loginStatus={loginStatus}
                logout = {logout} 
                username = {username} 
            />
            <Header>
                <h1>Bingeworthy</h1>
                <Subheader>Find shows you like, from people you trust.</Subheader>
            </Header>
            <Grid>{listShows}</Grid>
        </Home>
        
       
    )
}

export default Shows
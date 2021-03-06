import React, { useState, useEffect, useContext, Fragment} from 'react'
import { AccountContext } from '../Cognito/Accounts'
import axios from 'axios'
import Show from './Show' 
import styled from 'styled-components'
import Nav from '../Nav/Nav'

const Header = styled.div`
    padding: 100px 100px 60px 100px;
    text-align: center;

    h1 {
        font-size: 42px;
    }

    h3 {
        font-weight: 300;
        font-size: 26px;
    }
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
        <Fragment>
            <Nav 
                loginStatus={loginStatus}
                logout = {logout} 
                username = {username} 
            />
            <div className="container">
                <Header>
                    <h1>Bingeworthy</h1>
                    <h3>Shows you like, from people you trust.</h3>
                </Header>
                <div className="row">
                    {listShows}
                </div>
            </div>

        </Fragment>
        
       
    )
}

export default Shows
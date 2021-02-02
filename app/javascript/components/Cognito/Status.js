import React, { useState, useContext, useEffect } from 'react'
import { AccountContext } from './Accounts'

const Status = (props) => {

    //const [status, setStatus] = useState(false)

   // const { getSession, logout, getUsername } = useContext(AccountContext)

   /*  useEffect(() => {
        getSession()
            .then(session => {
                //console.log('Session: ', session)
                console.log('Logged in!')
                setStatus(true)
            })
            .catch(resp => {
                console.log('Not logged in.')
            })
    }, [])
 */
    //const username = getUsername()

    return (
        <div>
            {props.loginStatus ? (
                <div>
                    {"Hello " + props.username + "!"}
                    <button onClick={props.logout}>Log Out</button>
                </div>
            ) : 'Login with username or email'}
        </div>
    )
}

export default Status
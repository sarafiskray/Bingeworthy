import React, { useState, useContext, useEffect } from 'react'
import { AccountContext } from './Accounts'

const Status = () => {

    const [status, setStatus] = useState(false)

    const { getSession, logout, getUsername } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                //console.log('Session: ', session)
                setStatus(true)
            })
    }, [])

    const username = getUsername()

    return (
        <div>
            {status ? (
                <div>
                    {"Hello " + username + "!"}
                    <button onClick={logout}>Log Out</button>
                </div>
            ) : 'Login with username or email'}
        </div>
    )
}

export default Status
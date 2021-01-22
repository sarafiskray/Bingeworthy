import React, { useState, useContext, useEffect } from 'react'
import { AccountContext } from './Accounts'

const Status = () => {

    const [status, setStatus] = useState(false)

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session: ', session)
                setStatus(true)
            })
    }, [])

    return (
        <div>
            {status ? 'You are logged in!' : 'Login with username or email'}
        </div>
    )
}

export default Status
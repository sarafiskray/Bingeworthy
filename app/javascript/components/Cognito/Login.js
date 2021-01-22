import React, { useState, useContext } from 'react'
import { AccountContext } from './Accounts'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { authenticate } = useContext(AccountContext)


    const onSubmit = event => {
        event.preventDefault()

        authenticate(username, password)
            .then(data => {
                console.log('Logged in!', data)
            })
            .catch(err => {
                console.log('Error logging in', err)
            })

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value = {username}
                    onChange = {event => setUsername(event.target.value)}
                />
                <input 
                    value = {password}
                    onChange = {event => setPassword(event.target.value)}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { CognitoUserPool } from 'amazon-cognito-identity-js'

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const poolData = {
        UserPoolId: 'us-east-2_Da69i358x',
        ClientId: '4vtp2186e00ibl8ujari51scl2'
    }

    const userPool = new CognitoUserPool(poolData)


    const onSubmit = event => {
        event.preventDefault()

        const attributes = [
            { Name: 'email', Value: email}
        ]

        userPool.signUp(username, password, attributes, null, (err, data) => {
            if (err) console.log(err)
            console.log(data)
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
                    value = {email}
                    onChange = {event => setEmail(event.target.value)}
                />
                <input 
                    value = {password}
                    onChange = {event => setPassword(event.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
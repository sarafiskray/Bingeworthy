import React, { useState } from 'react'
import UserPool from './UserPool'


const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = event => {
        event.preventDefault()

        const attributes = [
            { Name: 'email', Value: email}
        ]

        UserPool.signUp(username, password, attributes, null, (err, data) => {
            if (err) console.log(err)
            else console.log(data)
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
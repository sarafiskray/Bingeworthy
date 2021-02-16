import axios from 'axios'
import React, { useState } from 'react'
import UserPool from './UserPool'
import Popup from 'reactjs-popup'


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
            else {
                axios.post('/api/v1/users', { username: username})
                .then( resp => console.log(resp))
                .catch( resp => console.log(resp))
                console.log(data)
                //window.location.reload()
            }
        })
    }

    return (
        <Popup trigger={<button className="button"> Sign Up </button>} modal>
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
        </Popup>
    )
}

export default SignUp
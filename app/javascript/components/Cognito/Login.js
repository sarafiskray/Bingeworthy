import React, { useState, useContext } from 'react'
import { AccountContext } from './Accounts'
import './Form.css'
import Popup from 'reactjs-popup'
import styled from 'styled-components'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { authenticate } = useContext(AccountContext)


    const onSubmit = event => {
        event.preventDefault()

        authenticate(username, password)
            .then(data => {
                console.log('Logged in!', data)
                window.location.reload()
            })
            .catch(err => {
                console.log('Error logging in', err)
            })

    }

    return (
        <Popup trigger={<button className="btn"> Log In </button>} modal position="top right">
            <div>
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <input 
                            value = {username}
                            onChange = {event => setUsername(event.target.value)}
                            placeholder ="Log in with username or email"
                        />
                    </div>
                    <div className="field">
                        <input 
                            value = {password}
                            onChange = {event => setPassword(event.target.value)}
                            placeholder = "Password"
                        />
                        <button className="submit-btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </Popup>
    )
}

export default Login
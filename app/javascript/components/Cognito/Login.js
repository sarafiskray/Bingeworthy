import React, { useState, useContext } from 'react'
import { AccountContext } from './Accounts'
import Popup from 'reactjs-popup'

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
        <Popup trigger={<button className="button"> Log In </button>} modal>
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
        </Popup>
    )
}

export default Login
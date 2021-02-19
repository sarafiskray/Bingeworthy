import React, { useState, useContext } from 'react'
import { AccountContext } from './Accounts'
import Popup from 'reactjs-popup'
import styled from 'styled-components'


const LoginButton = styled(Popup)`
    &-content {
        padding: 20px 35px 20px 35px;
        border: 2px solid black;
        border-radius: 4px;
        background-color: oldlace;
    }

    &-overlay {

    }

`

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:32px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:40px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`

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
        <LoginButton trigger={<button className="button"> Log In </button>} modal position="top right">
            <div>
                <form onSubmit={onSubmit}>
                    <Field>
                        <input 
                            value = {username}
                            onChange = {event => setUsername(event.target.value)}
                            placeholder ="Log in with username or email"
                        />
                    </Field>
                    <Field>
                        <input 
                            value = {password}
                            onChange = {event => setPassword(event.target.value)}
                            placeholder = "Password"
                        />
                        <SubmitBtn type='submit'>Log In</SubmitBtn>
                    </Field>
                </form>
            </div>
        </LoginButton>
    )
}

export default Login
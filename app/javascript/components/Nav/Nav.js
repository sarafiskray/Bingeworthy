import React, { Fragment } from 'react'
import SignUp from '../Cognito/SignUp'
import Login from '../Cognito/Login'
import Status from '../Cognito/Status'

const Nav = () => {
    return (
        <Fragment>
            <Status />
            <SignUp />
            <Login />
        </Fragment>
    )
}

export default Nav;
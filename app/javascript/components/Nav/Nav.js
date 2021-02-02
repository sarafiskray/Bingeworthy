import React, { Fragment } from 'react'
import SignUp from '../Cognito/SignUp'
import Login from '../Cognito/Login'
import Status from '../Cognito/Status'

const Nav = (props) => {
    return (
        <Fragment>
            <Status loginStatus={props.loginStatus} logout={props.logout} username={props.username} />
            <SignUp />
            <Login />
        </Fragment>
    )
}

export default Nav;
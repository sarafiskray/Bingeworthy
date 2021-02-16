import React, { useState, useContext, useEffect } from 'react'

const Status = (props) => {

    return (
        <div>
            {"Hello " + props.username + "!"}
        </div>

        // <div>
        //     {props.loginStatus ? (
        //         <div>
        //             {"Hello " + props.username + "!"}
        //             <button onClick={props.logout}>Log Out</button>
        //         </div>
        //     ) : 'Login with username or email'}
        // </div>
    )
}

export default Status
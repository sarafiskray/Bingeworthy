import React from 'react'

const Logout = (props) => {

    return (
        <div>
            <button onClick={props.logout}>Log Out</button>
        </div>
    )
}

export default Logout
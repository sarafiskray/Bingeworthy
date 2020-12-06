import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Show from './Show' 

const Shows = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {

        axios.get('/api/v1/shows.json')
        .then( resp => {
            setShows(resp.data.data) 
            console.log(resp)
        })
        .catch ( resp => console.log(resp) )
    }, [shows.length])

    const listShows = shows.map ( item => { 
        return (
            <Show key={item.attributes.title} attributes={item.attributes} />
        )
    })

    return(
        <div className="home">
            <div className="header">
                <h1>Bingeworthy</h1>
                <p className="subheader">
                    Find shows you like, from people you trust.
                </p>
            </div>
            <div className="grid">
                {listShows}
            </div>
        </div>
        
       
    )
}

export default Shows
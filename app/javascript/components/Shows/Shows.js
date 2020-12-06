import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Shows = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {

        axios.get('/api/v1/shows.json')
        .then( resp => {
            setShows(resp.data.data) 
        })
        .catch ( resp => console.log(resp) )
    }, [shows.length])

    const listShows = shows.map ( item => { 
        return (<li key={item.attributes.title}>{item.attributes.title}</li>)
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
                <ul>{listShows}</ul>
            </div>
        </div>
        
       
    )
}

export default Shows
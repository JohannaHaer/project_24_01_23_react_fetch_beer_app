import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({beer}) => {
    return (
        <>
            <div className='allbeersCard'>
                <img className='allbeersImg' src={beer.image_url} alt="" />
                <div className='allbeersCardDiv'>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Contributed by: {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}</p>
                    <Link to={`/allbeers/${beer._id}`}>Details</Link>
                </div>
            </div>
            <hr />
        </>
    )
}

export default BeerCard
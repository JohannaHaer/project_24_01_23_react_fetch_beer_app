import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({beer}) => {
    return (
        <>
            <section>
                <img src={beer.image_url} alt="" />
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Contributed by: {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}</p>
                    <Link to={`/allbeers/${beer._id}`}>Details</Link>
                    </div>
            </section>
        </>
    )
}

export default BeerCard
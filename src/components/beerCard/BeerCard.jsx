import React from 'react'
import { Link } from 'react-router-dom'
import beerLogo from '../../assets/img/Logo.svg'

const BeerCard = ({beer}) => {
    return (
        <>
            <section>
                <img src={beer.image_url} alt="" />
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}</p>
                    <Link to={`/allbeers/${beer._id}`}>Details</Link>
                    </div>
            </section>
            <Link><img src={beerLogo}/></Link>
        </>
    )
}

export default BeerCard
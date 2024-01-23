import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import backLogo from '../../assets/img/Back.svg'
import beerLogo from '../../assets/img/Logo.svg'

const BeerDetails = () => {

    const beerID = useParams()
    const [beers, setBeers] = useState(null)

    let apiBeer = `https://ih-beers-api2.herokuapp.com/beers/${beerID.beerdetails}`

    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(apiBeer)
            console.log(resp.data);
            setBeers(resp.data)
        }
        apiFetch()
    }, [])

    return (
        <>
            {beers
            ? (
                <div className='beerdetailsCard'>
                    <img src={beers.image_url} />
                    <h2 className='h2Gross'>{beers.name}</h2>
                    <h3>{beers.tagline}</h3>
                    <div className='beerdetailsDiv'>
                        <div>
                            <p className='pGray'>First brewed:</p>
                            <p className='pGray'>Attenuation level:</p>
                        </div>
                        <div className='beerdetailsNumberDiv'>
                            <p className='pGray'>{beers.first_brewed}</p>
                            <p className='pGray'>{beers.attenuation_level}</p>
                        </div>
                    </div>
                    <p className='pBlack'>{beers.description}</p>
                    <p className='pBlack pMargin'>Contributed by: {beers.contributed_by.slice(0, beers.contributed_by.indexOf("<"))}</p>
                </div>
            )
            : (<p>Loading...</p>)
            }
            <Link to='/allbeers'><img className='beerdetailsLink' src={backLogo}/></Link>
            <Link className='allbeersLink allbeersCenter' to='/'><img src={beerLogo}/></Link>
        </>
    )
}

export default BeerDetails
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
            <div>
                <img src={beers.image_url} alt="" />
                <h2>{beers.name}</h2>
                <h3>{beers.tagline}</h3>
                <div>
                    <div>
                        <p>First brewed:</p>
                        <p>Attenuation level:</p>
                    </div>
                    <div>
                        <p>{beers.first_brewed}</p>
                        <p>{beers.attenuation_level}</p>
                    </div>
                </div>
                <p>{beers.description}</p>
            </div>
        )
        : (<p>Loading...</p>)
        }
    </>
  )
}

export default BeerDetails
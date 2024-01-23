import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BeerCard from '../beerCard/BeerCard'
import beerLogo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'


const AllBeers = () => {

  const [beers, setBeers] = useState([])
  

  const api = "https://ih-beers-api2.herokuapp.com/beers"

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await axios.get(api)
      console.log(resp.data);
      setBeers(resp.data)
    }
    fetchApi()
  }, [])

  console.log(beers);
  return (
    <>
      {beers.map((beer, index) => {
        return(
            <div key ={index}>
                <BeerCard
                    beer={beer}
                />
            </div>
        )
    })}
    <Link to='/'><img src={beerLogo}/></Link>
    </>
  )
}

export default AllBeers
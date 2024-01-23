import React from 'react'
import { Link } from 'react-router-dom'
import allbeers from '../../assets/img/allbeers.jpg'
import randombeer from '../../assets/img/randombeer.png'

const Home = () => {
  return (
    <main>
        <h1>Beer Tap App</h1>
        <section className='allbeers'>
            <img src={allbeers} />
            <Link to='/allbeers'>All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, consequuntur maiores illo molestiae labore pariatur deserunt ipsa ullam officia necessitatibus.</p>
        </section>
        <section className='randombeer'>
            <img src={randombeer} />
            <Link to='/random'>Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, consequuntur maiores illo molestiae labore pariatur deserunt ipsa ullam officia necessitatibus.</p>
        </section>
    </main>
  )
}

export default Home
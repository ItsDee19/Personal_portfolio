import React from 'react'
import {BsGithub} from 'react-icons/bs'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
    <div className='about'>
      <p>Hi, my name is </p>
      <section className='animation'>
        <div className='first'><div>Deepak</div></div>
        <div className='second'><div>A Web Developer</div></div>
        <div className='third'><div>and Programmer</div></div>
        <BsGithub />
      </section>
    </div>
    <div className='skills'>
      <h1>Skills:-</h1>
      <ol className='list'>
        <li className='item'>
           <h2>Front-end</h2>
           <span>HTML, CSS, JavaScript, React.js</span>
        </li>
        <li className='item'>
           <h2>Languages</h2>
           <span>C++, Kotlin, C</span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home

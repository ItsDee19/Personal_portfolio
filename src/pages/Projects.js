import React from 'react'
import '../styles/Projects.css'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h3>My Recent Work</h3>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
          <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
          <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
          <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
          <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
 
     
      </div>
    </section>
  )
}

export default portfolio
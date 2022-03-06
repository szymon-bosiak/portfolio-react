import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'A blue graph',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'A mug of black coffee',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Deciding colors',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Another desk with laptop',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'There are two laptops',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Importatnt things',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>LIve Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
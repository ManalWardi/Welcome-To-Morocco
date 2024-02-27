import React from 'react'
import './newsletter.css'

import { Container,Row, Col} from 'reactstrap'
import maleTourist from '../../images/imgProd/artisanat.jpg'

const Newsletter = () => {
  return (
  <section className='newsletter' >
    <div className='containerNews'>
    
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to receive exclusive updates and travel insights.</h2>
                    <div className='newsletter__input'>
                        <input type="email" placeholder='Entrer your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Stay in the loop with the latest travel trends, destination highlights, and insider tips. Your next adventure awaits!</p>
            
                </div>
            </Col>
            <Col lg="2">
                <div className='newsletter__img'>
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        
    </div>
  </section>)
}

export default Newsletter

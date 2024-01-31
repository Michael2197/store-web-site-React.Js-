import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Main() {
  return (
    <>

<div className='hh'>

<Carousel fade>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bestwebcreator.com/shopwise/demo/assets/images/banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="Carousel">
        <h1>Woman Fashion</h1>
        <br/>
        <button className="btnn">SHOP NOW</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bestwebcreator.com/shopwise/demo/assets/images/banner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption >
        <div className="Carousel">
          <h5>50% off in all products</h5>
          <h1>Man Fashion</h1>
          <br/>
          <button className="btnn">SHOP NOW</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bestwebcreator.com/shopwise/demo/assets/images/banner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption >
        <div className="Carousel">
        <h5>Taking your Viewing Experience to Next Level</h5>
          <h1>Summer Sale</h1>
          <br/>
          <button className="btnn">SHOP NOW</button>
          </div>

        </Carousel.Caption>

      </Carousel.Item>


    </Carousel>
    </div>
    

      
    </>
  )
}

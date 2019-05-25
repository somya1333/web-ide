import React, { Component } from 'react'
import FlipperCard from './FlipperCard'
import FlipperCard2 from './FlipperCard2'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class All2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
          <FlipperCard  />
          </div>
          <div className="d-flex flex-column">
          <FlipperCard2  />
          </div>
          </div>

          <br></br>
          <div className="col-6" style={{marginTop:"500px"}}>
          <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={5}
        totalSlides={3}
      >
        <Slider>
          <Slide index={1}  style={{height:"500px"}}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated bounceInUp ">00000000000000000</a>
          </div>
            </div>
          </Slide>
          <Slide index={0}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated infinite bounce delay-2s">11111111111111</a>
          </div>
            </div>
          </Slide>
          <Slide index={2}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated infinite jello delay-2s">2222222222222</a>
          </div>
            </div>
          </Slide>
        </Slider>
        <div className="mt-4 text-center">
        <ButtonBack className="btn">Prev</ButtonBack>  
        <ButtonNext className="btn">Next</ButtonNext>
        </div>
      </CarouselProvider>
      </div>
      </div>
    )
  }
}

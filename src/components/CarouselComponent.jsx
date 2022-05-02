import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../images/1.jpeg'
import bannerimg2 from '../images/2.jpeg'
import bannerimg3 from '../images/3.jpeg'


const CarouselComponent = () => {
  return (
    <Carousel emulateTouch width={600}>
                <div>
                    <img src={bannerimg1} />
                </div>
                <div>
                    <img src={bannerimg2} />
                </div>
                <div>
                    <img src={bannerimg3} />
                </div>
            </Carousel>
  )
}

export default CarouselComponent
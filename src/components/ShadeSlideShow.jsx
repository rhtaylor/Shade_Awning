import React from 'react'
import { Row, Col } from 'reactstrap'; 
import fourHorseStalls from '../pictures/four-horse-stalls.jpg'
import fourHorseStallsThumb from '../pictures/four-horse-stalls-thumb.jpg'
import fullBarn from '../pictures/full-barn.jpg'
import fullBarnThumb from '../pictures/fullBarnThumb.jpg'
import horseNextToShade from '../pictures/horse-next-to-shade.jpg'
import horseNextToShadeThumb from '../pictures/horseNextToShadeThumb.jpg'
import '../scss/shadefromazsun.scss'
import ImageGallery from 'react-image-gallery'; 

const slideImages = [ 
    {original:fourHorseStalls, thumbnail: fourHorseStallsThumb},
    {original: fullBarn, thumbnail: fullBarnThumb}, 
    {original: horseNextToShade, thumbnail: horseNextToShadeThumb}
]

const ShadeSlideShow = ()=>{

    
 
    return(
            <Row className="d-grid pt-0 mt-0 h-10 ig mr-0 pr-0 horse-shade med ">
            <div className='pb-4  mt-0 h-25  justify-content-center align-content-center'>
         <ImageGallery items={slideImages} autoPlay={true} originalHeight={{"height": "10%"}} sizes={{"height": "50%", "width": "50%"}}/>
            </div> 
          </Row>)
}

export default ShadeSlideShow
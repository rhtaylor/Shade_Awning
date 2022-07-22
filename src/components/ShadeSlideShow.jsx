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
            <Row className="pt-4 h-10 ig">
            <div className='d-inline-flex pg-4  h-25  justify-content-center align-content-center cus-height'>
         <ImageGallery items={slideImages} autoPlay={true} originalHeight={{"height": "10%"}} sizes={{"height": "50%", "width": "50%"}}/>
            </div> 
          </Row>)
}

export default ShadeSlideShow
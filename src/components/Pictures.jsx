import React from "react"; 
import fourHorseStalls from '../pictures/four-horse-stalls.jpg'
import fourHorseStallsThumb from '../pictures/four-horse-stalls-small.jpg'
import horseAndBarn from '../pictures/horse-next-to-shade.jpg'
import horseAndBarnThumb from '../pictures/horse-next-to-shade-thumb.jpg'
import ImageGallery from 'react-image-gallery';

const Pictures = () =>{
    const slideImages = [{original: fourHorseStalls, thumbnail: fourHorseStallsThumb}, 
                         {original: horseAndBarn, thumbnail: horseAndBarnThumb}
    ]

    return(<div>
        <ImageGallery items={slideImages} autoPlay={true} originalHeight={{"height": "10%"}} sizes={{"height": "100px", "width": "100px"}}/>
    </div>)

}
export default Pictures
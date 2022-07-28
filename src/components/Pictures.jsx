import React from "react"; 
import four-horse-stalls from '../pictures/four-horse-stalls.jpg'
import four-horse-stalls-thumb from '../pictures/four-horse-stalls-small.jpg'
import horse-and-barn from '../pictures/horse-next-to-shade.jpg'
import horse-and-barn-thumb from '../pictures/horse-next-to-shade-thumb.jpg'
import ImageGallery from 'react-image-gallery';

const Pictures = () =>{
    const slideImages = [{original: four-horse-stalls, thumbnail: four-horse-stalls-thumb}, 
                         {original: horse-and-barn, thumbnail: horse-and-barn-thumb}
    ]

    return(<div>
        <ImageGallery items={slideImages} autoPlay={true} originalHeight={{"height": "10%"}} sizes={{"height": "100px", "width": "100px"}}/>
    </div>)

}
export default Pictures
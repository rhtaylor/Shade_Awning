import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Gallery from 'react-photo-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import fourHorseStalls from '../pictures/four-horse-stalls.jpg'
import fourHorseStallsThumb from '../pictures/four-horse-stalls-thumb.jpg'
import horseAndBarn from '../pictures/horse-next-to-shade.jpg'
import horseAndBarnThumb from '../pictures/horseNextToShadeThumb.jpg'
import ShadePhoenixCorner from '../pictures/Shade-Phoenix-Corner.jpg'
import HorseShadeCaveCreek from '../pictures/horse-shade-Cave-Creek.jpg'
import HorseShadeCaveCreekGallery from '../pictures/horseShadeCaveCreekGallery.jpg'
import PoolShade from '../pictures/Pool-Shade-Phoenix.jpg'
import PoolShadeThumb from '../pictures/Pool-ShadeThumb.jpg'
import HorseStalls from '../pictures/10X20-Shade-4Rail-StallsMed.jpg'
import HorseStallsThumb from '../pictures/10X20-Shade-4Rail-StallsThumb.jpg'
import Colors from '../pictures/Factory-Shade-Colors_selection.jpg'
import ColorThumb from '../pictures/Factory-Shade-Colors_selection.jpg'
import large_structure_scottsdale from '../pictures/large_structure_Nscottsdale.jpg'
import large_structure_thumb from '../pictures/large_structureThumb.jpg'
import house_shade_arizona from '../pictures/Shade-Phoenix-Side.jpg'                       
import open_barn_phoenix from '../pictures/open-barn-back.jpg'
import open_barn_phoenix_thumb from '../pictures/open-barn-backThumb.jpg'
import RV_Shade_Scottsdale from '../pictures/RV-Shade-15FT-Tall.jpg' 
import RV_Shade_ScottsdaleThumb from '../pictures/RV-Shade-15FT-TallThumb.jpg'
import Gilbert_horse_stalls from '../pictures/horse-stalls-gilbert.jpg'
import Gilbert_horse_stallsThumb from '../pictures/horse-stalls-gilbertThumb.jpg'
import HorseShadeGilbert from '../pictures/Horse-Shade-Window-Gilbert.jpg'
import HorseShadeGilbertThumb from '../pictures/Horse-Shade-Window-GilbertThumb.jpg'
import "../scss/shadefromazsun.scss"
import {Button} from "reactstrap";
const ShadeGallery = [    {original: HorseShadeGilbert, thumbnail: HorseShadeGilbertThumb}, 
                          {original: Gilbert_horse_stalls, thumbnail: Gilbert_horse_stallsThumb},
                          {original: open_barn_phoenix, thumbnail: open_barn_phoenix_thumb},
                          {original: RV_Shade_Scottsdale, thumbnail: RV_Shade_ScottsdaleThumb},
                          {original: fourHorseStalls, thumbnail: fourHorseStallsThumb}, 
                          {original:horseAndBarn, thumbnail: horseAndBarnThumb},
                          {original: HorseShadeCaveCreek, thumbnail: HorseShadeCaveCreekGallery}, 
                          {original: PoolShade, thumbnail: PoolShadeThumb}, 
                          {original: HorseStalls, thumbnail: HorseStallsThumb}, 
                          {original: Colors, thumbnail: ColorThumb}, 
                          {original: large_structure_scottsdale, thumbnail: large_structure_thumb}
    ]
    
const FullShadeInstalledGallery=()=>{
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"
        script.async = true;
        script.type="text/javascript";
        script.amzn_assoc_placement = "adunit0";
        script.amzn_assoc_search_bar = "true";
        script.amzn_assoc_tracking_id = "shadefromazsu-20";
        script.amzn_assoc_ad_mode = "manual";
        script.amzn_assoc_ad_type = "smart";
        script.amzn_assoc_marketplace = "amazon";
        script.amzn_assoc_region = "US";
        script.amzn_assoc_title = "Arizona Shade";
        script.amzn_assoc_linkid = "4574ee18041f6bdbf415ab5f585d09ba";
        script.amzn_assoc_asins = "B071NM6SKJ,B01NBM8ONK,B072M6Z17W,B07PNKNWQD";
        document.getElementsByTagName('head')[0].appendChild(script);
    },[]);
    const nav = useNavigate();
    const back = () =>{
        nav(-1)
    }
    return(<Row className="d-flex justify-content-center">
            <Col className="w-100 h-75 mt-5">
                <div className="w-100 flex-column">
                <Button className="w-100 m-auto justify-content-center mScreen" onClick={back}>Back</Button>
                <ImageGallery autoPlay={true}
                thumbnailPosition="top"
                lazyLoad="true"
                showIndex="true"
                slideDuration={500}
                items={ShadeGallery} originalHeight={{"height": "10%"}} sizes={{"height": "100px", "width": "100px"}}/>
            </div>
            </Col>
           </Row>)
}
export default FullShadeInstalledGallery
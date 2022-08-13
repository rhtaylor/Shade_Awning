import react, {useEffect} from 'react'
import { Link } from "react-router-dom";
import sky_kennel from './pictures/four-horse-stalls.jpg'
import './scss/shadefromazsun.scss'
import ShadeSlideShow from './components/ShadeSlideShow.jsx'
import { Button } from 'reactstrap';
import './App.css'
function App() { 
  useEffect(()=>{ 

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.text='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=645a578a-b9d2-4ffe-a077-f30061505b73'
    s.async = true;
    s.amzn_assoc_placement = 'adunit0';
    s.amzn_assoc_tracking_id = 'shadefromazsu-20';
    s.amzn_assoc_ad_mode = 'manual';
    s.amzn_assoc_ad_type = 'smart';
    s.amzn_assoc_marketplace = 'amazon';
    s.amzn_assoc_region = 'US';
    s.amzn_assoc_linkid = "94d2af2548f836f3158c394ab5297f13";
    s.amzn_assoc_design = "in_content";
    s.amzn_assoc_asins = "B01NBM8ONK,B071NM6SKJ,B09MQGN775,B00KQZ9M6C";
    document.body.appendChild(s)

        const script = document.createElement('script');
        script.text ="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=1f361c40-8ba6-4a7a-8565-10cf2fe80411";
        const script2 = document.createElement('script');
        script2.text = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=a5eb903a-db86-480d-9650-53acb6a6b4e9";
        script2.async = true; 
        document.body.appendChild(script2)
      },[])


  return (
    <div className="App">
      <header className="arizona_sun">
        <p className='l'>&nbsp;</p>
        <h1>Ok-Corrals Shade & Awning</h1>
        <p className='l'>&nbsp;</p>
        <p className='l'>&nbsp;</p>
        <br/>
      </header>
      <h1 className='az_sun l AzHorseShade mb-0'>We build Barn, Horse Shade, Awning, Car Port, Shed Rows</h1>
        <h1 className='az_sun s AzHorseShade mb-0'>We build the best Horse Shade, Awnings, Car Ports</h1>
        <div className='h-25 justify-content-center cus-height AzHorseShade'>
        <div className='AzHorseShade'>
        <nav
        style={{
          marginLeft: '46%',
          justifyContent: 'center',
        }} 
        className="shady"
      >
        <Link to="/FullShadeInstalledGallery">
        <Button color="secondary" className="btn btn-dark btn-lg" id='m-l'>Gallery</Button>
        </Link>
      </nav>
      </div>
      <div className='align-content-end justify-content-center AzHorseShade'>
        <br/>
      <h1 className='justify-content-center'>Installed in arizona within a month</h1>
      <h3 className='justify-content-center'>520-730-7020</h3>
      <div className="AzHorseShade">
      <p className='justify-content-center text-primary font-weight-bold'>🐎 OK Corrals has been the primium Horse Shade installer in Arizona since 2006</p>
      <br/>
      <h1 className='justify-content-center text-primary font-weight-bold l'>We specialize in horse shade, horse shelters, mare motels, Barns, Car Ports, Pool Shade.</h1>
      <p className='justify-content-center text-primary font-weight-bold'>We build the shade, the horse just enjoys it! 🐴</p>
      <a className='justify-content-center' href='http://ok-corrals.com/' target="_blank">OK-Corrals, llc</a>
      </div>
      <h1><a href="https://www.bbb.org/search?find_country=USA&find_latlng=33.515822%2C-112.088177&find_loc=Phoenix%2C%20AZ&find_text=OK%20Corrals%20LLC&page=1&sort=Name&touched=1" target="_blank">A+ Rating with Better Business Bureau</a></h1>
      <p className='justify-content-center text-dark'>*purcahse Awnings off this page and we will add it to your Ok-Corral, llc structure!</p>
      <p className='justify-content-center mt-0 mb-0 pt-0 text-dark'>*installation fees apply</p>
      </div>
      </div>
      <ShadeSlideShow />
      <div className='d-flex w-100 justify-content-center'>
      <div className="justify-content-center mt-4 pt-5" id="amzn-assoc-ad-1f361c40-8ba6-4a7a-8565-10cf2fe80411"></div> 
      <div className="justify-content-center" id="amzn-assoc-ad-a5eb903a-db86-480d-9650-53acb6a6b4e9"></div>
      
      <div className='justify-content-center' id="amzn-assoc-ad-645a578a-b9d2-4ffe-a077-f30061505b73"></div>
      <div className='justify-content-center' id="amzn-assoc-ad-645a578a-b9d2-4ffe-a077-f30061505b73"></div>
      </div>
      <footer className='horse_shade_roof'>
        <h6 className="az_sun">Ok Corrals, llc</h6>
      </footer>
    </div>
  );
}

export default App;

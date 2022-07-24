import react, {useEffect} from 'react'
import { Link } from "react-router-dom";
import sky_kennel from './pictures/four-horse-stalls.jpg'
import './scss/shadefromazsun.scss'
import ShadeSlideShow from './components/ShadeSlideShow.jsx'
import { Button } from 'reactstrap';

function App() { 
  useEffect(()=>{
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
        <p>&nbsp;</p>
        <h1>Ok-Corrals Shade & Awning</h1>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <br/>
      </header>
      <h1 className='az_sun l'>We build Barn, Horse Shade, Awning, Car Port, Shed Rows</h1>
        <h1 className='az_sun s'>We build the best Horse Shade, Awnings, Car Ports</h1>
        <div className='h-25 justify-content-center cus-height'>
        {/* <div className=''>
        <nav
        style={{
          marginLeft: '46%',
          justifyContent: 'center',
        }}
      >
        <Link to="/Pictures">
        <Button color="secondary" className="btn btn-dark btn-lg">Pictures</Button>
        </Link>
      </nav>
      </div> */}
      <div className='align-content-end justify-content-center'>
        <br/>
      <h1 className='d-flex justify-content-center'>Installed in arizona within a month</h1>
      <h3 className='d-flex justify-content-center'>520-730-7020</h3>
      <a className='d-flex justify-content-center' href='http://ok-corrals.com/' target="_blank">OK-Corrals, llc</a>
      <p className='d-flex justify-content-center'>*purcahse Awnings off this page and we will add it to your Ok-Corral, llc structure!</p>
      </div>
      </div>
      <ShadeSlideShow />
      <div className="mt-4 pt-5" id="amzn-assoc-ad-1f361c40-8ba6-4a7a-8565-10cf2fe80411"></div> 
      <div id="amzn-assoc-ad-a5eb903a-db86-480d-9650-53acb6a6b4e9"></div>
      <footer>
        <h6 className="az_sun">Ok Corrals, llc</h6>
      </footer>
    </div>
  );
}

export default App;

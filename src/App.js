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
        <h1>Ok Corrals Shade & Awning</h1>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </header>
      <h1 className='az_sun l'>We build Horse Shade Awnings Car Ports Shed Rows</h1>
        <h1 className='az_sun s'>We build the best Horse Shade, Awnings, Car Ports</h1>
        <div className='d-flex flex-row h-25 justify-content-center align-content-center cus-height'>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: 'flex',
          justifyContent: 'center',

        }}
      >
        <Link to="/Pictures">
        <Button color="secondary" class="btn btn-dark btn-lg">Pictures</Button>
        </Link>
      </nav>
        
        </div>
      <div id="amzn-assoc-ad-1f361c40-8ba6-4a7a-8565-10cf2fe80411"></div> 
      <div id="amzn-assoc-ad-a5eb903a-db86-480d-9650-53acb6a6b4e9"></div>
      <footer>
        <h6 className="az_sun">Ok Corrals, llc</h6>
      </footer>
    </div>
  );
}

export default App;

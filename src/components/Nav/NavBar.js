import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

const NavBar = () =>{
    return( <>
               <div className='az_sun'>
        <nav
        style={{
          marginLeft: '40%',
          justifyContent: 'center',
          margin: '2px'
        }} 
        className="shady contact_nav_bar"
      >
        <Link to="/FullShadeInstalledGallery">
        <Button color="secondary" className="btn btn-dark btn-lg mr-1" id='m-l'>Gallery</Button>
        </Link>
        <Link to='/awning'>
          <Button color='secondary' className="btn btn-dark btn-lg mr-1" id='m-l'>Awning</Button>
        </Link>
        <Link to='/'>
          <Button color='secondary' className="btn btn-dark btn-lg mr-1" id='m-l'>Home</Button>
        </Link>
      </nav>
      </div>
        </>
    )
}

export default NavBar
import { Row, Col } from 'reactstrap';

const ShadeAdd = ({i, img, title, add}) =>{
    
    return(
        <div className='targetSmall'><Col key={i} className='flex-column justify-content-center'>
            
            <div className='d-flex flex-column justify-content-center targetSmall'>
                <h3 className='justify-content-center mx-auto text-white'>{title}</h3>
                <a href={add} className="justify-content-center">
                    <img  className="mx-auto" target="_blank" className="smaller" height="200px" width="auto" src={img}/>
                </a>
            </div>
          </Col>
          </div>)
}
export default ShadeAdd
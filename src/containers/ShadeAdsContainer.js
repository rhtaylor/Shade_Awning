import react from 'react'
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import sun_screen from '../pictures/SunScreen.jpg'
import giant_awning from '../pictures/GiantAwning.jpg'
import shade_assortment from '../pictures/Assortment_of_Shade.PNG'
import ShadeAdd from '../components/ShadeAdd.jsx'
import {Button} from "reactstrap";
const addArray = [{add: "https://www.amazon.com/Cool-Area-Grommets-Pergola-Greenhouse/dp/B0B4MRQ3DT/ref=sr_1_12?camp=1789&amp;creative=9325&amp;keywords=Shade&amp;linkCode=ur2&amp;linkId=ad1595ff60529bf5ffa65bff6d92b791&amp;qid=1660653568&amp;s=lawn-garden&amp;sr=1-12&_encoding=UTF8&tag=shadefromazsu-20&linkCode=ur2&linkId=5644f769ebf27b3cdebc1949f584e652&camp=1789&creative=9325",
                   img: sun_screen,
                   title: 'Partial Shade Blocker'
                  },
                  { add:  "https://www.amazon.com/20x20Sun-Garden-Outdoor-Facility-Activities/dp/B07LFYCLVS/ref=sxin_15?asc_contentid=amzn1.osa.d3ecfef9-b5a1-42fe-b34d-adad01f6c7bf.ATVPDKIKX0DER.en_US&amp;asc_contenttype=article&amp;ascsubtag=amzn1.osa.d3ecfef9-b5a1-42fe-b34d-adad01f6c7bf.ATVPDKIKX0DER.en_US&amp;content-id=amzn1.sym.15d473d8-31ee-48d9-a207-aaa8ce868fca%253Aamzn1.sym.15d473d8-31ee-48d9-a207-aaa8ce868fca&amp;creativeASIN=B07LFYCLVS&amp;crid=32PII88M0WJZO&amp;cv_ct_cx=shade&amp;cv_ct_id=amzn1.osa.d3ecfef9-b5a1-42fe-b34d-adad01f6c7bf.ATVPDKIKX0DER.en_US&amp;cv_ct_pg=search&amp;cv_ct_we=asin&amp;cv_ct_wn=osp-single-source-earns-comm&amp;keywords=shade&amp;linkCode=oas&amp;pd_rd_i=B07LFYCLVS&amp;pd_rd_r=a1b8758d-7cff-4b12-a14e-2eec34a7da1e&amp;pd_rd_w=ftIuD&amp;pd_rd_wg=Wanee&amp;pf_rd_p=15d473d8-31ee-48d9-a207-aaa8ce868fca&amp;pf_rd_r=XK32WWG3K2JV4N83GHRV&amp;qid=1660652144&amp;sprefix=shade%252Caps%252C125&amp;sr=1-3-071eec3b-aca5-449e-bbff-36c3e2e2e9e2&amp;tag=thisoldhouse05-20&amp;ufe=app_do%253Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&_encoding=UTF8&tag=shadefromazsu-20&linkCode=ur2&linkId=c0fd2d7e28649344cf80bfb6542aff4c&camp=1789&creative=9325",
                    img: giant_awning,
                    title: "Full SUN Blocker"
                    }, 
                  { add: "https://www.amazon.com/gp/search?ie=UTF8&tag=shadefromazsu-20&linkCode=ur2&linkId=21848bc855ff184806db2be28949a0b9&camp=1789&creative=9325&index=lawngarden&keywords=Shade",
                    img: shade_assortment, 
                    title: "Select the Awning right for you"
                  }
                ]

const ShadeContainer = () =>{
  const nav = useNavigate();
  const back = () =>{
      nav(-1)
  }

        const makeShadeAds = ()=>{
            let adds =  addArray.map((a, i)=><ShadeAdd key={i} img={a.img} title={a.title} add={a.add}/>)
            return adds
        }    

        return(<Row className='az_sunny'>
                <Col className='flex-column w-100 justify-content-center targetSmall'>
                <h1 className="text-center">Add the customizable items to your OK-Corral Structure!</h1>
                <p className='text-warning text-center'>Purchase these items by clicking on the image and we will add it to your shade</p>
                <p className='text-warning text-center'>*installation fees apply</p>
                <Button className="w-100 m-auto justify-content-center mScreen smaller l" onClick={back}>Back</Button>
                <div className='d-flex w-100 justify-content-center targetSmall'>
                {makeShadeAds()}
                </div>
                 <footer className='horse_shade_roof'>
                  <h6 className="az_sun">Ok Corrals, llc</h6>
                 </footer>
                </Col>
               </Row>)
}
export default ShadeContainer

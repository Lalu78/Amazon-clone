//import { PublishSharp } from '@material-ui/icons'
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
      <div className="home">
          
          <div className="home_container">
          
              <img className="home_image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg"
                  alt=""
              />
              <div className="home_row">
                  <Product
                      id={1}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
                  <Product
                      id={2}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
              </div>
              <div className="home_row">
                  <Product
                      id={3}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
                  <Product
                      id={5}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
                  <Product
                      id={6}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
              </div>
              <div className="home_row">
                  <Product
                      id={7}
                      title="the lean startup"
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                     rating={4}
                  />
                  
              </div> 



          </div>
      
    </div>
  )
}

export default Home

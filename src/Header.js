import React from  'react';
import './Header.css';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  

  return (
    <div className='header'>
      <Link to="/">
        <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
        </Link>
      <div className="header_search">
          <input
          className="header_searchInput"
                  type="text" />
              
              <SearchIcon
                  className= "header_searchIcon"/>
      </div>

      <div className="header_nav">
        <Link to ={!user && '/login'}>
          <div onClick ={handleAuthentication}
            className="header_option">
                  <span className="header_option_line1">
                       Hello
                  </span>
                  <span className="header_option_line2">
                     {user ? "Sign OUt":"Sign IN"}
                  </span>

                  </div>
          </Link>      
      

              <div className="header_option">
                  <span className="header_option_line1">
                     Returns
                  </span>
                  <span className="header_option_line2">
                     & Orders
                  </span>

              </div>

              <div className="header_option">
                  <span className="header_option_line1">
                    Your
                  </span>
                  <span className="header_option_line2">
                    Prime
                  </span>

              </div>
              <Link to ="/checkout">
              <div className="header_optionBasket">
                  
                 <LocalMallIcon />
                  <h1 className="header_option_line2 header_basketdsCount" > { basket?.length}</h1>
                  
              </div>
              </Link>
              
       </div>
      
    </div>
  )
}

export default Header

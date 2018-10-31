import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
 
  render() {
          return(
              <div className="foot">
            
            <ul>
                <li >
                    <a href="#"> <span><ion-icon name="logo-facebook"></ion-icon></span></a>
                    <a href="#"><span><ion-icon name="logo-youtube"></ion-icon></span></a>
                    <a href="#"><span><ion-icon name="logo-github"></ion-icon></span></a>
                </li>
                <small>Copyright © Your Website 2018</small>
            </ul>
               
            </div>
        )
  }
  
}



export default Footer;

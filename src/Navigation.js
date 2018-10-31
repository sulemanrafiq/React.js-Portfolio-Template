import React, { Component } from 'react';

//import './App.css';
import "./Navigation.css"

class Navigation extends Component {
  render() {
      const section = ['Home', 'About','Services','Contacts'];
      const newSection = section.map( sections => {
      return (
        <li><a href={'#' + sections } >{sections}</a></li>

      )

      } );
    return (
        <nav>
            <h2 className="logo">{this.props.logoTitle}</h2>

            <ul>
                {newSection}
            </ul>
        </nav>
      
    );
  }
}

export default Navigation;

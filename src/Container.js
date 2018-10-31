import React, { Component } from 'react';
import './Container.css'

class Container extends Component {
  render() {
 
      return (
       
        <div className="Cont">
        <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
        <p>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
        </p>
        <a href="btn">{this.props.btn}</a>
        </div>

      );

      }
}

export default Container;

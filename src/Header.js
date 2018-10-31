import React, { Component } from 'react';
import Background from './img/bg-masthead.jpg';
import "./Header.css"
const myStyle = {
    backgroundImage: `url( ${ Background } ) `,
    height: '50vh',
    backgroundSize:'cover'
}
class Header extends Component {
  render() {
 
      return (
        <header style={myStyle}>
        <h1>{this.props.title}</h1>
        <p>A Free Bootstrap Theme by Strat Bootstrap</p>
        <a href="button">{this.props.button}</a>
        </header>

      );

      }
}

export default Header;

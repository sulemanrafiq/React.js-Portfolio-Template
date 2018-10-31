import React, { Component } from 'react';
import './Section.css';


import Background from './img/bg-callout.jpg';
const myStyle = {
    backgroundImage: `url( ${ Background } ) `,
    height: '50vh',
   
}
class Section extends Component {
 
  render() {
          return(
              <div className="sec">
            <header style={myStyle}>
        <h1>{this.props.title}</h1>
        <p>Welcome to your <br></br> next website!</p>
        <a href="button">{this.props.button}</a>
        </header>
        </div>
        )
  }
  
}



export default Section;

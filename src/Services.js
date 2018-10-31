import React, { Component } from 'react';
import './Services.css';
class Services extends Component {
   constructor(){
       super();
       this.state={
           data:[
        {
            icon: <ion-icon name="phone-portrait"></ion-icon>,
            title: 'Responsive',
            description: 'Looks great on any screen size!'
        },  
        {
            icon:<ion-icon name="create"></ion-icon>,
            title: 'Redesigned',
            description: 'Freshly redesigned for Bootstrap 4'
        },
        {
            icon:<ion-icon name="checkmark"></ion-icon>,
            title: 'Favorited',
            description: 'Millions of users  Start Bootstrap!'
        },
        {
            icon:<ion-icon name="help"></ion-icon>,
            title: 'Question',
            description: 'I mustache you a question...'
        }
        ]
    }
   }
  render() {
          return(
            <div className="container">
            <h3>SERVICES</h3>
            <h1>What We Offer</h1>
            <div className="row">
               {
                   this.state.data.map((datas)=>
                   <div >
                    <span className="img">{datas.icon}</span>
                    <h2>{datas.title}</h2>
                    <p>{datas.description}</p>
                    </div>
                   )
               }
            </div>
            </div>
        )
  }
  
}



export default Services;

import React, { Component } from 'react';


const iconObj =[
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'responsive',
        description: 'Look Greet On any size'
    },  
    {
        icon:<ion-icon name="phone-portrait"></ion-icon>,
        title: 'responsive',
        description: 'Look Greet On any size'
    },
    {
        icon:<ion-icon name="phone-portrait"></ion-icon>,
        title: 'responsive',
        description: 'Look Greet On any size'
    },
    {
        icon:<ion-icon name="phone-portrait"></ion-icon>,
        title: 'responsive',
        description: 'Look Greet On any size'
    }
    ]
class List extends Component {
  render() {
      

      
    
        return(
            <div>
            {this.props.iconObj.icon}
            {this.props.iconObj.title}
            {this.props.iconObj.description}
           
            </div>
        )
  }
  
}



export default List;

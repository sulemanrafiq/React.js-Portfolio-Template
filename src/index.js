import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navigation from "./Navigation";
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Container from './Container';
import Services from './Services';
import Section from './Section';
import Footer from './Footer';


class App extends Component {
    render() {
       return (
        <div>
            <Navigation logoTitle="React Project" />
            <Header title="Style Portfolio" button="Find Out More"/>
            <Container btn="What We Offer"/>
            <Services />
            < Section button="Download Now!"/>
            <Footer/>

            
        </div> 

       );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();

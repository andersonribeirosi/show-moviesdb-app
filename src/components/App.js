import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routes from '../main/Routes'

class App extends Component {

  render() {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <Routes />
        <div className="clearfix"></div>
        <div className="content">
          <Footer className="globalConfig" />
        </div>
      </>
    );
  }
}

export default App;

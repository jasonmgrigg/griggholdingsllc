import React, { Component } from 'react';
import '../styles/services.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Services extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="homeServicesTitle">Home Services Offered</div>
          <div classname="servicesListContainer">
            <ul classname="servicesList">
              <li classname="servicesItem">
                General Carpentry
              </li>
              <li classname="servicesItem">
                Windows
              </li>
              <li classname="servicesItem">
                Plumbing
              </li>
              <li classname="servicesItem">
                Doors
              </li>
              <li classname="servicesItem">
                Painting
              </li>
              <li classname="servicesItem">
                Decks
              </li>
              <li classname="servicesItem">
                Roof Repair
              </li>
              <li classname="servicesItem">
                Gutter Cleaning
              </li>
            </ul>
          </div>
      <Footer />
      </div>
    );
  }
}

export default Services;
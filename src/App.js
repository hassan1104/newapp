import React from 'react';
// import logo from './logo.svg';
//import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#page-top">Home</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="navbar-brand text-uppercase"  href="#search">Search</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand text-uppercase" href="#portfolio">Products</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand text-uppercase" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome!</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#search">Start!</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="search">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Search</h2>
          <h3 className="section-subheading text-muted"> </h3>
        </div>
      </div>

      <form id="contactForm" name="sentMessage" noValidate="noValidate">
        <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="form-group">
              <input className="form-control btn btn-primary" id="img" type="file" placeholder="Choose an image..." required="required" data-validation-required-message="Please enter your name."/>
              <p className="help-block text-danger"></p>
            </div>
              </div>
              <div className="col-md-4 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-md text-uppercase" type="submit">Upload</button>
              </div>
            </div>
          </form>
    </div>
  </section>

  <div>
    <h2 className="section-heading text-uppercase">Product</h2>
    <table className="table table-borderless">  
      <tbody>

        <tr>
          <td><img src='.t/bottom.jpg' alt="Bottoms" /></td>
          <td><img src="t/check.jpg" alt="Shirts" /></td>
          <td><img src="t/coat.jpg" alt="Coats" /></td>
        </tr>
        
        <tr>
          <td><img src="t/sandal.jpg" alt="Sandals" /></td>
          <td><img src="t/sneakers.jpeg" alt="Sneakers" /></td>
          <td><img src='bad.jfif' alt="Bags" /></td>
        </tr>
    
        <tr>
          <td colSpan="3"><img src="t/shirt.jfif" alt="T-Shirts" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted"> </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" noValidate="noValidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
         </div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;

import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left col-md-4 col-sm-6'>
        <p className='about'>
          <span> About the company</span> APPS Activewear is not just active
          wear but any type of apparel and specialty products. We can produce
          prints and embroidery designs on all sorts of apparel and accessory
          items including bags, safety gear, towels and more.
        </p>
        <div className='icons'>
          <a href='/'>
            <i className='fa fa-facebook'></i>
          </a>
          <a href='/'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='/'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a href='/'>
            <i className='fa fa-google-plus'></i>
          </a>
          <a href='/'>
            <i className='fa fa-instagram'></i>
          </a>
        </div>
      </div>
      <div className='footer-center col-md-4 col-sm-6'>
        <div>
          <i className='fa fa-map-marker'></i>
          <p>
            <span>150 E. Aurora St Suite D</span>
            Waterbury, CT
          </p>
        </div>
        <div>
          <i className='fa fa-phone'></i>
          <p>203-695-2480</p>
        </div>
        <div>
          <i className='fa fa-envelope'></i>
          <p>
            <a href='/'> Appsactivewear@gmail.com</a>
          </p>
        </div>
      </div>

      <div className='footer-right col-md-4 col-sm-6'>
        <a href='/'>
          <img
            className='footer-logo'
            src='https://i.postimg.cc/DygJdcXm/APPS.png'
          ></img>
        </a>
        <h4 style={{ color: "white" }}>
          APPS Screen-Printing
          {/* <span> logo</span> */}
        </h4>
        <p className='menu'>
          <a href='/'> Home</a> |<a href='/about'> About</a>|
          <a href='/catalog'> Catalog</a> |<a href='/quote'> Request A Quote</a>
        </p>
        <p className='name'> APPS Screen-Printing&copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Helmet } from "react-helmet";
import "./services.css";

const ServicesTile = () => {
  return (
    <div className='wrapper'>
      <div className='tile-card'>
        <div className='img-wrapper'>
          <img
            className='shirt'
            src='https://i.postimg.cc/vHRC2tZf/imageedit-1-8001840362.jpgM'
            alt='image of shirt'
          />
        </div>
        <div className='front'>
          <h1>Silk Screening</h1>
        </div>
        <div className='right'>
          <h2>Silk Screening</h2>
          <ul>
            <li>T-Shirts</li>
            <li>Uniforms</li>
            <li>Jackets</li>
            <li>Bags</li>
            <li>Pants</li>
            <li>And More!</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              {" "}
              Request a Quote
            </a>
          </button>
        </div>
        <Helmet>
          <title>Silk Screening</title>
          <meta
            name='description'
            content='T-Shirts, Uniforms, Jackets, Bags, Pants '
          />
        </Helmet>
      </div>
      {/* <div className='img-wrapper'>
        <img
          src='https://media1.popsugar-assets.com/files/thumbor/g9gHiI0WZ7sH-RgzTZBknOX3xDw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/23/165/n/45101125/ba2e8e157eca82a1_20/i/Cafe-Girl-Modern-Embroidery-Hoop.jpg'
          alt='image of shirt'
        />
      </div> */}
      <div className='tile-card'>
        <div className='img-wrapper'>
          <img
            className='shirt'
            src='https://i.postimg.cc/vHRC2tZf/imageedit-1-8001840362.jpg'
            alt='image of shirt'
          />
        </div>
        <div className='front'>
          <h1>Embroidery</h1>
        </div>
        <div className='right'>
          <h2>Embroidery</h2>
          <ul>
            <li>Jackets</li>
            <li>Polos</li>
            <li>Team Uniforms</li>
            <li>Aprons</li>
            <li>Hats</li>
            <li>And More!</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              Request a Quote
            </a>
          </button>
        </div>
        <Helmet>
          <title>Embroidery</title>
          <meta
            name='description'
            content='Jackets, Polos, Team Uniforms, Aprons, Hats, and more! '
          />
        </Helmet>
      </div>
      {/* <div className='img-wrapper'>
        <img
          src='https://lh3.googleusercontent.com/proxy/WJlc97ePcodtATxOg8ew9O0-hJLL7NOWLtrxbbGQXoaib3U0LC_eR_kbkLm9I8NikSwPlTvUAJT4i991MFXnXgzIsUcZiXdAmqdKDoINmh7M'
          alt='image of shirt'
        />
      </div> */}
      <div className='tile-card'>
        <div className='img-wrapper'>
          <img
            className='shirt'
            src='https://i.postimg.cc/vHRC2tZf/imageedit-1-8001840362.jpg'
          />
        </div>
        <div className='front'>
          <h1>Vinyl</h1>
        </div>
        <div className='right'>
          <h2>Vinyl</h2>
          <ul>
            <li>Jerseys</li>
            <li>Shirts</li>
            <li>Pants</li>
            <li>Signs</li>
            <li>Safety Vests</li>
            <li>And More!</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              Request a Quote
            </a>
          </button>
        </div>
        <Helmet>
          <title>Vinyl</title>
          <meta
            name='description'
            content='Jerseys, Shirts, Pants, Signs, Safety Vests and more! '
          />
        </Helmet>
      </div>
      {/* <div className='img-wrapper'>
        <img
          src='https://lh3.googleusercontent.com/proxy/WJlc97ePcodtATxOg8ew9O0-hJLL7NOWLtrxbbGQXoaib3U0LC_eR_kbkLm9I8NikSwPlTvUAJT4i991MFXnXgzIsUcZiXdAmqdKDoINmh7M'
          alt='image of shirt'
        />
      </div> */}
    </div>
  );
};

export default ServicesTile;

import React from "react";
import "./services.css";

const ServicesTile = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
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
            <li>and more!</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              {" "}
              Request a Quote
            </a>
          </button>
        </div>
      </div>
      {/* <div className='img-wrapper'>
        <img
          src='https://media1.popsugar-assets.com/files/thumbor/g9gHiI0WZ7sH-RgzTZBknOX3xDw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/23/165/n/45101125/ba2e8e157eca82a1_20/i/Cafe-Girl-Modern-Embroidery-Hoop.jpg'
          alt='image of shirt'
        />
      </div> */}
      <div className='card'>
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
            <li>and more!</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              Request a Quote
            </a>
          </button>
        </div>
      </div>
      {/* <div className='img-wrapper'>
        <img
          src='https://lh3.googleusercontent.com/proxy/WJlc97ePcodtATxOg8ew9O0-hJLL7NOWLtrxbbGQXoaib3U0LC_eR_kbkLm9I8NikSwPlTvUAJT4i991MFXnXgzIsUcZiXdAmqdKDoINmh7M'
          alt='image of shirt'
        />
      </div> */}
      <div className='card'>
        <div className='img-wrapper'>
          <img
            className='shirt'
            src='https://i.postimg.cc/vHRC2tZf/imageedit-1-8001840362.jpg'
            alt='image of shirt'
          />
        </div>
        <div className='front'>
          <h1>Vinyl</h1>
        </div>
        <div className='right'>
          <h2>Vinyl</h2>
          <ul>
            <li>Width 7.7"</li>
            <li>Length 31.75"</li>
            <li>Wheelbase 14"</li>
            <li>Nose 6.875"</li>
            <li>Tail 6.25"</li>
          </ul>
          <button className='request-a-quote'>
            <a style={{ color: "black" }} href='/quote'>
              Request a Quote
            </a>
          </button>
        </div>
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

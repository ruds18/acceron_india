import React from 'react'
import '../Styles/Home.css'
import Logo from "../Assets/logo.png"
import Banner from "../Assets/banner.png"

function Home() {
  return (
    <div className="home_page">
      {/* //Navbar */}
      <div className='navbar'>
        <div >
          <img className='logo' src={Logo} alt="logo" />
        </div>
        <div className='pages'>
          <p>Home</p>
          <p>Product</p>
          <p>About</p>
          <p>News n Media</p>
          <p>Get Quotation</p>
        </div>
      </div>
      {/* landing page  */}
      <div className='home_screen1'>
        <div className='landing_screen'>
          <div className='poster'>
            <img className='banner' src={Banner} alt="Banner" />
          </div>

          <div className='company_tagline'>

          </div>
        </div>

        <div className='reach'>
          <div className='reach_info'>
            <p className="reach_sub_info">
              2 Production Units
            </p>
          </div>

          <div className='reach_info'>
            <p className="reach_sub_info">
            100+ Distributors
            </p>
          </div>

          <div className='reach_info'>
            <p className="reach_sub_info">
            Millions of Users
            </p>
          </div>
        </div>
      </div>

      {/* Automotive Lubricant  */}
      <div className='automotive_lubricant'>
        <div className='content_lubricant'>
          <div className='heading_automotive_lubricant'>Automotive Lubricants</div>
          <p className='border_bottom_heading'></p>
          <div className='automotive_description'>Acceron Industries
            India Private Limited is a trusted provider of wide range of
            Engine Oils, Gear Oils, Greases and other fluid and lubes.
            Blended with our advanced additives technologies, every 
            product is designed to enhance performance, reliability 
            and longevity for your use. </div>
        </div>
        <button className='btn_product_range'><p className='btn_text_product_range' >Product Range</p></button>
      </div>
    </div>
  )
}

export default Home
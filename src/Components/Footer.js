import React from 'react'
import '../Styles/Footer.css'
import Quotation from './Quotation';

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer_flex'>
        <div className='left_column_footer'>
            <h1>ACCERON</h1>
            <h3>Home</h3>
            <h3>Products</h3>
            <h3>About</h3>
            <h3>Get Quotation</h3>
        </div>
        <div className='right_column_footer'>
            <h2>Head Office</h2>
            <p className='footer_info'>Address : Xyz appartment near birla road
            Hyderabad, Telangana <br/>Contact : 8093586475, 9829374028</p>
            <h2>Production Facilitie</h2>
            <p className='footer_info'>Address : Xyz appartment near birla road
            Hyderabad, Telangana <br/>Contact : 8093586475, 9829374028</p>
            <h2>Production Facilitie</h2>
            <p className='footer_info'>Address : Xyz appartment near birla road
            Hyderabad, Telangana <br/>Contact : 8093586475, 9829374028</p>
        </div>
        </div>

        <div className='copyright'></div>
        <span>Copyrights reserved © 2023 | Acceron India Pvt Ltd.</span>
    </div>
    </>
  )
}

export default Footer
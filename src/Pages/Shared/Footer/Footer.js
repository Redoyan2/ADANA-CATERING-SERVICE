import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='footer-item'>
                    <h1>Adana Catering </h1>
                    <li>Help</li>
                    <li>Order Status</li>
                    <li>Delivery Choice</li>
                    <li>Payment Option</li>
                </div>
                <div className='footer-item'>
                    <h1>Contact us</h1>
                    <li>47/5, Nikunjo-1, Dhaka-1229</li>
                    <li>01754862546</li>
                    <li>info@adana.com</li>
                </div>
                <div className='footer-item'>
                    <h1>Working hours</h1>
                    <ul>Sat-Thu: 9.00am-6.00pm</ul>
                    <ul>Tuesday: 9.00am-6.00pm</ul>
                    <ul>Friday: Holiday</ul>
                </div>
                
            </div>
            <div>
                <h5 className='footer-bottom'>Copyright-adana-catering-service@2022</h5>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import '../components/footer.css';
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foo'>
        <div className='brand-container'>
          <a href="#" className='nav__brand'>FinancePro</a>
          <div className='foot'>Earn  Invest  Spend</div>
        </div>
        <div className='address-container'>
          <div className='add'>Address</div>
          <div className='address'>
          <div>Nilkanth Business Park</div>
            <div>Mahatama Gandhi Marg</div>
            <div>Near to Oasis, Gratkopar</div>
            <div>400036 Mumbai</div>
          </div>
        </div>
        <div className='contact'>
          <div>Contact Us</div>
          <div className='social-icons'>
            <a href='https://www.instagram.com/stockmarket_times?igsh=ZWtrbzZ1Y3JiZXc1' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            <a href='https://www.financepro@gmail.com'><FaEnvelope /></a>
            <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-text">
        <p>All rights reserved &copy; 2024 FinancePro</p>
      </div>
    </div>
  );
}

export default Footer;

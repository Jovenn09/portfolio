import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="logo">
        <img src="https://up.phinma.edu.ph/wp-content/uploads/2021/02/PHINMA-ED-LOGO-1024x325.png" alt="University of Pangasinan" />
      </div>
      <span className="school-name">Phinma - University of Pangasinan</span>
      <span className="college-name">College of Information Technology</span>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} Joven Casaclang. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
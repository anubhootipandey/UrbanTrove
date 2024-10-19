import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#A68DAD] min-h-[150px] p-4 text-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around items-center w-full space-y-4 md:space-y-0">
      
          <div className="flex flex-col items-start space-y-2">
            <Link to="/contact" className="text-gray-100">Contact</Link>
            <Link to="/faq" className="text-gray-100">FAQ</Link>
            <Link to="/about" className="text-gray-100">About</Link>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Link to="/terms" className="text-gray-100">Terms and Conditions</Link>
            <Link to="/privacy" className="text-gray-100">Privacy Protection</Link>
            <Link to="/help" className="text-gray-100">Help Center</Link>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-100">Follow us:</p>
            <div className="flex justify-center items-center mt-2 space-x-3">
              <FacebookIcon className="text-gray-100 text-2xl" />
              <TwitterIcon className="text-gray-100 text-2xl" />
              <InstagramIcon className="text-gray-100 text-2xl" />
              <WhatsAppIcon className="text-gray-100 text-2xl" />
            </div>
          </div>
        </div>

        <div className="w-full my-4">
          <hr className="border-t border-[#C7B198]" />
        </div>

        <p className="font-bold text-gray-100">
          © 2024 eCommerce. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

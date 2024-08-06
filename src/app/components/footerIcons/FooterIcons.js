import React from 'react'
import { CiFacebook,CiGlobe } from "react-icons/ci";
import { AiOutlineX } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import './FooterIcons.css';

const FooterIcons = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://www.facebook.com/konfhub" target="_blank" rel="noopener noreferrer" className='iconStyles'>
            <BsFacebook size={14} color={'#fff'}/>
          </a>
          <a href="https://x.com/konfhub" target="_blank" rel="noopener noreferrer" className='iconStyles'>
            <AiOutlineX size={14} color={'#fff'}/>
          </a>
          <a href="https://www.linkedin.com/konfhub?_l=en_US" target="_blank" rel="noopener noreferrer" className='iconStyles'>
            <TiSocialLinkedinCircular size={14} color={'#fff'}/>
          </a>
          <a href="/https://konfhub.com/" target="_blank" rel="noopener noreferrer" className='iconStyles'>
            <CiGlobe size={14} color={'#fff'}/>
          </a>
        </div>
      );
    }

export default FooterIcons
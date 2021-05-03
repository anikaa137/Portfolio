import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return (
        <div class='readMore mt-5 mb-5 bg-secondary'>
            <div class="text-center">
                <h4>Designed & Built by Amina ANika </h4>
            </div>
        </div>
    );
};

export default Footer;
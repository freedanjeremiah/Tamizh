import React from 'react';
import { logo} from '../assets';


const Footer = () => {
    return (
        <footer className="bg-black px-20 py-6 text-white w-full  z-20 ">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full  md:w-[30%] text-center md:text-left mb-4 md:mb-0">
                    <div className='flex justify-start items-center'>
                        <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                        <div className='ml-3'>
                            <h5 className="font-bold text-lg">TAMIZH</h5>
                            <p className="text-sm">© 2025 All rights reserved</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[34%] text-center mb-4 md:mb-0 mt-2 md:mt-0">
                    <h5 className="font-bold text-lg">Quick Links</h5>
                    <ul className="flex flex-col md:flex-row  items-center md:space-x-4 space-x-0 ">
                        <li><a href="/#about" className="text-sm hover:underline ">About</a></li>
                        <li><a href="/#projects" className="text-sm hover:underline ">Projects</a></li>

                        <li><a href="/#vision" className="text-sm hover:underline">Vision</a></li>
                        <li><a href="/#contact" className="text-sm hover:underline">Contact</a></li>
                        <li><a href="/privacy-policy" className="text-sm hover:underline text-nowrap">Privacy Policy</a></li>
                        <li><a href="/terms-of-use" className="text-sm hover:underline text-nowrap">Terms of Use</a></li>


                    </ul>
                </div>
                <div className="w-full md:w-[31%] text-center md:text-right mt-2 md:mt-0">
                    <h5 className="font-bold text-lg">Follow Us</h5>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="https://www.linkedin.com/company/tamizh/" target='_blank' className="text-sm hover:underline">Linkedin</a>
                        <a href="https://twitter.com/_tamizhofficial" target='_blank' className="text-sm hover:underline">Twitter</a>
                        <a href="https://www.instagram.com/tamizh.official/" target='_blank' className="text-sm hover:underline">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
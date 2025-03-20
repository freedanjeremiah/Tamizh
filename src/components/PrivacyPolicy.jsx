import React from 'react';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className='absolute inset-0 top-[80px] h-full bg-[#030D0E] '>
      <div className=' p-10  max-w-7xl flex flex-col gap-10 mx-auto'>
        <div>
          <h1 className='font-bold text-5xl mb-3'>Privacy Policy</h1>
          <p>Effective Date: 05th July 2023</p>
          <p>Last Updated: 20th March 2025</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >1. Introduction</h2>
          <p>
            At TAMIZH ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website [www.tamizh.co.in] ("Website").
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal Information: Name, email address, phone number, etc., provided when contacting us or subscribing to our services.</li>
            <li>Usage Information: IP address, browser type, device information, and browsing behavior on our website.</li>
            <li>Cookies and Tracking Technologies: To enhance user experience and analyze website performance.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to inquiries or support requests.</li>
            <li>Send marketing communications if you opt-in.</li>
            <li>Ensure website security and prevent fraud.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >4. Data Sharing and Disclosure</h2>
          <p>We do not sell your data. However, we may share your information:</p>
          <ul>
            <li>With trusted third-party service providers for website operations.</li>
            <li>If required by law, regulation, or legal process.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your data. However, no method of transmission over the internet is completely secure.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >6. Your Rights</h2>
          <p>
            As per the Digital Personal Data Protection (DPDP) Act 2023, you have rights to access, correct, and request deletion of your data.
          </p>
        </div>
        <div className='pb-10'>
          <h2 className="text-2xl font-bold " >7. Contact Us</h2>
          <p>
            For privacy-related concerns, contact us at <a href="mailto:contact@tamizh.co.in">contact@tamizh.co.in</a>.
          </p>
        </div>
        
      </div>

      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
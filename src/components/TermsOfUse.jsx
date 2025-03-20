import React from 'react';
import Footer from './Footer';

const TermsOfUse = () => {
  return (
    <div className='absolute inset-0 top-[80px] h-full bg-[#030D0E] '>
      <div className=' p-10  max-w-7xl flex flex-col gap-10 mx-auto'>
        <div>
          <h1 className='font-bold text-5xl mb-3'>Terms of Use</h1>
          <p>Effective Date: 05th July 2023</p>
          <p>Last Updated: 20th March 2025</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to comply with these Terms of Use. If you do not agree, please refrain from using the Website.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >2. Intellectual Property Rights</h2>
          <p>
            All content, designs, trademarks, and intellectual property on this Website are owned by TAMIZH or licensed to us. Unauthorized reproduction or use is strictly prohibited.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >3. User Conduct</h2>
          <p>You agree not to:</p>
          <ol className='list-disc list-inside'>
            <li>Use the Website for illegal or harmful activities.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>Post offensive, defamatory, or abusive content.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >4. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages resulting from your use of the Website, including but not limited to errors, data loss, or interruptions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >5. External Links</h2>
          <p>
            Our Website may contain links to third-party sites. We are not responsible for the content or privacy practices of these sites.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >6. Termination</h2>
          <p>
            We reserve the right to terminate or restrict your access if you violate these Terms of Use.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold" >7. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Chennai, Tamil Nadu.
          </p>
        </div>
        <div className='pb-10'>
          <h2 className="text-2xl font-bold " >8. Contact Us</h2>
          <p>
            For inquiries regarding these Terms, contact us at <a href="mailto:contact@tamizh.co.in">contact@tamizh.co.in</a>.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default TermsOfUse;

import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="absolute inset-0 top-[80px] h-full bg-[#030D0E]">
      <div className="p-10 max-w-7xl flex flex-col gap-10 mx-auto">
        <div>
          <h1 className="font-bold text-5xl mb-3">Privacy Policy</h1>
          <p>Effective Date: 30 August 2024</p>
          <p>Last Updated: 06th May 2025</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p>
            At TAMIZH (“we,” “our,” or “us”), your privacy is a priority. This
            Privacy Policy explains how we collect, use, store, and protect your
            information when you use{" "}
            <a href="https://www.tamizh.co.in" className="underline">
              https://www.tamizh.co.in
            </a>{" "}
            ("Website").
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">2. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              etc., collected when you fill forms or subscribe.
            </li>
            <li>
              <strong>Usage Information:</strong> IP address, browser type,
              device data, pages visited, and usage patterns.
            </li>
            <li>
              <strong>Cookies & Tracking Technologies:</strong> We use cookies
              and similar tools for analytics and personalized content.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
          <p>We use your data to: </p>
          <ul className="list-disc pl-6">
            <li>Provide, improve, and personalize our services</li>
            <li>Respond to inquiries or technical support</li>
            <li>Send marketing/promotional content with your consent</li>
            <li>Prevent fraud and secure our systems</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">4. Data Sharing and Disclosure</h2>
          <p>We do not sell your information. We may share data:</p>
          <ul className="list-disc pl-6">
            <li>
              With trusted service providers for technical/marketing support
            </li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">5. Storage Measures</h2>
          <p>
            Your data is securely stored on servers with industry-standard
            encryption and access control. We implement firewalls, secure socket
            layer (SSL) technology, and regular audits to safeguard your data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">6. Data Retention Period</h2>
          <p>
            We retain your data only as long as necessary for the purposes it
            was collected, or as required by law. Afterward, data is anonymized
            or securely deleted.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">7. Do Not Track (DNT)</h2>
          <p>
            Our website currently does not respond to DNT signals. You may
            control cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">8. Behavioral Advertising</h2>
          <p>
            We may partner with third-party advertising platforms to deliver
            personalized ads based on your browsing behavior. You can opt-out
            via your ad preferences or browser tools.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">9. Security / Safety</h2>
          <p>
            Although we employ strong security protocols, no system is 100%
            secure. Please contact us immediately if you suspect a security
            breach.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">10. Casual Visitors Note</h2>
          <p>
            If you are simply browsing the Website, we may collect limited usage
            data for analytics. No personal data is collected unless you
            voluntarily provide it.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">11. Your Rights</h2>
          <p>
            Under the DPDP Act 2023, you have the right to access, correct, or
            request deletion of your data.
          </p>
        </div>

        <div className="pb-10">
          <h2 className="text-2xl font-bold">12. Contact Us</h2>
          <p>
            Questions? Write to us at{" "}
            <a href="mailto:contact@tamizh.co.in" className="underline">
              contact@tamizh.co.in
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";
import Footer from "./Footer";

const TermsOfUse = () => {
  return (
    <div className="absolute inset-0 top-[80px] h-full bg-[#030D0E]">
      <div className="p-10 max-w-7xl flex flex-col gap-10 mx-auto">
        <div>
          <h1 className="font-bold text-5xl mb-3">Terms of Use</h1>
          <p>Effective Date: 30th August 2024</p>
          <p>Last Updated: 06th May 2025</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Website, you agree to comply with these
            Terms. If you disagree, please do not use the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">2. Use of Content</h2>
          <p>
            All content on the Website is for general informational purposes
            only and may not be copied or redistributed without our consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            3. Intellectual Property Rights
          </h2>
          <p>
            All intellectual property including logos, content, and designs are
            owned by or licensed to TAMIZH. Unauthorized use is strictly
            prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">4. Services</h2>
          <p>
            TAMIZH offers tech and innovation-based services. All services are
            subject to availability and may be modified or discontinued without
            prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">5. Declaration by the User</h2>
          <p>By using the Website, you confirm that:</p>
          <ul className="list-disc pl-6">
            <li>You are at least 18 years old or have parental consent</li>
            <li>You will comply with all applicable laws and regulations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">6. User Conduct & Rules</h2>
          <ul className="list-disc pl-6">
            <li>Not upload harmful, illegal, or abusive content</li>
            <li>Not violate intellectual property or privacy rights</li>
            <li>Not interfere with the operation or security of the site</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
          <p>
            We are not liable for any direct or indirect damages from using the
            Website, including loss of data or service interruptions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">8. External Links</h2>
          <p>
            We may link to third-party sites. TAMIZH is not responsible for
            their content or practices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">9. Force Majeure</h2>
          <p>
            We shall not be held liable for delays or failure to perform due to
            events beyond our control including natural disasters, war, strikes,
            or legal restrictions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">10. Delivery Policy</h2>
          <p>
            If products or services are purchased online, delivery timelines and
            logistics will be communicated at checkout or via email.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">11. Optional Tools</h2>
          <p>
            We may provide access to third-party tools. Use of such tools is at
            your own risk and governed by their respective terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the Website
            at our discretion, especially if terms are violated.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">13. Severability</h2>
          <p>
            If any part of these Terms is found invalid, the rest shall remain
            in full force and effect.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">14. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and TAMIZH
            concerning your use of the Website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, and any disputes
            shall be resolved in Chennai, Tamil Nadu.
          </p>
        </div>

        <div className="pb-10">
          <h2 className="text-2xl font-bold">16. Contact Us</h2>
          <p>
            For queries, contact{" "}
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

export default TermsOfUse;

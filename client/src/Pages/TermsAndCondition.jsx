import React from "react";
import "./../App.css";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 termsConditions">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ marginBlockEnd: "30px" }}
      >
        Terms & Conditions
      </h1>
      <p
        className="mb-6 text-sm text-gray-500"
        style={{ marginBlockEnd: "10px" }}
      >
        Last Updated: 10<sup>th</sup> March, 2026
      </p>

      <p className="mb-6" style={{ marginBlockEnd: "30px" }}>
        Welcome to TechHubbix. By accessing or using our website and services,
        you agree to comply with and be bound by the following Terms &
        Conditions. Please read them carefully.
      </p>

      {/* About Us */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. About Us</h2>
        <p className="mb-2">
          TechHubbix is a technology services provider offering solutions in:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>HubSpot development and customization</li>
          <li>Shopify development and customization</li>
          <li>Full-stack web development</li>
          <li>API integrations and automation</li>
          <li>CRM and CMS implementation support</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. Independent Service Provider Disclaimer
        </h2>
        <p className="mb-2">TechHubbix ek independent service provider hai.</p>
        <p className="mb-2">
          Hum{" "}
          <strong>
            HubSpot aur Shopify ke official partner, affiliate, ya endorsed
            entity nahi hain
          </strong>
          .
        </p>
        <p>
          In platforms ke saare trademarks, brand names aur logos unke
          respective owners ke paas belong karte hain. Hum sirf in platforms ke
          upar development, customization aur integration services provide karte
          hain.
        </p>
      </section>

      {/* Scope */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Scope of Services</h2>
        <p className="mb-2">
          We provide technical and consulting services including but not limited
          to:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Website and application development</li>
          <li>CRM and CMS configuration</li>
          <li>Workflow automation and integration</li>
          <li>Third-party API integrations</li>
        </ul>
        <p>
          The exact scope, timelines, and deliverables will be defined in a
          separate agreement or proposal shared with the client.
        </p>
      </section>

      {/* Client Responsibilities */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          4. Client Responsibilities
        </h2>
        <p className="mb-2">Clients agree to:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Provide accurate project requirements and timely feedback</li>
          <li>Grant necessary access to platforms and tools</li>
          <li>
            Ensure compliance with third-party platform terms (e.g., HubSpot,
            Shopify)
          </li>
        </ul>
        <p>
          Delays caused due to lack of access or communication may impact
          delivery timelines.
        </p>
      </section>

      {/* Payments */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Payments & Billing</h2>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>All services are billed as per agreed proposals or contracts</li>
          <li>Payments may be required in advance or milestone-based</li>
          <li>Delayed payments may result in suspension of services</li>
        </ul>
        <p>
          All fees are non-refundable unless explicitly stated otherwise in
          writing.
        </p>
      </section>

      {/* IP */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Upon full payment, the client will own the final deliverables unless
            otherwise agreed
          </li>
          <li>
            TechHubbix reserves the right to reuse non-confidential components,
            frameworks, or code for future projects
          </li>
          <li>
            Any third-party tools, plugins, or software remain the property of
            their respective owners
          </li>
        </ul>
      </section>

      {/* Third Party */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Third-Party Services</h2>
        <p className="mb-2">
          Our services may involve third-party platforms such as HubSpot,
          Shopify, or other tools.
        </p>
        <p className="mb-2">We are not responsible for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Platform outages or service disruptions</li>
          <li>Changes in third-party pricing or policies</li>
          <li>Limitations imposed by external platforms</li>
        </ul>
        <p className="mt-2">
          Clients are subject to the terms of those third-party providers.
        </p>
      </section>

      {/* Liability */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          8. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Any indirect, incidental, or consequential damages</li>
          <li>Data loss, revenue loss, or business interruption</li>
          <li>Issues arising from third-party services or integrations</li>
        </ul>
        <p className="mt-2">
          Our total liability shall not exceed the amount paid for the specific
          service.
        </p>
      </section>

      {/* Confidentiality */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Confidentiality</h2>
        <p>
          We respect client confidentiality and agree not to disclose sensitive
          information to third parties without consent, except where required by
          law.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
        <p className="mb-2">We reserve the right to terminate services if:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Terms are violated</li>
          <li>Payments are not made</li>
          <li>There is misuse of services</li>
        </ul>
        <p>
          Clients may terminate services with written notice, subject to
          applicable charges.
        </p>
      </section>

      {/* Modifications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Modifications</h2>
        <p>
          TechHubbix reserves the right to update these Terms & Conditions at
          any time. Changes will be posted on this page with an updated date.
        </p>
      </section>

      {/* Law */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
        <p className="mb-2">
          For any questions regarding these Terms, please contact:
        </p>
        <p className="font-medium">TechHubbix</p>
        <p>
          Email: <a href="mailto:info@techhubbix.in">info@techhubbix.in</a>
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-600">
        By using our website and services, you acknowledge that you have read,
        understood, and agree to these Terms & Conditions.
      </p>
    </div>
  );
}

import React from "react";
import "./../App.css";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 termsConditions">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-2 text-sm text-gray-500">
        Last Updated: 10<sup>th</sup> March, 2026
      </p>

      <p className="mb-8">
        This Privacy Policy describes how we collect, use, and protect your
        information when you access or use our website and services.
      </p>

      {/* About */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-2">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personal information (name, email, phone number)</li>
          <li>Business details shared during project discussions</li>
          <li>
            Usage data such as IP address, browser type, and pages visited
          </li>
        </ul>
      </section>

      {/* Usage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. How We Use Information
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide and improve our services</li>
          <li>To communicate regarding projects or inquiries</li>
          <li>To enhance user experience on our website</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Third-Party Platforms</h2>
        <p className="mb-2">
          Our services may involve platforms such as HubSpot, Shopify, or other
          tools.
        </p>
        <p>
          We are not responsible for the privacy practices or policies of these
          third-party platforms. Users are advised to review their respective
          policies.
        </p>
      </section>

      {/* Data Protection */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Data Protection</h2>
        <p>
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* Sharing */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to others.
          Information may only be shared when required by law or with your
          consent.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience and analyze
          website traffic.
        </p>
      </section>

      {/* Rights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
        <p>
          You have the right to request access, correction, or deletion of your
          personal data.
        </p>
      </section>

      {/* Updates */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          reflected on this page with an updated date.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
        <p className="mb-2">
          For any questions regarding this Privacy Policy, contact:
        </p>
        <p className="font-medium">TechHubbix</p>
        <p>
          Email:{" "}
          <a href="mailto:info@techhubbix.in" className="text-blue-600">
            info@techhubbix.in
          </a>
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-600">
        By using our website, you agree to this Privacy Policy.
      </p>
    </div>
  );
}

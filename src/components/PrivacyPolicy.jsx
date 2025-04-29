import React from "react";

const PrivacyPolicy = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 flex">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to devTInder ! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Your name, email address, and contact details.</li>
          <li>Details of requests you send to other developers.</li>
          <li>Payment information (securely processed via our payment gateway partner).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Connect you with other developers based on your requests.</li>
          <li>Process payments and manage transactions securely.</li>
          <li>Communicate with you regarding your account, updates, and services.</li>
          <li>Improve and personalize your experience on our platform.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Payment Information</h2>
        <p className="mb-4">
          We use a trusted third-party payment gateway to process payments. We do not store your full payment details on our servers. All payment information is handled securely and in compliance with industry standards.
        </p>

        <p className="text-sm mt-8">
          © {new Date().getFullYear()} [Your Website Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PrivacyPolicy;

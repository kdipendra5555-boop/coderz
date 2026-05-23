import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#F7F9F8] py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="space-y-12 text-sm sm:text-base text-gray-700 leading-relaxed">

          {/* INTRO */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p>
              At <strong>Coderz Cafe</strong>, your privacy is important to us.
              This Privacy Policy describes how we collect, use, protect,
              and manage personal information when you access our website,
              participate in our programs, or interact with our services.
            </p>
            <p className="mt-4">
              By using Coderz Cafe, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>

          {/* SECTION */}
          <PolicySection
            title="1. Information We Collect"
            content={
              <>
                <p>We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Personal details such as name, email address, and phone number</li>
                  <li>School, college, or institutional information (if applicable)</li>
                  <li>Information submitted through enquiry, contact, registration, or feedback forms</li>
                  <li>Login credentials for authorized users and administrators</li>
                  <li>Basic technical data such as browser type, device, and IP address</li>
                </ul>
              </>
            }
          />

          <PolicySection
            title="2. How We Use Your Information"
            content={
              <>
                <p>Your information is used for legitimate educational and operational purposes, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Responding to enquiries, requests, and communication</li>
                  <li>Managing courses, workshops, events, and hackathons</li>
                  <li>Sending important updates, notifications, or announcements</li>
                  <li>Improving our platform, content quality, and user experience</li>
                  <li>Ensuring platform security and administrative control</li>
                </ul>
              </>
            }
          />

          <PolicySection
            title="3. Students, Parents & Minor Protection"
            content={
              <>
                <p>
                  Coderz Cafe works closely with school and college students.
                  We are committed to protecting the privacy of minors.
                </p>
                <p className="mt-3">
                  We do not knowingly collect sensitive personal data from
                  minors without appropriate consent from schools, parents,
                  or guardians where required. Any data collected is used
                  strictly for educational and program-related purposes.
                </p>
              </>
            }
          />

          <PolicySection
            title="4. Cookies & Analytics"
            content={
              <>
                <p>
                  We may use cookies or similar technologies to understand
                  how users interact with our website. These tools help us
                  analyze traffic, improve performance, and enhance usability.
                </p>
                <p className="mt-3">
                  Cookies do not provide us access to personal information
                  beyond what you voluntarily share.
                </p>
              </>
            }
          />

          <PolicySection
            title="5. Emails & Communication"
            content={
              <>
                <p>
                  When you submit forms or subscribe to updates, we may
                  communicate with you via email or phone for:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Program-related updates</li>
                  <li>Important announcements</li>
                  <li>Educational information</li>
                </ul>
                <p className="mt-3">
                  You can request to stop receiving non-essential communication
                  at any time.
                </p>
              </>
            }
          />

          <PolicySection
            title="6. Data Sharing & Disclosure"
            content={
              <>
                <p>
                  We do <strong>not</strong> sell, trade, or rent your personal
                  data. Information may only be shared:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>With trusted service providers for technical operations</li>
                  <li>If required by law, regulation, or legal process</li>
                  <li>To protect the rights, safety, or integrity of Coderz Cafe</li>
                </ul>
              </>
            }
          />

          <PolicySection
            title="7. Data Security"
            content={
              <>
                <p>
                  We take reasonable technical and organizational measures
                  to protect your information from unauthorized access,
                  loss, misuse, or alteration.
                </p>
                <p className="mt-3">
                  However, no online system is completely secure, and we
                  cannot guarantee absolute security of data.
                </p>
              </>
            }
          />

          <PolicySection
            title="8. Your Rights & Choices"
            content={
              <>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data where applicable</li>
                </ul>
                <p className="mt-3">
                  Requests can be made by contacting us using the details below.
                </p>
              </>
            }
          />

          <PolicySection
            title="9. Third-Party Links"
            content={
              <p>
                Our website may contain links to external websites.
                Coderz Cafe is not responsible for the privacy practices,
                policies, or content of third-party sites.
              </p>
            }
          />

          <PolicySection
            title="10. Policy Updates"
            content={
              <p>
                This Privacy Policy may be updated periodically to reflect
                changes in our practices or legal requirements. Updates will
                be posted on this page with a revised date.
              </p>
            }
          />

          {/* CONTACT */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or your data, you may contact us at:
            </p>
            <p className="mt-3">
              📧 <strong>Email:</strong> support@coderzcafe.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔹 SECTION COMPONENT */
function PolicySection({ title, content }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      {content}
    </div>
  );
}

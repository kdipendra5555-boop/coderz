import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="bg-[#F7F9F8] py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-12 text-sm sm:text-base text-gray-700 leading-relaxed">

          {/* INTRO */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p>
              Welcome to <strong>Coderz Cafe</strong>. By accessing or using
              our website, services, programs, or events, you agree to be
              bound by these Terms & Conditions. Please read them carefully
              before using our platform.
            </p>
            <p className="mt-4">
              If you do not agree with any part of these terms, you should
              discontinue use of our website and services.
            </p>
          </div>

          <TermsSection
            title="1. About Coderz Cafe"
            content={
              <p>
                Coderz Cafe is an educational platform focused on providing
                coding education, logical thinking development, mentorship,
                workshops, events, and related learning opportunities for
                school and college students.
              </p>
            }
          />

          <TermsSection
            title="2. Eligibility"
            content={
              <>
                <p>
                  Our programs are open to school students, college students,
                  educators, and institutions. By using our services, you
                  confirm that:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>You are providing accurate and truthful information</li>
                  <li>You have permission from a parent, guardian, or school if required</li>
                  <li>You will use the platform only for lawful purposes</li>
                </ul>
              </>
            }
          />

          <TermsSection
            title="3. User Responsibilities"
            content={
              <>
                <p>As a user of Coderz Cafe, you agree to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Respect other users, mentors, and staff</li>
                  <li>Not misuse content, systems, or learning materials</li>
                  <li>Not attempt unauthorized access to admin or secure areas</li>
                  <li>Use provided resources responsibly and ethically</li>
                </ul>
              </>
            }
          />

          <TermsSection
            title="4. Courses, Events & Programs"
            content={
              <>
                <p>
                  Details of courses, events, hackathons, and workshops are
                  provided for informational purposes and may be updated,
                  modified, or canceled at any time.
                </p>
                <p className="mt-3">
                  Participation in events is subject to specific rules,
                  guidelines, and eligibility criteria communicated separately.
                </p>
              </>
            }
          />

          <TermsSection
            title="5. Intellectual Property"
            content={
              <>
                <p>
                  All content on Coderz Cafe—including text, graphics,
                  logos, course material, and designs—is the intellectual
                  property of Coderz Cafe unless otherwise stated.
                </p>
                <p className="mt-3">
                  You may not copy, reproduce, distribute, or use our content
                  without prior written permission.
                </p>
              </>
            }
          />

          <TermsSection
            title="6. Payments & Donations"
            content={
              <>
                <p>
                  Some services or programs may require payment or donation.
                  Payment details, pricing, and refund policies (if applicable)
                  will be communicated clearly at the time of enrollment.
                </p>
                <p className="mt-3">
                  Coderz Cafe reserves the right to update pricing or suspend
                  payment options without prior notice.
                </p>
              </>
            }
          />

          <TermsSection
            title="7. Platform Availability"
            content={
              <p>
                We strive to ensure uninterrupted access to our platform.
                However, we do not guarantee continuous availability and
                may temporarily suspend access for maintenance, upgrades,
                or technical reasons.
              </p>
            }
          />

          <TermsSection
            title="8. Limitation of Liability"
            content={
              <p>
                Coderz Cafe shall not be held liable for any direct, indirect,
                incidental, or consequential damages arising from the use
                or inability to use our platform, programs, or content.
              </p>
            }
          />

          <TermsSection
            title="9. Termination of Access"
            content={
              <p>
                We reserve the right to suspend or terminate user access
                without prior notice if these Terms & Conditions are violated
                or if misuse of the platform is detected.
              </p>
            }
          />

          <TermsSection
            title="10. Third-Party Services"
            content={
              <p>
                Our website may include links or integrations with third-party
                services. Coderz Cafe is not responsible for the content,
                policies, or practices of such third-party platforms.
              </p>
            }
          />

          <TermsSection
            title="11. Changes to Terms"
            content={
              <p>
                These Terms & Conditions may be updated periodically.
                Continued use of the platform after changes implies
                acceptance of the revised terms.
              </p>
            }
          />

          {/* CONTACT */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Information
            </h2>
            <p>
              For questions regarding these Terms & Conditions, please
              contact us at:
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
function TermsSection({ title, content }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      {content}
    </div>
  );
}

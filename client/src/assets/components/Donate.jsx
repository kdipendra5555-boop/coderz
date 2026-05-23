import { HeartHandshake, ShieldCheck, Clock } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Donate() {
  return (
    
    <section className="bg-[#F7F9F8] py-24">
        <Navbar/>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Support Our Mission
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            We are working towards making quality coding education
            accessible to school and college students across India.
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="bg-white rounded-3xl shadow-sm p-10 max-w-4xl mx-auto text-center mb-20">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#E6F0EA]
            flex items-center justify-center mb-6">
            <Clock className="text-[#5F8D6B]" size={26} />
          </div>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
           We are not accepting donations right now !
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We are currently setting up secure systems and compliance
            processes to accept donations responsibly. Once everything
            is in place, this page will be updated.
          </p>
        </div>

        {/* WHY SUPPORT */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E6F0EA]
              flex items-center justify-center mb-4">
              <HeartHandshake className="text-[#5F8D6B]" size={22} />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Empower Students
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Your support helps us reach students who may not have
              access to quality coding education and mentorship.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E6F0EA]
              flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#5F8D6B]" size={22} />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Transparent Approach
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We believe in responsible use of funds, transparency,
              and ethical practices in everything we do.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E6F0EA]
              flex items-center justify-center mb-4">
              <Clock className="text-[#5F8D6B]" size={22} />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Long-Term Impact
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our focus is on building sustainable learning programs
              that create long-term educational impact.
            </p>
          </div>

        </div>

        {/* FOOT NOTE */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm sm:text-base">
            Interested in supporting us in other ways, such as
            partnerships, volunteering, or mentorship?
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Please reach out to us through the contact page.
          </p>
        </div>

      </div>
      <Footer/>
    </section>
  );
}

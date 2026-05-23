import AboutSection from "../../assets/components/school components/AboutSection";
import ProgramsSection from "../../assets/components/school components/ProgramsSection";
import ProgramsTimeline from "../../assets/components/school components/ProgramsTimeline";
import SchoolHero from "../../assets/components/school components/SchoolHero";
import SchoolNavbar from "../../assets/components/school components/SchoolNavbar";
import TestimonialsPage from "../../assets/components/school components/TestimonialPage";
import WhyChooseSection from "../../assets/components/school components/WhyChooseSection";

export default function SchoolHome() {
  return (
    <>
    <SchoolNavbar />
    <SchoolHero/>
    <AboutSection/>
    <ProgramsTimeline/>
    {/* <ProgramsSection/> */}
    <WhyChooseSection/>
    <TestimonialsPage/>
    </>
  );
}
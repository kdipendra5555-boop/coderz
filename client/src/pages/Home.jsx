import SchoolCodingHero from "../assets/components/SchoolCodingHero"
import SkillsDevelopment from "../assets/components/SkillsDevelopment"
import ArisingEvents from "../assets/components/ArisingEvents";
import HeroSection from "../assets/components/HeroSection";
import Navbar from "../assets/components/Navbar";
import DonateSection from "../assets/components/DonateSection"
import ContactSection from "../assets/components/ContactSection"
import Footer from "../assets/components/Footer"
import WorkspaceScrollSection from "../assets/components/WorkspaceScrollSection";
import ArisingEventsAccordion from "../assets/components/ArisingEventsAccordion";
import WhoIsThisFor from "../assets/components/WhoIsThisFor";
import LearningJourney from "../assets/components/LearningJourney";

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <WhoIsThisFor/>
     {/* <ArisingEvents/> */}
     <ArisingEventsAccordion/>
     <WorkspaceScrollSection/>
     <LearningJourney/>
    
     {/* <SkillsDevelopment/> */}
     <SchoolCodingHero/>
     <DonateSection/>
     <ContactSection/>
     <Footer/>
      
     
    </>
  );
}

import Banner from "@/Components/HomePageSections/Banner";
import AboutUs from "@/Components/HomePageSections/AboutUs";
import Services from "@/Components/HomePageSections/Services";
import ProjectShowcase from "@/Components/HomePageSections/ProjectShowcase";
import HowWeWork from "@/Components/HomePageSections/HowWeWork";
import Testimonials from "@/Components/HomePageSections/Testimonials";
import FAQ from "@/Components/HomePageSections/FAQ";
import ContactCTA from "@/Components/HomePageSections/ContactCTA";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <ProjectShowcase />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}







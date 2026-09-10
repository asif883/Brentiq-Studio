import Banner from "@/Components/HomePageSections/Banner";
import AboutUs from "@/Components/HomePageSections/AboutUs";
import Services from "@/Components/HomePageSections/Services";
import ProjectShowcase from "@/Components/HomePageSections/ProjectShowcase";
import HowWeWork from "@/Components/HomePageSections/HowWeWork";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <ProjectShowcase />
      <HowWeWork />
    </>
  );
}


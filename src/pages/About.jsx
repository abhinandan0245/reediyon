import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import AboutStats from "../components/about/AboutStats";
import MissionVisionValues from "../components/about/MissionVisionValues";
import ManufacturingProcess from "../components/about/ManufacturingProcess";
import CompanyTimeline from "../components/about/CompanyTimeline";
import OurFacility from "../components/about/OurFacility";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background">
      <AboutHero />
      <OurStory />
      <AboutStats />
      <MissionVisionValues />
      <ManufacturingProcess />
      <CompanyTimeline />
      <OurFacility />
      <AboutCTA />
    </main>
  );
}

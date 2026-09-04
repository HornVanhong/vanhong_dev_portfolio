import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Cybersecurity } from "@/components/Cybersecurity";
import { Timeline } from "@/components/Timeline";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Cybersecurity />
        <Timeline />
        <GitHubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

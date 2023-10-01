'use client';

import { ActivePathProvider } from "../context/ActivePath"
import { HomeContent } from "../components/HomeContent/HomeContent";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { About } from "../components/About/About";
import { Education } from "../components/Education/Education";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";


export default function Index() {
  return (
    <main>
      <ActivePathProvider>
        <NavigationBar />
        <HomeContent />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </ActivePathProvider>
    </main>
  )
}
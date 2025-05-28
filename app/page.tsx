"use client";
// // import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from '@/components/About';
import ClientLogos from "@/components/ClientLogos";
import ExpertiseSection from "@/components/ExpertiseSection";
import SectorsGrid from "@/components/SectorsGrid";
import CapitalAdvantage from "@/components/CapitalAdvantage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LeadershipInsight from "@/components/LeadershipInsight";

import ContactCTA from "@/components/ContactCTA";
import ExperienceCards from "@/components/ExperienceCards";
import NewsroomTeasers from "@/components/NewsroomTeasers";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <main>
//         {/* <Hero /> */}
//         {/* <About/> */}
//         <ClientLogos />
//         {/* <ExpertiseSection /> */}
//         {/* Space for future 3JS Experience Section */}
//         <div className="py-20 bg-gray-50 text-center">
//           <div className="container">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision in Motion</h2>
//             <p className="text-xl text-gray-400">Space reserved for 3JS Experience</p>
//           </div>
//         </div>
//         {/* <SectorsGrid /> */}
//         {/* <ProjectsShowcase /> */}
//         {/* <CapitalAdvantage />
//         <ExperienceCards /> */}
//         {/* <TestimonialsSlider /> */}
//         {/* <LeadershipInsight /> */}
//         {/* <NewsroomTeasers /> */}
//         <FAQSection />
//         {/* <ContactCTA /> */}
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Index;

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Building from "@/components/Canvas/Building";

import { useScroll } from "./lib/use-scroll";
import { cn } from "@/lib/utils";
// import App from "./App";
import FAQSection from "@/components/FAQSection";
const Page = () => {
  const { state, scrollingThreshold, setScrolling, setState } = useScroll();
  const buildingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const twoDRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const prevTopRef = useRef<number>(0);
  const afterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    console.log({
      state,
    });

    if (state === "before-3d") {
      twoDRef.current?.focus();

      document.body.style.overflow = "auto";
    }
    if (state === "after-3d") {
      twoDRef.current?.focus();
      // window.scrollTo({
      //   top: afterRef.current!.getBoundingClientRect().top + window.scrollY,
      //   behavior: "smooth",
      // });

      document.body.style.overflow = "auto";
    }
    if (state === "3d") {
      canvasRef.current?.focus();
      window.scrollTo({
        top: buildingRef!.current!.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
      setTimeout(() => {
        window.scrollTo({
          top:
            buildingRef!.current!.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
        document.body.style.overflow = "hidden";
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    if (buildingRef.current) {
      const bounding = buildingRef.current.getBoundingClientRect();
      const isScrolledUp = prevTopRef.current < bounding.top;

      const isValueChangedFromNegativeToPositive =
        prevTopRef.current < 0 && bounding.top >= 0;
      const isValueChangedFromPositiveToNegative =
        prevTopRef.current > 0 && bounding.top <= 0;
      if (isScrolledUp && isValueChangedFromNegativeToPositive) {
        setScrolling("up");
        setState("3d");
      }
      if (isValueChangedFromPositiveToNegative) {
        setScrolling("down");
      }
      if (prevTopRef.current !== bounding.top) {
        prevTopRef.current = bounding.top;
      }
    }
  });
  return (
    <>
    <main
      className={cn(
        "relative no-scrollbar",
        state === "3d" ? "overflow-hidden" : "overflow-visible"
      )}
      ref={twoDRef}
    >
      <Navbar />
      <div
        className={cn(
          scrollingThreshold == 0 ? "visible h-auto" : "invisible -z-10"
        )}
      >
       <Hero /> 
       <About/>
        <ClientLogos />
         
        <div ref={aboutRef}>
        <ExpertiseSection />
        </div>
      </div>

      <div className="">
        <Building containerRef={buildingRef} canvasRef={canvasRef} />
      </div>
      <div
        ref={afterRef}
        className={cn(
          "opacity-100 overflow-visible  transition-all",
          state === "after-3d"
            ? "h-auto max-h-auto"
            : "h-0 max-h-0 overflow-hidden"
        )}
      >
         <SectorsGrid />
         <ProjectsShowcase />
         <CapitalAdvantage />
         <ExperienceCards />
         <TestimonialsSlider />
         <LeadershipInsight />
         <NewsroomTeasers />
        <FAQSection />
        <ContactCTA />

      </div>
      <Footer />
    </main>
    </>
  );
};

export default Page;

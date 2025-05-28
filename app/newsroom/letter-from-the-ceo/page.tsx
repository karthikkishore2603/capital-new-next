import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import dynamic from 'next/dynamic';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

interface CarouselContentProps {
  children: React.ReactNode;
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Carousel = dynamic<CarouselProps>(() => import('@/components/ui/carousel').then(mod => mod.Carousel), { ssr: false });
const CarouselContent = dynamic<CarouselContentProps>(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const CarouselNext = dynamic<CarouselButtonProps>(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });
const CarouselPrevious = dynamic<CarouselButtonProps>(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Link } from "react-router-dom";
import Link from "next/link";
const CEOLetter = () => {
  // Company milestones data
  const milestones = [
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Established presence in 18 countries with 12 major projects spanning 4 continents.",
    },
    {
      year: "2022",
      title: "Sustainability Focus",
      description:
        "Launched our comprehensive Carbon Neutrality Initiative and moved 70% of projects to green standards.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Implemented advanced BIM and digital twin technologies across all engineering services.",
    },
    {
      year: "2020",
      title: "Resilience & Growth",
      description:
        "Adapted to global challenges while maintaining operational excellence and client relationships.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#211574]/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-2/5">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
                      alt="CEO of Capital Engineering Consultancy"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-[#211574]/10 rounded-lg"></div>
                  </div>
                </div>

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#211574]">
                    Letter from Our CEO
                  </h1>

                  <blockquote className="border-l-4 border-[#211574] pl-6 italic mb-6">
                    <p className="text-lg md:text-xl text-gray-600">
                      "Engineering excellence is more than technical
                      precision—it's about creating solutions that serve
                      humanity and protect our planet."
                    </p>
                  </blockquote>

                  <p className="text-lg font-semibold mb-2">
                    Ahmed Al Mansoori
                  </p>
                  <p className="text-gray-600">Chief Executive Officer</p>
                  
                  {/* Add link to detail page */}
                  <div className="mt-6">
                    <Button className="bg-[#211574] hover:bg-[#211574]/80">
                      <Link href="/newsroom/ceo-letter/1">Read Full Letter</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Letter Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto prose lg:prose-lg">
              <p className="lead text-xl">Dear Valued Stakeholders,</p>

              <p>
                As we reflect on another remarkable year at Capital Engineering
                Consultancy, I am proud to share our journey of growth,
                innovation, and positive impact across the global engineering
                landscape. In an era defined by unprecedented challenges—from
                climate urgency to rapid urbanization—our team has risen to meet
                these challenges with unwavering commitment and technical
                excellence.
              </p>

              <p>
                This past year has been transformative for our organization.
                We've expanded our global footprint to 18 countries, delivering
                complex projects that address critical infrastructure needs
                while advancing sustainability goals. Our teams have pioneered
                new approaches to resource efficiency, carbon reduction, and
                resilient design—proving that engineering excellence and
                environmental stewardship can and must go hand in hand.
              </p>

              <h3 className="text-[#211574]">
                Embracing Digital Transformation
              </h3>

              <p>
                The digital revolution continues to reshape our industry, and
                Capital Engineering is at the forefront of this evolution. Our
                investments in advanced Building Information Modeling (BIM),
                digital twin technologies, and AI-assisted design tools have
                enhanced our ability to deliver precision, efficiency, and
                innovation to every project. This digital transformation isn't
                just about better tools—it's about fundamentally reimagining how
                we approach complex engineering challenges.
              </p>

              <h3 className="text-[#211574]">Our People Make the Difference</h3>

              <p>
                At the heart of our success are our people—talented engineers,
                designers, and specialists who bring creativity, rigor, and
                passion to their work every day. We've strengthened our global
                team with diverse talent from various backgrounds, recognizing
                that the most innovative solutions emerge from diverse
                perspectives and collaborative thinking.
              </p>

              <h3 className="text-[#211574]">Looking Forward</h3>

              <p>
                As we look to the future, we're committed to several strategic
                priorities that will define our next chapter:
              </p>

              <ul>
                <li>
                  Accelerating our sustainability initiatives, with a goal to
                  achieve carbon-neutral operations by 2030
                </li>
                <li>
                  Expanding our capabilities in renewable energy infrastructure
                  and green building technology
                </li>
                <li>
                  Deepening our expertise in smart city solutions that enhance
                  urban resilience and livability
                </li>
                <li>
                  Investing in the next generation of engineering talent through
                  expanded education and mentorship programs
                </li>
              </ul>

              <p>
                The challenges ahead are significant, but so are the
                opportunities. As urbanization continues at unprecedented rates,
                as climate imperatives become more urgent, and as new
                technologies emerge, the role of thoughtful, innovative
                engineering has never been more critical. At Capital Engineering
                Consultancy, we embrace this responsibility with optimism and
                determination.
              </p>

              <p>
                I want to express my sincere gratitude to our clients for their
                trust, to our partners for their collaboration, and to our team
                members for their dedication. Together, we're building a future
                where engineering excellence serves humanity's greatest needs
                while preserving the natural systems on which we all depend.
              </p>

              <p className="mb-8">With appreciation and optimism,</p>

              <p className="font-semibold italic">Ahmed Al Mansoori</p>
              <p>Chief Executive Officer</p>
              <p>Capital Engineering Consultancy</p>
            </div>
          </div>
        </section>

        {/* Milestones Carousel */}
        <section className="bg-[#211574]/5 py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#211574]">
                Key Milestones
              </h2>

              <Carousel className="w-full">
                <CarouselContent>
                  {milestones.map((milestone, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="border-none shadow-md h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="bg-[#211574] text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-[#211574]">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="relative static bg-[#211574] text-white hover:bg-[#211574]/80" />
                  <CarouselNext className="relative static bg-[#211574] text-white hover:bg-[#211574]/80" />
                </div>
              </Carousel>

              {/* Optional Video Message */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8 text-[#211574]">
                  CEO Video Message
                </h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-500 mb-4">
                        Video message placeholder
                      </p>
                      <Button className="bg-[#211574] hover:bg-[#211574]/80">
                        Play Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#211574]">
                Join Us on Our Journey
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Learn how Capital Engineering Consultancy can help bring your
                vision to life with world-class engineering solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#211574] hover:bg-[#211574]/80"
                >
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-[#211574] border-[#211574] hover:bg-[#211574]/10"
                >
                  Download Company Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CEOLetter;

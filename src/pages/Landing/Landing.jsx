import React, { lazy, Suspense } from "react";
import Section from "../../components/SectionLazy/Section";
import NavBar from "../Dashboard/NavBar";

const HeroSec = lazy(() => import("../../components/Hero/Hero"));
const Achieve = lazy(() =>
  import("../../components/Achievements/Achievements")
);
const WhyChoose = lazy(() => import("../../components/WhyChoose/Why"));

function Landing() {
  return (
    <>
      <NavBar />
      <div className="px-[30px] py-[20px] sm:px-[80px]">
        <Suspense>
          <Section delay={0}>
            <HeroSec />
          </Section>
        </Suspense>
        <Suspense>
          <Section delay={0}>
            <Achieve />
          </Section>
        </Suspense>
        <Suspense>
          <Section delay={0}>
            <WhyChoose />
          </Section>
        </Suspense>
      </div>
    </>
  );
}

export default Landing;

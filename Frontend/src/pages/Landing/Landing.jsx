import React, { lazy, Suspense  } from "react";
import Section from "../../components/SectionLazy/Section";

const Navbar = lazy(() => import('../../pages/Dashboard/NavBar'));
const HeroSec = lazy(() => import('../../components/Hero/Hero'));
const Achieve = lazy(() => import('../../components/Achievements/Achievements'));
const WhyChoose = lazy(() => import('../../components/WhyChoose/Why'));
const WhoWeAre = lazy(() => import('../../components/WhoWeAre/WhoWeAre'));
const OurService = lazy(() => import('../../components/OurServices/OurService'));


function Landing() {
  return (
    <>
    <Suspense>
      <Section delay={0}><Navbar /></Section>
    </Suspense>
      <div className="px-[30px] py-[20px] sm:px-[80px]">
        <Suspense>
          <Section delay={0}><HeroSec /></Section>
        </Suspense>
        <Suspense>
        <Section delay={0}><Achieve /></Section>
        </Suspense>
        <Suspense>
        <Section delay={0}><WhyChoose /></Section>
        </Suspense>
        <Suspense>
          <Section delay={0}><WhoWeAre /></Section>
        </Suspense>
        <Suspense>
          <Section delay={0}><OurService /></Section>
        </Suspense>
      </div>
    </>
  );
}

export default Landing;

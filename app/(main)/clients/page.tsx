"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClientsSection from './_components/ClientsSection/ClientsSection'
import SectorsSection from './_components/SectorsSection/SectorsSection'
import EngagementModel from './_components/Engagement/EngagementModel'
import HowItWorksSection from './_components/HowItWorksSection/HowItWorksSection'
import PartnerSection from './_components/PartnerSection/PartnerSection'
import TestimonialSection from './_components/TestimonialSection/TestimonialSection'
import ClientCTASection from './_components/CTASection/CTASection'
import LogoMarquee from '../_components/banner/LogoMarquee'

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <div>
      <ClientsSection />
      <SectorsSection />

      <LogoMarquee />
      <EngagementModel />

      <HowItWorksSection />
      {/* <PartnerSection /> */}
      <TestimonialSection />
      <ClientCTASection />
    </div>
  )
}

export default page

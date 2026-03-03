"use client";

import AiLabSection from "@/components/home/AiLabSection/AiLabSection";
import BlogSection from "@/components/home/BlogsSection/BlogSection";
import CTASection from "@/components/home/CTA/CTASection";
import FeaturedProjectCard from "@/components/home/FeaturedProjectSection/FeaturedProjectCard";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectSection/FeaturedProjectsSection";
import HeroSection from "@/components/home/heroSection/heroSection";
import ProofOfWorkSection from "@/components/home/proofOfWorkSection/ProofOfWorkSection";
import TechStackSection from "@/components/home/techStack/TechStackSection";



export default function Home() {
  return (
    <>
      <HeroSection/>
      <ProofOfWorkSection/>
      <AiLabSection/>
      <FeaturedProjectsSection/>
      <BlogSection/>
      <TechStackSection/>
      <CTASection/>
    </>
  );
}

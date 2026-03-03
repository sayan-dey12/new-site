"use client";

import AiLabSection from "@/components/home/AiLabSection/AiLabSection";
import HeroSection from "@/components/home/heroSection/heroSection";
import ProofOfWorkSection from "@/components/home/proofOfWorkSection/ProofOfWorkSection";



export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ProofOfWorkSection></ProofOfWorkSection>
      <AiLabSection></AiLabSection>
    </>
  );
}

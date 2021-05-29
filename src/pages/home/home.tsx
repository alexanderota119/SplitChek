import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./sections/hero-section";
import SplitChekSection from "./sections/splitChek-section";
import StepSection from "./sections/step-section";
import VideoSection from "./sections/video-section";
import CtaSection from "./sections/cta-section";
import ReviewSection from "./sections/review-section";
import ImageSection from "./sections/image-section";
import CtaBSection from "./sections/cta-bottom-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <SplitChekSection />
      <StepSection />
      <VideoSection />
      <CtaSection />
      <ReviewSection />
      <ImageSection />
      <CtaBSection />
    </>
  );
}

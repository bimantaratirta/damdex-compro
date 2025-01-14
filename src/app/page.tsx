"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { TopBar } from "@/components/topBar";
import { FirstSection } from "@/components/firstSection";
import { SecondSection } from "@/components/secondSection";
import { ThirdSection } from "@/components/thirdSection";
import { FourthSection } from "@/components/fourthSection";
import { FiftSection } from "@/components/fifthSection";
import { SixthSection } from "@/components/sixthSection";
import { Footer } from "@/components/footer";

const Page = () => {
  return (
    <>
      <TopBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FiftSection />
      <SixthSection />
      <Footer />
    </>
  );
};

export default Page;

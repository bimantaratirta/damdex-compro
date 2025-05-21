"use client";
import { FirstSection } from "@/components/firstSection";
import { SecondSection } from "@/components/secondSection";
import { ThirdSection } from "@/components/thirdSection";
import { FourthSection } from "@/components/fourthSection";
import { FiftSection } from "@/components/fifthSection";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";

const Page = () => {
  return (
    <AppLayout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FiftSection />
      <SixthSection />
    </AppLayout>
  );
};

export default Page;

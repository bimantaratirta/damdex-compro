"use client";
import { FirstSection } from "@/components/firstSection";
import { SecondSection } from "@/components/secondSection";
import { ThirdSection } from "@/components/thirdSection";
import { FourthSection } from "@/components/fourthSection";
import { FiftSection } from "@/components/fifthSection";
import { SixthSection } from "@/components/sixthSection";
import { AppLayout } from "@/components/appLayout";
import { useHome } from "@/swr-hooks/home/useHome";
import { LoadingView } from "@/components/loadingView";

const Page = () => {
  const { loading } = useHome();

  if (loading) return <LoadingView />;
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

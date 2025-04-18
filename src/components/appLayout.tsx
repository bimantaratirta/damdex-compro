import { TopBar } from "@/components/topBar";
import { Footer } from "@/components/footer";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

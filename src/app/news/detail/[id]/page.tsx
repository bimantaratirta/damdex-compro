"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "@/components/localStorageProvider";
import { useNewsDetail } from "@/swr-hooks/news/useNewsDetail";
import { OtherListSection } from "@/components/otherListSection";
import { useNews } from "@/swr-hooks/news/useNews";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { language } = useLanguage();
  const { data } = useNewsDetail(Number(id));
  const { data: news } = useNews();

  const otherNews = news?.data.payload
    .filter((data) => data.id !== Number(id))
    .map((data) => ({
      img: data.titleImageUrl,
      title: language === "id" ? data.titleIDN : data.titleENG,
      id: data.id,
    }));

  return (
    <AppLayout>
      <Box sx={{ p: { xs: 3, md: 5 } }}>
        <Typography
          fontWeight={800}
          textAlign={"center"}
          mb={5}
          variant="h3"
          pt={{ xs: 5, sm: 8, lg: 5, xl: 8 }}
        >
          {language === "id" ? data?.data.titleIDN : data?.data.titleENG}
        </Typography>
        {data && data.data.titleImageUrl && (
          <Box
            sx={{
              width: { xs: "auto" },
              height: { xs: "200px", sm: "250px", lg: "50vh" },
              position: "relative",
              m: "auto",
            }}
          >
            <Image
              alt="image1"
              priority
              src={data?.data.titleImageUrl}
              fill
              objectFit="cover"
              style={{ borderRadius: "25px" }}
            />
          </Box>
        )}
        <Box
          textAlign={"justify"}
          mx="auto"
          width={"auto"}
          fontSize={{ xs: "20px", lg: "26px" }}
          justifyContent={"start"}
          mt={5}
        >
          <div
            className="flex flex-col !space-y-10"
            dangerouslySetInnerHTML={{
              __html: language === "id" ? (data?.data.contentIDN as string) : (data?.data.contentENG as string),
            }}
          />
        </Box>
        <OtherListSection
          variant="News"
          data={otherNews}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;

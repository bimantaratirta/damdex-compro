/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/../public/project.png";
import { useLanguage } from "@/components/localStorageProvider";
import { useNewsDetail } from "@/swr-hooks/news/useNewsDetail";
import imgdummy from "@/../public/event2.png";
import { OtherListSection } from "@/components/otherListSection";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { language } = useLanguage();
  const { data, loading } = useNewsDetail(Number(id));

  const dummy = [
    { img: imgdummy, title: "News 1" },
    { img: imgdummy, title: "News 2" },
    { img: imgdummy, title: "News 3" },
  ];

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
          News {id}
        </Typography>
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
            src={img}
            fill
            objectFit="cover"
            style={{ borderRadius: "25px" }}
          />
        </Box>
        <Typography
          textAlign={"justify"}
          mx="auto"
          width={"auto"}
          fontSize={{ md: "30px", sm: "20px", xs: "15px" }}
          justifyContent={"start"}
          mt={5}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sem ac justo consectetur euismod. Nulla a
          blandit nisl, ut bibendum justo. Phasellus nec molestie arcu. Vestibulum rutrum neque risus, a posuere magna
          tristique vitae. Fusce placerat dictum sollicitudin. Vestibulum sit amet maximus ligula, id interdum libero.
          Vivamus condimentum quam sit amet euismod bibendum. Praesent sed leo sit amet lectus placerat rutrum sed a
          sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia
          leo massa, eget congue erat molestie id.
        </Typography>
        <Typography
          textAlign={"justify"}
          mx="auto"
          width={"auto"}
          fontSize={{ md: "30px", sm: "20px", xs: "15px" }}
          justifyContent={"start"}
          mt={5}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sem ac justo consectetur euismod. Nulla a
          blandit nisl, ut bibendum justo. Phasellus nec molestie arcu. Vestibulum rutrum neque risus, a posuere magna
          tristique vitae. Fusce placerat dictum sollicitudin. Vestibulum sit amet maximus ligula, id interdum libero.
          Vivamus condimentum quam sit amet euismod bibendum. Praesent sed leo sit amet lectus placerat rutrum sed a
          sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia
          leo massa, eget congue erat molestie id.
        </Typography>
        <OtherListSection
          variant="News"
          data={dummy}
        />
      </Box>
    </AppLayout>
  );
};

export default Page;

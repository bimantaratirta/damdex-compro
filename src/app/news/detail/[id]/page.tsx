"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/../public/project.png";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  return (
    <AppLayout>
      <Box sx={{ p: 12 }}>
        <Typography
          fontWeight={800}
          textAlign={"center"}
          mb={10}
          variant="h3"
          mt={5}
        >
          News {id}
        </Typography>
        <Box sx={{ width: { xs: "auto" }, height: { xs: "25vh", sm: "50vh" }, position: "relative", m: "auto" }}>
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
      </Box>
    </AppLayout>
  );
};

export default Page;

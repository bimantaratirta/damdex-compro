"use client";
import React from "react";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography } from "@mui/material";
import { useLanguage } from "@/components/localStorageProvider";
import { useEventDetail } from "@/swr-hooks/eventGallery/useEventDetail";
import Image from "next/image";
import { OtherListSection } from "@/components/otherListSection";
import { convertDate } from "@/lib/utils";
import { useEvent } from "@/swr-hooks/eventGallery/useEvent";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { language } = useLanguage();
  const { data } = useEventDetail(Number(id));
  const { data: events } = useEvent({ limit: 3 });

  const otherEvents = events?.data.payload
    .filter((data) => data.id !== Number(id))
    .map((data) => ({
      img: data.heroImageUrl,
      title: language === "id" ? data.titleIDN : data.titleENG,
      id: data.id,
    }));

  return (
    <AppLayout>
      {data && data.data.heroImageUrl && (
        <Box
          sx={{
            width: { xs: "100vw" },
            height: { lg: "40vh", md: "30vh", sm: "250px", xs: "190px" },
            position: "relative",
          }}
        >
          <Image
            alt="image1"
            priority
            unoptimized
            src={data?.data.heroImageUrl ?? ""}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}
      <Box sx={{ p: { xs: "0px 24px 24px", md: "0px 40px 40px", lg: 5 } }}>
        <Typography
          textAlign={"center"}
          mb={3}
          fontWeight={800}
          fontSize={{ lg: "60px", md: "50px", xs: "40px" }}
        >
          {language === "id" ? data?.data.titleIDN : data?.data.titleENG}
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontWeight={800}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              Tempat
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              {language === "id" ? data?.data.eventVenueIDN : data?.data.eventVenueENG}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontSize={{ xs: "20px", lg: "26px" }}
              fontWeight={800}
            >
              Hari
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              {convertDate(data?.data.eventDate)}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={5}
            justifyContent={"start"}
          >
            <Typography
              width={"15vw"}
              fontSize={{ xs: "20px", lg: "26px" }}
              fontWeight={800}
            >
              Tema Acara
            </Typography>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              :
            </Typography>
            <Typography
              fontWeight={800}
              width={"50vw"}
              fontSize={{ xs: "20px", lg: "26px" }}
            >
              {language === "id" ? data?.data.eventThemeIDN : data?.data.eventThemeENG}
            </Typography>
          </Stack>
        </Box>
        <Stack
          direction={"column"}
          fontSize={{ xs: "20px", lg: "26px" }}
          textAlign={"justify"}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                data && language === "id"
                  ? (data?.data.eventDescriptionIDN as string)
                  : (data?.data.eventDescriptionENG as string),
            }}
          />
        </Stack>
        <OtherListSection
          data={otherEvents}
          variant="Events"
        />
      </Box>
    </AppLayout>
  );
};

export default Page;

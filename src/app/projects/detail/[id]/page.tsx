"use client";
import { AppLayout } from "@/components/appLayout";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { use } from "react";
import { useLanguage } from "@/components/localStorageProvider";
import { useProjectDetail } from "@/swr-hooks/project/useProjectDetail";
import { OtherListSection } from "@/components/otherListSection";
import { useProject } from "@/swr-hooks/project/useProject";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { language } = useLanguage();
  const { data } = useProjectDetail(Number(id));
  const { data: projects } = useProject({ limit: 3 });

  const otherProjects = projects?.data.payload.map((data) => ({
    img: data.heroImageUrl,
    title: language === "id" ? data.titleIDN : data.titleENG,
    id: data.id,
  }));

  return (
    <AppLayout>
      <Box sx={{ p: { lg: 10, xs: 5 } }}>
        <Typography
          fontWeight={800}
          textAlign={"center"}
          mb={5}
          variant="h3"
          mt={{ xs: 5, md: 8, lg: 5 }}
        >
          {language === "id" ? data?.data.titleIDN : data?.data.titleENG}
        </Typography>
        {data && data.data.heroImageUrl && (
          <Box sx={{ height: { xs: "200px", sm: "300px", md: "50vh" }, position: "relative", m: "auto" }}>
            <Image
              alt="image1"
              src={data?.data.heroImageUrl}
              fill
              objectFit="cover"
              style={{ borderRadius: "25px" }}
            />
          </Box>
        )}
        <Box
          textAlign={"justify"}
          mx="auto"
          fontSize={"20px"}
          justifyContent={"start"}
          mt={5}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                language === "id"
                  ? (data?.data.firstDescriptionIDN as string)
                  : (data?.data.firstDescriptionENG as string),
            }}
          />
        </Box>
        <Stack
          mt={5}
          direction={{ md: "row", xs: "column" }}
          width={{ md: "90vw", xs: "auto" }}
          fontSize={"20px"}
          spacing={5}
        >
          {data && data.data.heroImageUrl && (
            <Box
              sx={{
                width: { lg: "50vw", md: "75vw", xs: "auto" },
                height: { xs: "200px", sm: "300px", md: "50vh" },
                position: "relative",
              }}
            >
              <Image
                alt="image"
                src={data?.data.heroImageUrl}
                fill
                objectFit="cover"
                style={{ borderRadius: "25px" }}
              />
            </Box>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html:
                language === "id"
                  ? (data?.data.secondDescriptionIDN as string)
                  : (data?.data.secondDescriptionENG as string),
            }}
          />
        </Stack>
        <OtherListSection
          data={otherProjects}
          variant="Projects"
        />
      </Box>
    </AppLayout>
  );
};

export default Page;

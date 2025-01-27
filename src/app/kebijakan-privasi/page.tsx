"use client";
import { Box, Stack, Typography } from "@mui/material";
import { TopBar } from "@/components/topBar";

const Page = () => {
  return (
    <>
      <TopBar />
      <Box sx={{ pt: "8vh", px: 2 }}>
        <Typography variant="h4" fontWeight={800} align="center">
          Privacy Policy
        </Typography>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Privacy Policy
          </Typography>
          <Typography variant="body1">
            This privacy policy applies to the Damdex app (hereby referred to as &quot;Application&quot;) for mobile devices that was created by Damdex Indonesia (hereby referred to as &quot;Service Provider&quot;) as a Free service. This
            service is intended for use &quot;AS IS&quot;.
          </Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Information Collection and Use
          </Typography>
          <Typography>The Application collects information when you download and use it. This information may include information such as:</Typography>
          <Stack py={2}>
            <Typography>- Your device&apos;s Internet Protocol address (e.g. IP address)</Typography>
            <Typography>- The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</Typography>
            <Typography>- The time spent on the Application</Typography>
            <Typography>- The operating system you use on your mobile device</Typography>
          </Stack>
          <Typography>The Application collects your device&apos;s location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</Typography>
          <Stack pt={2}>
            <Typography>- Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</Typography>
            <Typography>
              - Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
            </Typography>
            <Typography>
              - Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={800}>
            Third Party Access
          </Typography>
          <Typography>
            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in
            the ways that are described in this privacy statement.
          </Typography>
          <Typography pt={2}>
            Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
          </Typography>
          <Stack py={2}>
            <Typography>- Google Play Services</Typography>
            <Typography>- Google Analytics for Firebase</Typography>
            <Typography>- Firebase Crashlytics</Typography>
          </Stack>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Opt-Out Rights
          </Typography>
          <Typography>
            You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or
            network.
          </Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Data Retention Policy
          </Typography>
          <Typography>
            The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided via the Application,
            please contact them at impact.team@damdex.com and they will respond in a reasonable time.
          </Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Children
          </Typography>
          <Typography>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13.</Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Security
          </Typography>
          <Typography>
            The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes
            and maintains.
          </Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Changes
          </Typography>
          <Typography>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy.</Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Your Consent
          </Typography>
          <Typography>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</Typography>
        </Stack>
        <Stack pb={2}>
          <Typography variant="h6" fontWeight={800}>
            Contact Us
          </Typography>
          <Typography>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at impact.team@damdex.com.</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Page;

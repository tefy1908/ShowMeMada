import React from "react";
import { Box, Button } from "@mui/material";
import ResponsiveAppBar from "../Components/AppBar";
import EmailIcon from "../Components/IconComponent/EmailIcon";
import FacebookIcon from "../Components/IconComponent/FacebookIcon";
import TwitterIcon from "../Components/IconComponent/TwitterIcon";
import InstaIcon from "../Components/IconComponent/InstaIcon";
import backGroundImageHome from "..//Assets/Images/backgroundHome.jpeg";
import LocMadagascarIcon from "../Components/IconComponent/LocMadagascarIcon";
import TripAdvisorIcon from "../Components/IconComponent/TripAdvisorIcon";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation();
  return (
    <Box display="flex" flexGrow={1} flexDirection={"column"} height={"100vh"}>
      <ResponsiveAppBar />
      <Box
        display={"flex"}
        flexGrow={1}
        padding={"20px 40px"}
        justifyContent={"space-between"}
        bgcolor={"black"}
      >
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
          color={"white"}
        >
          <EmailIcon />
          <Box display={"flex"} flexDirection={"column"} color={"white"}>
            <Box>{t('email')}</Box>
            <Box>tefymaherison19@gmail.com</Box>
          </Box>
        </Box>
        <Box
          color={"white"}
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={"5px"}
        >
          {t('hurryUp')} <Box  component="span" color="#63AB45">{t('newTour')}</Box>
        </Box>
        <Box
          color={"white"}
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={"20px"}
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexGrow={1}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"30px"}
        color={"white"}
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backGroundImageHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LocMadagascarIcon />
        <Box fontWeight={900} fontSize={"65px"}>
          {t('heroTitle')}
        </Box>
        <Box fontSize={"18px"}>
          {" "}
          {t('heroSubtitle')}
        </Box>
        <Box display={"flex"} gap={"20px"}>
          <Box
            padding={"10px 15px"}
            bgcolor={"#63AB45"}
            fontSize={"16px"}
            borderRadius={"10px"}
            fontWeight={900}
          >
            {t('bookTrip')}
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <TripAdvisorIcon />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box fontSize={"16px"}>Tripadvisor</Box>
                <Box>{t('rating')} </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

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
import NavBarBlack from "../Components/NavBarBlack";
const Home = () => {
  const {t} = useTranslation();
  return (
    <Box display="flex" flexGrow={1} flexDirection={"column"} height={"100vh"}>
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
        <Box fontWeight={900} fontSize={"65px"} textAlign={'center'}>
          {t('heroTitle')}
        </Box>
        <Box fontSize={"18px"} textAlign={'center'}>
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
            sx={{cursor : "pointer"}}
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

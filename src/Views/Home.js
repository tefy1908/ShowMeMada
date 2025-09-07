import { Box } from "@mui/material";

import backGroundImageHome from "..//Assets/Images/backgroundHome.jpeg";
import LocMadagascarIcon from "../Components/IconComponent/LocMadagascarIcon";
import TripAdvisorIcon from "../Components/IconComponent/TripAdvisorIcon";
import { useTranslation } from "react-i18next";
import WhyMadagascarSection from "../Components/WhyMadagascar";
import ReviewShowMeMada from "../Components/ReviewShowMeMada";
import BaobabMorondava from "..//Assets/Images/baobabMorondava.jpg"
const Home = () => {
  const {t} = useTranslation();
  return (
    <Box display="flex" flexGrow={1} flexDirection={"column"}>
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
          height: "100vh",
          backgroundImage: `url(${BaobabMorondava})`,
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
      <WhyMadagascarSection/>
      <ReviewShowMeMada/>

    </Box>
    
  );
};

export default Home;

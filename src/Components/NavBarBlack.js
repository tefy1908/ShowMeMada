import { Box } from "@mui/material"
import EmailIcon from "./IconComponent/EmailIcon"
import FacebookIcon from "./IconComponent/FacebookIcon"
import TwitterIcon from "./IconComponent/TwitterIcon"
import InstaIcon from "./IconComponent/InstaIcon"
import { useTranslation } from "react-i18next"
const NavBarBlack =()=>{
      const {t} = useTranslation();
    
    return(
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

    )
}

export default NavBarBlack
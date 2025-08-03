import { Box } from "@mui/material";
import ChevronGauche from "./IconComponent/ChevronCauche";
import ChevronDroite from "./IconComponent/ChevronDroite";
const TextTitle = ({ title }) => {
  return (
    <Box display={"flex"} gap={"5px"} textAlign={'center'}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <ChevronGauche />
      </Box>{" "}
      <Box fontSize={"30px"} color={"#63AB45"} fontWeight={900}>
        {title}
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <ChevronDroite />
      </Box>
    </Box>
  );
};

export default TextTitle;

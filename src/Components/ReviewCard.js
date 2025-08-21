import { Box } from "@mui/material";
import GuillemetIcon from "./IconComponent/GuillemetIcon";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";

// Composant pour afficher les étoiles
const RatingStars = ({ rating }) => {
  const maxStars = 5;
  return (
    <Box display="flex" justifyContent="center">
      {[...Array(maxStars)].map((_, index) =>
        index < rating ? (
          <StarIcon key={index} sx={{ color: "#63AB45" }} />
        ) : (
          <StarBorderIcon key={index} sx={{ color: "#63AB45" }} />
        )
      )}
    </Box>
  );
};
const ReviewCard = ({ name, description, image, rating }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={"20px 0px"}
      borderRadius={"50px"}
      bgcolor={"white"}
      border={1}
      gap="20px"
      flex={1}
      sx={{boxShadow: "inset 0px 4px 4px #00000040, 0px 4px 4px #00000040"}}
    >
      <GuillemetIcon />
      <Avatar
        src={image}
        sx={{
          width: 80,
          height: 80,
          margin: "auto",
      
        }}
      />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} fontFamily={"Eina01-Bold"} fontSize={"24px"} color={"#3C3E3E"}>
        {name}
      </Box>
      <Box display={'flex'} textAlign={'center'} fontSize={"16px"} fontFamily={"Montserrat"}>{description}</Box>
      <RatingStars rating={rating} />
    </Box>
  );
};

export default ReviewCard;

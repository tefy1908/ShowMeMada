import { Box } from "@mui/material"
import Avatar1 from "..//Assets/Images/Profile 1.png";
import Avatar2 from "..//Assets/Images/Profile 2.png";
import Avatar3 from "..//Assets/Images/Profile 3.png";
import ReviewCard from "./ReviewCard";
const ReviewShowMeMada = ()=>{
const reviews = [
  {
    name: "Sophie - France",
    description: "Un voyage magique ! Des endroits secrets, des lémuriens adorables et une équipe passionnée. Madagascar nous a conquis !",
    image: Avatar1,
    rating: 5,
  },
  {
    name: "Carlos - Espagne", 
    description: "Organisation parfaite ! Notre guide a partagé sa passion pour la culture malgache. L'allée des baobabs au coucher du soleil... inoubliable !",
    image: Avatar2,
    rating: 5,
  },
  {
    name: "Marie & Thomas - Suisse",
    description: "Expérience authentique et responsable ! Hébergements chez l'habitant, artisans locaux, biodiversité incroyable. Merci Show Me Mada !",
    image: Avatar3,
    rating: 5,
  },
];
    return(
      
             <Box
          display="flex"
          sx={{
            backgroundImage:
              "linear-gradient(to bottom, black 50%, white 50%)",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"2% 10%"}
          flexDirection={"column"}
          gap="80px"
          flexGrow={1}
        >
          <Box
            display={"flex"}
            fontSize={"32px"}
            fontWeight={400}
            alignContent={"center"}
            color="#FFFFFF"
            textAlign={'center'}
          >
            Expérience Show Me Mada
          </Box>
          <Box
            display={"flex"}
            flexGrow={1}
            justifyContent={"space-between"}
            sx={{gap: { xs: "10px", sm: "80px", md: "80px", xl : "80px" }}}
    
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Box>
        </Box>
      
    )
}

export default ReviewShowMeMada;
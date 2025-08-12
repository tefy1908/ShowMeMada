import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { Grid, keyframes } from "@mui/material";
import { useTranslation } from 'react-i18next';
import CardAboutUS from "../Components/CardAboutUs";
import TextTitle from "../Components/TextTitle";
import ValueCard from "../Components/ValeurCard";
import CardItemTeam from "../Components/CardItemTeam";

// Animation pour l'image
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AboutUs = () => {
  const { t } = useTranslation();

  // Données des valeurs avec traduction
  const valuesData = [
    {
      icon: "🌱",
      title: t("aboutUs.values.responsibleTourism.title"),
      description: t("aboutUs.values.responsibleTourism.description"),
      delay: 0.1,
    },
    {
      icon: "🎯",
      title: t("aboutUs.values.excellence.title"),
      description: t("aboutUs.values.excellence.description"),
      delay: 0.2,
    },
    {
      icon: "👥",
      title: t("aboutUs.values.expertise.title"),
      description: t("aboutUs.values.expertise.description"),
      delay: 0.3,
    },
    {
      icon: "🤝",
      title: t("aboutUs.values.trust.title"),
      description: t("aboutUs.values.trust.description"),
      delay: 0.4,
    },
  ];

  // Données de l'équipe avec traduction
  const teamData = [
    {
      name: t("aboutUs.team.members.rakoto.name"),
      title: t("aboutUs.team.members.rakoto.title"),
      image: "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: t("aboutUs.team.members.rakoto.experience"),
      specialty: t("aboutUs.team.members.rakoto.specialty"),
    },
    {
      name: t("aboutUs.team.members.marie.name"),
      title: t("aboutUs.team.members.marie.title"),
      image: "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: t("aboutUs.team.members.marie.experience"),
      specialty: t("aboutUs.team.members.marie.specialty"),
    },
    {
      name: t("aboutUs.team.members.hery.name"),
      title: t("aboutUs.team.members.hery.title"),
      image: "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: t("aboutUs.team.members.hery.experience"),
      specialty: t("aboutUs.team.members.hery.specialty"),
    },
    {
      name: t("aboutUs.team.members.lalaina.name"),
      title: t("aboutUs.team.members.lalaina.title"),
      image: "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: t("aboutUs.team.members.lalaina.experience"),
      specialty: t("aboutUs.team.members.lalaina.specialty"),
    },
  ];

  return (
    <Box
      display={"flex"}
      flexGrow={1}
      flexDirection={"column"}
      padding={"40px 20px"}
      gap={"1.5rem"}
    >
      <Box display="flex" alignItems={"center"} justifyContent={"center"}>
        <TextTitle title={t("aboutUs.title")} />
      </Box>

      {/* Section Notre Histoire */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        flexGrow={1}
        sx={{ height: { md: "100vh" } }}
      >
        <Grid container spacing={4} flexGrow={1} alignItems="center">
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box display="flex" flexDirection="column" gap={3}>
              {/* Titre de section */}
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "bold",
                  color: "#333",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: 0,
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#63AB45",
                  },
                }}
              >
                {t("aboutUs.ourStory.title")}
              </Typography>

              {/* Contenu texte */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: 1.8,
                  color: "#666",
                  marginBottom: 2,
                }}
              >
                {t("aboutUs.ourStory.paragraph1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: 1.8,
                  color: "#666",
                  marginBottom: 2,
                }}
              >
                {t("aboutUs.ourStory.paragraph2")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: 1.8,
                  color: "#666",
                  marginBottom: 3,
                }}
              >
                {t("aboutUs.ourStory.paragraph3")}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            {/* Container image avec éléments décoratifs */}
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "450px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Image principale */}
              <Box>photo</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/** Section Nos valeurs */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        flexGrow={1}
        sx={{ height: { md: "100vh" } }}
      >
        {/* Titre de section */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "#333",
            position: "relative",
            textAlign: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              backgroundColor: "#63AB45",
            },
          }}
        >
          {t("aboutUs.values.title")}
        </Typography>

        {/* Contenu valeurs */}
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "1.5rem" },
            color: "#333",
            textAlign: "center",
          }}
        >
          {t("aboutUs.values.subtitle")}
        </Typography>

        {/**Contenu card valeur */}
        <Grid container spacing={3}>
          {/* Partie gauche - Les 4 composants en 2x2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {valuesData.map((value, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <ValueCard
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                    delay={value.delay}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Partie droite - Photo */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/path/to/your/image.jpg"
              alt="Description de votre image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2, // Optionnel pour arrondir les coins
                boxShadow: 2, // Optionnel pour ajouter une ombre
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/** Section Notre équipe */}
      <Box display={"flex"} flexDirection={"column"} gap={3} flexGrow={1}>
        {/* Titre de section */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "#333",
            position: "relative",
            textAlign: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              backgroundColor: "#63AB45",
            },
          }}
        >
          {t("aboutUs.team.title")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#666",
            textAlign: "center",
            margin: "0 auto",
            fontSize: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          {t("aboutUs.team.subtitle")}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Partie gauche - Photo */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/path/to/your/team-image.jpg"
              alt="Photo de l'équipe"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2, // Optionnel pour arrondir les coins
                boxShadow: 3, // Optionnel pour ajouter une ombre
                minHeight: { xs: 300, md: 500 }, // Hauteur minimale responsive
              }}
            />
          </Grid>

          {/* Partie droite - Cartes d'équipe en 2x2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3} justifyContent="center">
              {teamData.map((member, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <CardItemTeam
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    experience={member.experience}
                    specialty={member.specialty}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
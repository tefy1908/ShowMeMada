import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import CardAboutUS from "../Components/CardAboutUs";
import { Grid, keyframes } from "@mui/material";
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
  // Données des valeurs
  const valuesData = [
    {
      icon: "🌱",
      title: "Tourisme Responsable",
      description:
        "Nous nous engageons à préserver la biodiversité unique de Madagascar et à soutenir les communautés locales à travers un tourisme respectueux et durable.",
      delay: 0.1,
    },
    {
      icon: "🎯",
      title: "Excellence & Authenticité",
      description:
        "Chaque détail compte. Nous créons des expériences authentiques et mémorables en privilégiant la qualité à la quantité dans tous nos services.",
      delay: 0.2,
    },
    {
      icon: "👥",
      title: "Expertise Locale",
      description:
        "Notre équipe malgache passionnée partage avec vous les secrets cachés de l'île, loin des sentiers battus, pour des découvertes uniques et privilégiées.",
      delay: 0.3,
    },
    {
      icon: "🤝",
      title: "Relation de Confiance",
      description:
        "Transparence, écoute et réactivité sont au cœur de notre relation client. Nous vous accompagnons avant, pendant et après votre voyage.",
      delay: 0.4,
    },
  ];

  // team data

  const teamData = [
    {
      name: "Rakoto Andrianina",
      title: "Directeur & Guide Principal",
      image:
        "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: "15 ans d'expérience",
      specialty: "Faune endémique",
    },
    {
      name: "Marie Razafy",
      title: "Coordinatrice Voyages",
      image:
        "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: "10 ans d'expérience",
      specialty: "Organisation logistique",
    },
    {
      name: "Hery Rasoamanana",
      title: "Chef Chauffeur-Guide",
      image:
        "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: "12 ans d'expérience",
      specialty: "Routes & Culture locale",
    },
    {
      name: "Dr. Lalaina Rabe",
      title: "Guide Naturaliste",
      image:
        "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
      experience: "8 ans d'expérience",
      specialty: "Biodiversité malgache",
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
        <TextTitle title={"About Us"} />
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
                Notre Histoire
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
                Fondée en 2008 par une équipe de passionnés malgaches et
                français, Show Me Mada est née d'un rêve simple : partager la
                beauté exceptionnelle de Madagascar avec le monde entier.
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
                Ce qui a commencé comme une petite agence locale est devenu
                aujourd'hui l'un des acteurs de référence du tourisme
                responsable à Madagascar. Notre secret ? Une connaissance intime
                du terrain, des relations privilégiées avec les communautés
                locales et une passion contagieuse pour notre île.
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
                Chaque voyage que nous organisons est le fruit de notre
                expertise accumulée au fil des années et de notre engagement
                indéfectible envers un tourisme qui respecte l'environnement et
                les populations locales.
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

      {/** Séction Nos valeurs */}
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
          Nos valeurs
        </Typography>

        {/* Contenu valeurs */}
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "1.5rem" },
            color: "#333",
            textAlign: "center",
          }}
        >
          Les principes qui guident chacune de nos actions et qui font la
          différence dans vos voyages
        </Typography>
        {/**Contenu card valeur */}
        <Grid container spacing={3}>
          {valuesData.map((value, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={value.delay}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/** Séction Notre équipe */}

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
          Notre équipe
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
          Une équipe multiculturelle et expérimentée, réunie par la même passion
          pour Madagascar et l'envie de vous offrir des expériences inoubliables
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamData.map((member, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
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
      </Box>
    </Box>
  );
};

export default AboutUs;

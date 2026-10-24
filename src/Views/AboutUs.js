import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import PageHero from "../Components/PageHero";
import StatsStrip from "../Components/StatsStrip";
import SectionHeader from "../Components/SectionHeader";
import CtaBanner from "../Components/CtaBanner";
import { destinationsByRegion, regionKeys } from "../Data/destinations";

//Photos
import HeroImage from "../Assets/Images/zebu.jpg";
import StoryImage from "../Assets/Images/CoucherSoleil.jpg";

//Icones
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";

const BRAND = "#63AB45";
const INK = "#1f2d3d";
const FOUNDED = 2008;

const totalDestinations = Object.values(destinationsByRegion).reduce((sum, list) => sum + list.length, 0);

const values = [
  { key: "responsibleTourism", Icon: LocalFloristOutlinedIcon },
  { key: "excellence", Icon: CheckCircleOutlinedIcon },
  { key: "expertise", Icon: DirectionsRunOutlinedIcon },
  { key: "trust", Icon: HandshakeOutlinedIcon },
];

// Photo identique pour tous en attendant les vrais portraits de l'équipe
const TEAM_PLACEHOLDER = "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg";
const team = [
  { key: "rakoto", image: TEAM_PLACEHOLDER },
  { key: "marie", image: TEAM_PLACEHOLDER },
  { key: "hery", image: TEAM_PLACEHOLDER },
  { key: "lalaina", image: TEAM_PLACEHOLDER },
];

const cardSx = {
  height: "100%",
  borderRadius: 4,
  backgroundColor: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(0,0,0,0.1)" },
};

const AboutUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stats = [
    { value: FOUNDED, label: t("aboutUs.stats.founded") },
    { value: `${new Date().getFullYear() - FOUNDED}+`, label: t("aboutUs.stats.experience") },
    { value: totalDestinations, label: t("aboutUs.stats.destinations") },
    { value: regionKeys.length, label: t("aboutUs.stats.regions") },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: { xs: 6, md: 10 } }}>
      <PageHero
        overline={t("aboutUs.title")}
        title={t("aboutUs.heroTitle")}
        intro={t("aboutUs.heroIntro")}
        image={HeroImage}
        imagePosition="center 45%"
      />
      <StatsStrip stats={stats} />

      <Container maxWidth="lg">
        {/* Notre histoire */}
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ pt: { xs: 7, md: 10 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeader overline={t("aboutUs.storyOverline")} title={t("aboutUs.ourStory.title")} sx={{ mb: 2.5 }} />
            {["paragraph1", "paragraph2", "paragraph3"].map((paragraph) => (
              <Typography key={paragraph} sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
                {t(`aboutUs.ourStory.${paragraph}`)}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pl: { md: 3 }, pb: 3 }}>
              <Box
                component="img"
                src={StoryImage}
                alt={t("aboutUs.ourStory.title")}
                loading="lazy"
                sx={{
                  display: "block",
                  width: "100%",
                  height: { xs: 320, md: 480 },
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                }}
              />
              {/* Badge flottant */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  left: { xs: 16, md: 0 },
                  bottom: 0,
                  px: 3,
                  py: 2,
                  borderRadius: 3,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              >
                <Typography sx={{ color: BRAND, fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.2 }}>
                  {t("aboutUs.since", { year: FOUNDED })}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  Show Me Mada
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Nos valeurs */}
        <Box sx={{ pt: { xs: 8, md: 12 } }}>
          <SectionHeader
            align="center"
            overline={t("aboutUs.valuesOverline")}
            title={t("aboutUs.values.title")}
            subtitle={t("aboutUs.values.subtitle")}
          />
          <Grid container spacing={3}>
            {values.map(({ key, Icon }) => (
              <Grid key={key} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ ...cardSx, p: 3.5 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      backgroundColor: `${BRAND}1A`,
                      color: BRAND,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Icon fontSize="large" />
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: "1.15rem", fontWeight: 700, color: INK, mb: 1 }}>
                    {t(`aboutUs.values.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {t(`aboutUs.values.${key}.description`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Notre équipe */}
        <Box sx={{ pt: { xs: 8, md: 12 } }}>
          <SectionHeader
            align="center"
            overline={t("aboutUs.teamOverline")}
            title={t("aboutUs.team.title")}
            subtitle={t("aboutUs.team.subtitle")}
          />
          <Grid container spacing={3}>
            {team.map(({ key, image }) => {
              const base = `aboutUs.team.members.${key}`;
              return (
                <Grid key={key} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Box sx={{ ...cardSx, overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={image}
                      alt={t(`${base}.name`)}
                      loading="lazy"
                      sx={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h3" sx={{ fontSize: "1.15rem", fontWeight: 700, color: INK }}>
                        {t(`${base}.name`)}
                      </Typography>
                      <Typography sx={{ color: BRAND, fontWeight: 600, fontSize: "0.95rem", mb: 1.5 }}>
                        {t(`${base}.title`)}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {[t(`${base}.experience`), t(`${base}.specialty`)].map((tag) => (
                          <Box
                            key={tag}
                            component="span"
                            sx={{
                              fontSize: "0.78rem",
                              fontWeight: 500,
                              px: 1.25,
                              py: 0.5,
                              borderRadius: 2,
                              backgroundColor: "#f0f2f4",
                              color: INK,
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <CtaBanner
          sx={{ mt: { xs: 8, md: 12 } }}
          title={t("aboutUs.cta.title")}
          text={t("aboutUs.cta.text")}
          primary={{ label: t("common.requestQuote"), onClick: () => navigate("/contact") }}
          secondary={{ label: t("aboutUs.cta.tours"), onClick: () => navigate("/tours") }}
        />
      </Container>
    </Box>
  );
};

export default AboutUs;

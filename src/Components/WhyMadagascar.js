import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Composants d'icônes personnalisés (à créer ou adapter selon vos icônes existantes)
const BiodiversityIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>🌿</Box>
);

const CultureIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>🏺</Box>
);

const LandscapeIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>🏔️</Box>
);

const WildlifeIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>🐾</Box>
);

const BeachIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>🏖️</Box>
);

const AdventureIcon = () => (
  <Box sx={{ fontSize: "48px", color: "#63AB45" }}>⛰️</Box>
);

const WhyMadagascarSection = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <BiodiversityIcon />,
      title: t('biodiversityTitle'),
      description: t('biodiversityDesc'),
      stats: t('biodiversityStats')
    },
    {
      icon: <CultureIcon />,
      title: t('cultureTitle'),
      description: t('cultureDesc'),
      stats: t('cultureStats')
    },
    {
      icon: <LandscapeIcon />,
      title: t('landscapeTitle'),
      description: t('landscapeDesc'),
      stats: t('landscapeStats')
    },
    {
      icon: <WildlifeIcon />,
      title: t('wildlifeTitle'),
      description: t('wildlifeDesc'),
      stats: t('wildlifeStats')
    },
    {
      icon: <BeachIcon />,
      title: t('beachTitle'),
      description: t('beachDesc'),
      stats: t('beachStats')
    },
    {
      icon: <AdventureIcon />,
      title: t('adventureTitle'),
      description: t('adventureDesc'),
      stats: t('adventureStats')
    }
  ];

  return (
    <Box 
      sx={{ 
        py: 8, 
        px: { xs: 2, md: 4 },
        backgroundColor: "#f8f9fa"
      }}
    >
      {/* Section principale */}
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h2" 
          component="h2"
          sx={{ 
            fontWeight: 900, 
            fontSize: { xs: "36px", md: "48px" },
            color: "#2c3e50",
            mb: 2
          }}
        >
          {t('whyMadagascarTitle')}
        </Typography>
        <Typography 
          variant="h5" 
          component="p"
          sx={{ 
            fontSize: "20px",
            color: "#666",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6
          }}
        >
          {t('whyMadagascarSubtitle')}
        </Typography>
      </Box>

      {/* Grille des points forts */}
      <Grid container spacing={4} justifyContent="center">
        {highlights.map((highlight, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Box
              sx={{
                background: "white",
                borderRadius: "15px",
                padding: "30px",
                textAlign: "center",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
                }
              }}
            >
              <Box mb={2}>
                {highlight.icon}
              </Box>
              <Typography 
                variant="h4" 
                component="h3"
                sx={{ 
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#2c3e50",
                  mb: 2
                }}
              >
                {highlight.title}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                {highlight.description}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#63AB45",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "inline-block"
                }}
              >
                {highlight.stats}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Section citation/témoignage */}
      <Box 
        textAlign="center" 
        mt={8}
        sx={{
          background: "linear-gradient(135deg, #63AB45 0%, #4a8f35 100%)",
          borderRadius: "20px",
          padding: "40px",
          color: "white"
        }}
      >
        <Typography 
          variant="h4" 
          component="blockquote"
          sx={{ 
            fontSize: { xs: "24px", md: "28px" },
            fontStyle: "italic",
            fontWeight: 300,
            mb: 2,
            lineHeight: 1.4
          }}
        >
          "{t('madagascarQuote')}"
        </Typography>
        <Typography 
          sx={{ 
            fontSize: "16px",
            opacity: 0.9
          }}
        >
          {t('quoteAuthor')}
        </Typography>
      </Box>

      {/* Call to action */}
      <Box textAlign="center" mt={6}>
        <Box
          component="button"
          sx={{
            backgroundColor: "#63AB45",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "25px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#4a8f35",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(99, 171, 69, 0.3)"
            }
          }}
        >
          {t('discoverMadagascar')}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyMadagascarSection;
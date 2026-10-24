import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ForestIcon from "@mui/icons-material/Forest";
import SailingIcon from "@mui/icons-material/Sailing";
import PoolIcon from "@mui/icons-material/Pool";
import PetsIcon from "@mui/icons-material/Pets";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import KitesurfingOutlinedIcon from "@mui/icons-material/KitesurfingOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SectionHeader from "./SectionHeader";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";
const INK = "#1f2d3d";

// Clés de traduction : <key>Title, <key>Desc, <key>Stats
const highlights = [
  { key: "biodiversity", Icon: ForestIcon, color: BRAND },
  { key: "culture", Icon: AssuredWorkloadOutlinedIcon, color: "#e67e22" },
  { key: "landscape", Icon: SailingIcon, color: "#1e9bd7" },
  { key: "wildlife", Icon: PetsIcon, color: "#8B5A2B" },
  { key: "beach", Icon: PoolIcon, color: "#1e9bd7" },
  { key: "adventure", Icon: KitesurfingOutlinedIcon, color: "#e67e22" },
];

const WhyMadagascarSection = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <SectionHeader
        align="center"
        overline={t("home.whyOverline")}
        title={t("whyMadagascarTitle")}
        subtitle={t("whyMadagascarSubtitle")}
      />

      <Grid container spacing={3}>
        {highlights.map(({ key, Icon, color }) => (
          <Grid key={key} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box
              sx={{
                height: "100%",
                p: 3.5,
                borderRadius: 4,
                backgroundColor: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(0,0,0,0.1)" },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: `${color}1A`,
                  color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                }}
              >
                <Icon fontSize="large" />
              </Box>
              <Typography variant="h3" sx={{ fontSize: "1.15rem", fontWeight: 700, color: INK, mb: 1 }}>
                {t(`${key}Title`)}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2.5 }}>
                {t(`${key}Desc`)}
              </Typography>
              <Box
                component="span"
                sx={{
                  mt: "auto",
                  alignSelf: "flex-start",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: BRAND_DARK,
                  backgroundColor: `${BRAND}1A`,
                }}
              >
                {t(`${key}Stats`)}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Proverbe */}
      <Box
        component="figure"
        sx={{
          m: 0,
          mt: { xs: 5, md: 7 },
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 5 },
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: "white",
          borderLeft: `6px solid ${BRAND}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 44, color: BRAND, opacity: 0.6 }} />
        <Typography
          component="blockquote"
          sx={{ m: 0, fontSize: { xs: "1.3rem", md: "1.6rem" }, fontWeight: 500, color: INK, lineHeight: 1.4 }}
        >
          {t("madagascarQuote")}
        </Typography>
        <Typography component="figcaption" sx={{ mt: 1.5, color: "text.secondary", fontWeight: 500 }}>
          — {t("quoteAuthor")}
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyMadagascarSection;

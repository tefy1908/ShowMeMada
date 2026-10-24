import { Box, Typography } from "@mui/material";

const BRAND = "#63AB45";
const INK = "#1f2d3d";

// En-tête de section : surtitre vert, titre, sous-titre optionnel
const SectionHeader = ({ overline, title, subtitle, align = "left", sx }) => (
  <Box sx={{ textAlign: align, mb: { xs: 3, md: 4 }, ...sx }}>
    {overline && (
      <Typography
        sx={{
          color: BRAND,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontSize: "0.8rem",
          fontWeight: 700,
          mb: 1,
        }}
      >
        {overline}
      </Typography>
    )}
    <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2.1rem" }, fontWeight: 700, color: INK, lineHeight: 1.2 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography
        sx={{
          color: "text.secondary",
          mt: 1.5,
          lineHeight: 1.7,
          maxWidth: 640,
          mx: align === "center" ? "auto" : 0,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionHeader;

import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";

// Bandeau vert d'appel à l'action : texte à gauche, deux boutons à droite (empilés sur mobile)
const CtaBanner = ({ title, text, primary, secondary, sx }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 3, sm: 4, md: 5 },
      borderRadius: 4,
      color: "white",
      background: `linear-gradient(120deg, ${BRAND_DARK} 0%, ${BRAND} 100%)`,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: { xs: "flex-start", md: "center" },
      justifyContent: "space-between",
      gap: 3,
      ...sx,
    }}
  >
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" component="h2" sx={{ fontSize: { xs: "1.4rem", md: "1.75rem" }, fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ opacity: 0.92, lineHeight: 1.6 }}>{text}</Typography>
    </Box>
    <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
      {primary && (
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={primary.onClick}
          sx={{
            backgroundColor: "white",
            color: BRAND_DARK,
            fontWeight: 600,
            borderRadius: 3,
            px: 3,
            py: 1.25,
            boxShadow: "none",
            "&:hover": { backgroundColor: "#f1f8ee", boxShadow: "none" },
          }}
        >
          {primary.label}
        </Button>
      )}
      {secondary && (
        <Button
          variant="outlined"
          onClick={secondary.onClick}
          sx={{
            color: "white",
            borderColor: "rgba(255,255,255,0.7)",
            fontWeight: 600,
            borderRadius: 3,
            px: 3,
            py: 1.25,
            "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          {secondary.label}
        </Button>
      )}
    </Box>
  </Paper>
);

export default CtaBanner;

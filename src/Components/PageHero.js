import { Box, Container, Typography } from "@mui/material";

// Bandeau photo en haut de page : surtitre, titre et introduction en bas à gauche.
// children : contenu additionnel sous l'intro (ex. boutons).
// Le padding bas laisse la place à un bloc qui vient chevaucher le bandeau (ex. chiffres clés).
const PageHero = ({
  overline,
  title,
  intro,
  image,
  imagePosition = "center",
  overlap = true,
  minHeight = { xs: 380, md: 460 },
  titleSize = { xs: "2.4rem", sm: "3rem", md: "3.75rem" },
  children,
}) => (
  <Box
    sx={{
      position: "relative",
      minHeight,
      display: "flex",
      alignItems: "flex-end",
      color: "white",
      backgroundImage: `linear-gradient(180deg, rgba(10,20,10,0.15) 0%, rgba(10,20,10,0.75) 100%), url("${image}")`,
      backgroundSize: "cover",
      backgroundPosition: imagePosition,
    }}
  >
    <Container maxWidth="lg" sx={{ pt: 8, pb: overlap ? { xs: 10, md: 12 } : { xs: 5, md: 6 } }}>
      {overline && (
        <Typography
          sx={{
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.8rem",
            fontWeight: 600,
            px: 1.5,
            py: 0.5,
            mb: 2,
            borderRadius: 5,
            backgroundColor: "rgba(99,171,69,0.9)",
          }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h1"
        sx={{
          fontSize: titleSize,
          fontWeight: 700,
          lineHeight: 1.1,
          mb: 2,
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}
      >
        {title}
      </Typography>
      {intro && (
        <Typography sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, maxWidth: 620, opacity: 0.92, lineHeight: 1.7 }}>
          {intro}
        </Typography>
      )}
      {children}
    </Container>
  </Box>
);

export default PageHero;

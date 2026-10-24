import { Box, Container, Paper, Typography } from "@mui/material";

const BRAND = "#63AB45";

// Carte de chiffres clés qui chevauche le bas du bandeau PageHero.
// stats : [{ value, label }]
const StatsStrip = ({ stats }) => (
  <Container maxWidth="lg" sx={{ position: "relative", mt: { xs: -6, md: -7 } }}>
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", md: `repeat(${stats.length}, 1fr)` },
        py: { xs: 2, md: 3 },
      }}
    >
      {stats.map((stat, index) => (
        <Box
          key={stat.label}
          sx={{
            textAlign: "center",
            px: 2,
            py: { xs: 1.5, md: 0 },
            borderLeft: { md: index > 0 ? "1px solid #eee" : "none" },
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, fontWeight: 700, color: BRAND, lineHeight: 1.2 }}>
            {stat.value}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Paper>
  </Container>
);

export default StatsStrip;

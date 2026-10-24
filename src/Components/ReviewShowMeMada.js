import { Avatar, Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import Avatar1 from "../Assets/Images/Profile 1.png";
import Avatar2 from "../Assets/Images/Profile 2.png";
import Avatar3 from "../Assets/Images/Profile 3.png";

const BRAND = "#63AB45";
const INK = "#1f2d3d";

const avatars = [Avatar1, Avatar2, Avatar3];

const ReviewShowMeMada = () => {
  const { t } = useTranslation();
  // Noms et textes dans reviews.items, dans le même ordre que les avatars
  const reviews = t("reviews.items", { returnObjects: true }).map((review, index) => ({
    ...review,
    image: avatars[index],
    rating: 5,
  }));

  return (
    <Box>
      <SectionHeader
        align="center"
        overline={t("home.reviewsOverline")}
        title={t("reviews.title")}
        subtitle={t("home.reviewsSubtitle")}
      />
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid key={review.name} size={{ xs: 12, md: 4 }}>
            <Box
              component="figure"
              sx={{
                m: 0,
                height: "100%",
                p: 3.5,
                borderRadius: 4,
                backgroundColor: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <FormatQuoteIcon
                sx={{ position: "absolute", top: 20, right: 20, fontSize: 48, color: BRAND, opacity: 0.15 }}
              />
              <Box sx={{ display: "flex", mb: 2 }} aria-label={`${review.rating}/5`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#f5b301", fontSize: 20 }} />
                ))}
              </Box>
              <Typography
                component="blockquote"
                sx={{ m: 0, color: INK, lineHeight: 1.7, flexGrow: 1, mb: 3 }}
              >
                “{review.description}”
              </Typography>
              <Box component="figcaption" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar src={review.image} alt="" sx={{ width: 48, height: 48 }} />
                <Typography sx={{ fontWeight: 600, color: INK }}>{review.name}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewShowMeMada;

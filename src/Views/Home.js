import { Box, Button, ButtonBase, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import PageHero from "../Components/PageHero";
import StatsStrip from "../Components/StatsStrip";
import SectionHeader from "../Components/SectionHeader";
import CtaBanner from "../Components/CtaBanner";
import CardTourPackage from "../Components/CardTourPackage";
import WhyMadagascarSection from "../Components/WhyMadagascar";
import ReviewShowMeMada from "../Components/ReviewShowMeMada";
import { buildTourPackages } from "../Data/tours";
import { destinationsByRegion, regionKeys } from "../Data/destinations";

import HeroImage from "../Assets/Images/baobabMorondava.jpg";
import GalleryBeach from "../Assets/Images/Galerie/Plage/Plage 1.jpg";
import GalleryLemur from "../Assets/Images/Galerie/Faune/Faune 2.jpg";
import GalleryBaobab from "../Assets/Images/Galerie/Flore/Flore 3.jpg";
import GalleryLocal from "../Assets/Images/Galerie/Locale/locale 4.jpg";
import GalleryLandscape from "../Assets/Images/Galerie/Paysage/Paysage 7.jpg";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";
const FOUNDED = 2008;

const totalDestinations = Object.values(destinationsByRegion).reduce((sum, list) => sum + list.length, 0);

// Mosaïque d'aperçu de la galerie : la première photo occupe 2 × 2 cases
const galleryPreview = [
  { src: GalleryBeach, section: "beaches", big: true },
  { src: GalleryLemur, section: "fauna" },
  { src: GalleryBaobab, section: "flora" },
  { src: GalleryLocal, section: "local" },
  { src: GalleryLandscape, section: "landscapes" },
];

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const tours = buildTourPackages(t);

  const stats = [
    { value: `${new Date().getFullYear() - FOUNDED}+`, label: t("aboutUs.stats.experience") },
    { value: totalDestinations, label: t("aboutUs.stats.destinations") },
    { value: regionKeys.length, label: t("aboutUs.stats.regions") },
    { value: "90%", label: t("destinations.stats.endemic") },
  ];

  const sectionSx = { pt: { xs: 8, md: 12 } };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: { xs: 6, md: 10 } }}>
      <PageHero
        overline={t("home.heroOverline")}
        title={t("heroTitle")}
        intro={t("heroSubtitle")}
        image={HeroImage}
        imagePosition="center 65%"
        minHeight={{ xs: 560, md: "82vh" }}
        titleSize={{ xs: "2.6rem", sm: "3.4rem", md: "4.5rem" }}
      >
        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/tours")}
            sx={{
              backgroundColor: BRAND,
              fontWeight: 600,
              borderRadius: 3,
              px: 3.5,
              py: 1.5,
              boxShadow: "0 8px 24px rgba(99,171,69,0.4)",
              "&:hover": { backgroundColor: BRAND_DARK },
            }}
          >
            {t("bookTrip")}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/destinations")}
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.7)",
              fontWeight: 600,
              borderRadius: 3,
              px: 3.5,
              py: 1.5,
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255,255,255,0.08)",
              "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.18)" },
            }}
          >
            {t("home.discoverDestinations")}
          </Button>
        </Box>
      </PageHero>
      <StatsStrip stats={stats} />

      <Container maxWidth="lg">
        {/* Circuits populaires */}
        <Box sx={sectionSx}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-end" },
              justifyContent: "space-between",
              gap: 2,
              mb: { xs: 3, md: 4 },
            }}
          >
            <SectionHeader
              overline={t("home.toursOverline")}
              title={t("home.toursTitle")}
              subtitle={t("home.toursSubtitle")}
              sx={{ mb: 0 }}
            />
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/tours")}
              sx={{ color: BRAND_DARK, fontWeight: 600, flexShrink: 0 }}
            >
              {t("home.allTours")}
            </Button>
          </Box>
          <Grid container spacing={3}>
            {tours.map((tour) => (
              <Grid key={tour.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <CardTourPackage
                  DestinationImage={tour.DestinationImage}
                  DestinationName={tour.DestinationName}
                  Location={tour.Location}
                  Description={tour.Description}
                  Itinerary={tour.Itinerary}
                  duration={tour.duration}
                  priceRange={tour.priceRange}
                  OnQuoteRequest={() => navigate("/contact")}
                  OnViewDetails={() => navigate("/tours")}
                  currentColor={tour.currentColor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Pourquoi Madagascar */}
        <Box sx={sectionSx}>
          <WhyMadagascarSection />
        </Box>

        {/* Aperçu de la galerie */}
        <Box sx={sectionSx}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-end" },
              justifyContent: "space-between",
              gap: 2,
              mb: { xs: 3, md: 4 },
            }}
          >
            <SectionHeader
              overline={t("home.galleryOverline")}
              title={t("gallery.heading")}
              subtitle={t("gallery.intro")}
              sx={{ mb: 0 }}
            />
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/galerie")}
              sx={{ color: BRAND_DARK, fontWeight: 600, flexShrink: 0 }}
            >
              {t("home.galleryCta")}
            </Button>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gridAutoRows: { xs: 160, md: 220 },
              gap: { xs: 1.25, md: 2 },
            }}
          >
            {galleryPreview.map((photo) => (
              <ButtonBase
                key={photo.section}
                onClick={() => navigate("/galerie")}
                aria-label={t(`gallery.${photo.section}`)}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                  gridColumn: photo.big ? "span 2" : "auto",
                  gridRow: photo.big ? "span 2" : "auto",
                  "& img": { transition: "transform 0.5s ease" },
                  "&:hover img": { transform: "scale(1.06)" },
                  "&.Mui-focusVisible": { outline: `3px solid ${BRAND}`, outlineOffset: 2 },
                }}
              >
                <Box
                  component="img"
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: "auto 0 0 0",
                    p: 1.5,
                    pt: 4,
                    color: "white",
                    textAlign: "left",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                  }}
                >
                  {t(`gallery.${photo.section}`)}
                </Box>
              </ButtonBase>
            ))}
          </Box>
        </Box>

        {/* Témoignages */}
        <Box sx={sectionSx}>
          <ReviewShowMeMada />
        </Box>

        <CtaBanner
          sx={{ mt: { xs: 8, md: 12 } }}
          title={t("home.cta.title")}
          text={t("home.cta.text")}
          primary={{ label: t("common.requestQuote"), onClick: () => navigate("/contact") }}
          secondary={{ label: t("home.allTours"), onClick: () => navigate("/tours") }}
        />
      </Container>
    </Box>
  );
};

export default Home;

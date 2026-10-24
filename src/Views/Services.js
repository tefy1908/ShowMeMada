import React, { useState } from "react";
import { Box, ButtonBase, Container, Typography, keyframes } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import PageHero from "../Components/PageHero";
import FilterPills from "../Components/FilterPills";
import CtaBanner from "../Components/CtaBanner";
import Lightbox from "../Components/Lightbox";
import HeroImage from "../Assets/Images/Galerie/Paysage/Paysage 6.jpg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

// require.context doit recevoir des arguments littéraux : un appel par dossier
const sections = [
  {
    key: "fauna",
    context: require.context("../Assets/Images/Galerie/Faune", false, /\.(png|jpe?g|svg|webp)$/),
  },
  {
    key: "flora",
    context: require.context("../Assets/Images/Galerie/Flore", false, /\.(png|jpe?g|svg|webp)$/),
  },
  {
    key: "landscapes",
    context: require.context("../Assets/Images/Galerie/Paysage", false, /\.(png|jpe?g|svg|webp)$/),
  },
  {
    key: "beaches",
    context: require.context("../Assets/Images/Galerie/Plage", false, /\.(png|jpe?g|svg|webp)$/),
  },
  {
    key: "local",
    context: require.context("../Assets/Images/Galerie/Locale", false, /\.(png|jpe?g|svg|webp)$/),
  },
];

const allPhotos = sections.flatMap(({ key, context }) =>
  context.keys().map((item, index) => {
    const src = context(item);
    return { id: `${key}-${index + 1}`, number: index + 1, section: key, src: src.default || src };
  })
);

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const photos = allPhotos
    .filter((photo) => filter === "all" || photo.section === filter)
    .map((photo) => {
      const category = t(`gallery.${photo.section}`);
      return { ...photo, category, title: `${category} ${photo.number}` };
    });

  const filterItems = [
    { key: "all", label: t("gallery.all"), count: allPhotos.length },
    ...sections.map(({ key }) => ({
      key,
      label: t(`gallery.${key}`),
      count: allPhotos.filter((photo) => photo.section === key).length,
    })),
  ];

  const handleFilterChange = (key) => {
    setFilter(key);
    setLightboxIndex(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: { xs: 6, md: 10 } }}>
      <PageHero
        overline={t("gallery.title")}
        title={t("gallery.heading")}
        intro={t("gallery.intro")}
        image={HeroImage}
        imagePosition="center 40%"
        overlap={false}
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
          }}
        >
          <FilterPills
            ariaLabel={t("gallery.filterLabel")}
            value={filter}
            onChange={handleFilterChange}
            items={filterItems}
          />
          <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ flexShrink: 0 }}>
            {t("gallery.count", { count: photos.length })}
          </Typography>
        </Box>

        {/* Mosaïque : colonnes CSS, chaque photo garde ses proportions */}
        <Box
          key={filter}
          sx={{
            columnCount: { xs: 2, md: 3, lg: 4 },
            columnGap: { xs: "10px", md: "16px" },
          }}
        >
          {photos.map((photo, index) => (
            <ButtonBase
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              aria-label={t("gallery.open", { title: photo.title })}
              sx={{
                display: "block",
                width: "100%",
                mb: { xs: "10px", md: "16px" },
                breakInside: "avoid",
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                animation: `${fadeIn} 0.45s ease-out ${Math.min(index, 12) * 0.04}s both`,
                "& img": { transition: "transform 0.5s ease" },
                "&:hover img, &.Mui-focusVisible img": { transform: "scale(1.06)" },
                "&:hover .photo-overlay, &.Mui-focusVisible .photo-overlay": { opacity: 1 },
                "&.Mui-focusVisible": { outline: "3px solid #63AB45", outlineOffset: 2 },
              }}
            >
              <Box
                component="img"
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                sx={{ display: "block", width: "100%", height: "auto" }}
              />
              <Box
                className="photo-overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  p: 1.5,
                  color: "white",
                  background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.65) 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>{photo.category}</Typography>
                <ZoomInIcon />
              </Box>
            </ButtonBase>
          ))}
        </Box>

        <CtaBanner
          sx={{ mt: { xs: 6, md: 8 } }}
          title={t("gallery.cta.title")}
          text={t("gallery.cta.text")}
          primary={{ label: t("common.requestQuote"), onClick: () => navigate("/contact") }}
          secondary={{ label: t("gallery.cta.destinations"), onClick: () => navigate("/destinations") }}
        />
      </Container>

      <Lightbox
        images={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </Box>
  );
};

export default Services;

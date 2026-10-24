import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
  keyframes,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HikingIcon from "@mui/icons-material/Hiking";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ParkIcon from "@mui/icons-material/Park";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import MuseumIcon from "@mui/icons-material/Museum";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

import HeroImage from "../Assets/Images/Baobab.jpg";
import { destinationsByRegion } from "../Data/destinations";
import PageHero from "../Components/PageHero";
import FilterPills from "../Components/FilterPills";
import CtaBanner from "../Components/CtaBanner";
import StatsStrip from "../Components/StatsStrip";

const INK = "#1f2d3d";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const regions = [
  { key: "hauts_plateaux", Icon: Diversity3OutlinedIcon },
  { key: "ouest", Icon: WbSunnyOutlinedIcon },
  { key: "est", Icon: BeachAccessOutlinedIcon },
  { key: "nord", Icon: SailingOutlinedIcon },
  { key: "sud", Icon: ForestOutlinedIcon },
];

const activityIcons = {
  beach: <BeachAccessIcon fontSize="small" />,
  park: <ParkIcon fontSize="small" />,
  boat: <DirectionsBoatIcon fontSize="small" />,
  museum: <MuseumIcon fontSize="small" />,
  hiking: <HikingIcon fontSize="small" />,
  camera: <CameraAltIcon fontSize="small" />,
};

const totalDestinations = Object.values(destinationsByRegion).reduce((sum, list) => sum + list.length, 0);

// Carte d'une destination ; si la photo manque, affiche un visuel aux couleurs de la région
const DestinationCard = ({ destination, regionLabel, RegionIcon, index }) => {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);
  const base = `destinations.items.${destination.key}`;
  const activities = t(`${base}.activities`, { returnObjects: true });

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        animation: `${fadeInUp} 0.5s ease-out ${index * 0.08}s both`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.14)",
        },
        "&:hover .destination-media": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ height: 240, overflow: "hidden" }}>
        {imageFailed ? (
          <Box
            className="destination-media"
            aria-hidden
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${destination.color} 0%, ${INK} 140%)`,
              transition: "transform 0.6s ease",
            }}
          >
            <RegionIcon sx={{ fontSize: 88, color: "rgba(255,255,255,0.35)" }} />
          </Box>
        ) : (
          <CardMedia
            className="destination-media"
            component="img"
            image={destination.image}
            alt={destination.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            sx={{ height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
          />
        )}
      </Box>

      <Chip
        label={t(`destinations.categories.${destination.category}`)}
        size="small"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: destination.color,
          color: "white",
          fontWeight: 600,
        }}
      />

      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
          <LocationOnIcon sx={{ color: destination.color, fontSize: 18 }} />
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {regionLabel}
          </Typography>
        </Box>

        <Typography variant="h5" component="h3" fontWeight={700} sx={{ color: INK }}>
          {destination.name}
        </Typography>
        <Typography variant="subtitle1" fontWeight={600} sx={{ color: destination.color, mb: 1 }}>
          {t(`${base}.subtitle`)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "4.8em",
          }}
        >
          {t(`${base}.description`)}
        </Typography>

        <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 1 }}>
          {activities.slice(0, 3).map((activity, idx) => (
            <Box
              key={activity}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                backgroundColor: `${destination.color}15`,
                color: destination.color,
                px: 1.25,
                py: 0.5,
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {activityIcons[destination.activityIcons[idx]] || activityIcons.camera}
              <span>{activity}</span>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const Destinations = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(regions[0].key);

  const current = regions.find((r) => r.key === selectedRegion);
  const currentDestinations = destinationsByRegion[selectedRegion] || [];
  const regionLabel = t(`destinations.regions.${selectedRegion}`);

  const stats = [
    { value: totalDestinations, label: t("destinations.stats.destinations") },
    { value: "23", label: t("destinations.stats.regions") },
    { value: "50+", label: t("destinations.stats.parks") },
    { value: "90%", label: t("destinations.stats.endemic") },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: { xs: 6, md: 10 } }}>
      <PageHero
        overline={t("destinations.title")}
        title={t("destinations.heading")}
        intro={t("destinations.intro")}
        image={HeroImage}
        imagePosition="center 60%"
      />

      <StatsStrip stats={stats} />

      {/* Exploration par région */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 700, color: INK, mb: 2.5 }}>
          {t("destinations.exploreTitle")}
        </Typography>

        <FilterPills
          ariaLabel={t("destinations.exploreTitle")}
          value={selectedRegion}
          onChange={setSelectedRegion}
          items={regions.map(({ key, Icon }) => ({
            key,
            Icon,
            label: t(`destinations.regions.${key}`),
            count: destinationsByRegion[key].length,
          }))}
        />

        {/* Présentation de la région sélectionnée */}
        <Box sx={{ mt: 3, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, flexWrap: "wrap" }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" }, fontWeight: 700, color: INK }}>
              {regionLabel}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              {t("destinations.count", { count: currentDestinations.length })}
            </Typography>
          </Box>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {t(`destinations.regionDescriptions.${selectedRegion}`)}
          </Typography>
        </Box>

        {/* key = région : rejoue l'animation d'apparition à chaque changement */}
        <Grid container spacing={3} key={selectedRegion}>
          {currentDestinations.map((destination, index) => (
            <Grid key={destination.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <DestinationCard
                destination={destination}
                regionLabel={regionLabel}
                RegionIcon={current.Icon}
                index={index}
              />
            </Grid>
          ))}
        </Grid>

        <CtaBanner
          sx={{ mt: { xs: 6, md: 8 } }}
          title={t("destinations.cta.title")}
          text={t("destinations.cta.text")}
          primary={{ label: t("common.requestQuote"), onClick: () => navigate("/contact") }}
          secondary={{ label: t("destinations.cta.tours"), onClick: () => navigate("/tours") }}
        />
      </Container>
    </Box>
  );
};

export default Destinations;

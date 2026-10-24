import * as React from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

const BRAND = "#63AB45";
const INK = "#1f2d3d";

const badgeSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  px: 1.25,
  py: 0.5,
  borderRadius: 2,
  fontSize: "0.8rem",
  fontWeight: 600,
  backgroundColor: "rgba(255,255,255,0.92)",
  color: INK,
};

export default function CardTourPackage({
  DestinationImage,
  DestinationName,
  Location,
  Description,
  Itinerary, // Étapes : ['Antananarivo', 'Antsirabe', ...]
  duration,
  priceRange,
  OnQuoteRequest,
  OnViewDetails,
  currentColor,
}) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 20px 40px rgba(0,0,0,0.14)" },
        "&:hover .tour-media": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ position: "relative", height: 240, overflow: "hidden" }}>
        <CardMedia
          className="tour-media"
          component="img"
          image={DestinationImage}
          alt={DestinationName}
          loading="lazy"
          sx={{ height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
        />
        <Box sx={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {duration && (
            <Box sx={badgeSx}>
              <AccessTimeIcon sx={{ fontSize: 16, color: currentColor }} />
              {duration}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: "auto 0 0 0",
            p: 2,
            pt: 6,
            color: "white",
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
        >
          <Typography variant="h5" component="h3" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {DestinationName}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, opacity: 0.9 }}>
            <LocationOnIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2">{Location}</Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {Description}
        </Typography>

        {/* Itinéraire : étapes reliées */}
        {Itinerary && Itinerary.length > 0 && (
          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              {t("common.itinerary")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0.75, mt: 0.75 }}>
              {Itinerary.map((step, index) => (
                <React.Fragment key={step}>
                  <Box
                    component="span"
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      px: 1,
                      py: 0.25,
                      borderRadius: 1.5,
                      backgroundColor: `${BRAND}14`,
                      color: INK,
                    }}
                  >
                    {step}
                  </Box>
                  {index < Itinerary.length - 1 && (
                    <Box component="span" sx={{ color: "text.disabled", fontSize: "0.8rem" }}>
                      →
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={{ mt: "auto" }}>
          {priceRange && (
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {t("Tours.modal.from")}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: INK, fontSize: "1.1rem" }}>{priceRange}</Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              variant="outlined"
              onClick={OnViewDetails}
              sx={{
                flex: 1,
                borderRadius: 3,
                fontWeight: 600,
                color: INK,
                borderColor: "#dfe3e8",
                "&:hover": { borderColor: BRAND, color: BRAND, backgroundColor: "transparent" },
              }}
            >
              {t("common.viewDetails")}
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={OnQuoteRequest}
              sx={{
                flex: 1,
                borderRadius: 3,
                fontWeight: 600,
                backgroundColor: BRAND,
                boxShadow: "none",
                "&:hover": { backgroundColor: "#4a8533", boxShadow: "none" },
              }}
            >
              {t("common.requestQuote")}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

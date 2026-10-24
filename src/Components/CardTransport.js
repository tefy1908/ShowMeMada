import * as React from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useTranslation } from "react-i18next";

const BRAND = "#63AB45";
const INK = "#1f2d3d";

const specSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  fontSize: "0.82rem",
  color: "text.secondary",
  fontWeight: 500,
};

export default function CardTransport({
  VehicleImage,
  Brand,
  Model,
  Seats,
  DailyPrice,
  FuelType, // clé : "diesel", "petrol"
  Transmission, // clé : "manual", "automatic"
  OnBooking,
  currentColor,
}) {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = React.useState(false);

  const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);

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
      }}
    >
      <Box sx={{ height: 190, overflow: "hidden" }}>
        {imageFailed ? (
          <Box
            aria-hidden
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${currentColor} 0%, ${INK} 150%)`,
            }}
          >
            <DirectionsCarIcon sx={{ fontSize: 88, color: "rgba(255,255,255,0.35)" }} />
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={VehicleImage}
            alt={`${Brand} ${Model}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            sx={{ height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: INK, fontSize: "1.25rem", mb: 1.5 }}>
          {Brand} {Model}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2.5 }}>
          <Box component="span" sx={specSx}>
            <PeopleIcon sx={{ fontSize: 18, color: BRAND }} />
            {t("Tours.vehicles.seats", { count: Seats })}
          </Box>
          {FuelType && (
            <Box component="span" sx={specSx}>
              <LocalGasStationIcon sx={{ fontSize: 18, color: BRAND }} />
              {t(`Tours.vehicles.fuel.${FuelType}`)}
            </Box>
          )}
          {Transmission && (
            <Box component="span" sx={specSx}>
              <SettingsIcon sx={{ fontSize: 18, color: BRAND }} />
              {t(`Tours.vehicles.transmission.${Transmission}`)}
            </Box>
          )}
        </Box>

        <Box sx={{ mt: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Box>
            <Typography sx={{ fontWeight: 700, color: INK, fontSize: "1.15rem", lineHeight: 1.2 }}>
              {formatPrice(DailyPrice)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {t("Tours.vehicles.perDay")}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={OnBooking}
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              px: 2.5,
              backgroundColor: BRAND,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#4a8533", boxShadow: "none" },
            }}
          >
            {t("Tours.vehicles.book")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

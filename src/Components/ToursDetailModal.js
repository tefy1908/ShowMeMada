import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TerrainIcon from "@mui/icons-material/Terrain";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";
const INK = "#1f2d3d";

const sectionTitleSx = { fontSize: "1.05rem", fontWeight: 700, color: INK, mb: 2 };

// Liste à puces avec icône (inclus, non inclus, points forts)
const IconList = ({ items, icon, iconColor, iconBg }) => (
  <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.25 }}>
    {items.map((item) => (
      <Box component="li" key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
        <Box
          sx={{
            width: 22,
            height: 22,
            mt: "1px",
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: iconColor,
            backgroundColor: iconBg,
            "& svg": { fontSize: 15 },
          }}
        >
          {icon}
        </Box>
        <Typography variant="body2" sx={{ color: INK, lineHeight: 1.6 }}>
          {item}
        </Typography>
      </Box>
    ))}
  </Box>
);

const TourDetailsModal = ({ open, onClose, onQuoteRequest, tourDetails }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!tourDetails) return null;

  const {
    DestinationName,
    Location,
    DestinationImage,
    Description,
    Itinerary,
    detailedDescription,
    duration,
    highlights,
    included,
    notIncluded,
    priceRange,
    bestTime,
    difficulty,
  } = tourDetails;

  const facts = [
    { Icon: AccessTimeIcon, label: t("Tours.modal.duration"), value: duration },
    { Icon: TerrainIcon, label: t("Tours.modal.difficulty"), value: difficulty },
    { Icon: CalendarMonthOutlinedIcon, label: t("Tours.modal.bestTime"), value: bestTime },
    { Icon: PaymentsOutlinedIcon, label: t("Tours.modal.from"), value: priceRange },
  ].filter((fact) => fact.value);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
      scroll="paper"
      aria-labelledby="tour-details-title"
      slotProps={{ paper: { sx: { borderRadius: fullScreen ? 0 : 4, overflow: "hidden" } } }}
    >
      {/* En-tête photo */}
      <Box
        sx={{
          position: "relative",
          flexShrink: 0,
          height: { xs: 220, sm: 280 },
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.7) 100%), url("${DestinationImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label={t("common.close")}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: INK,
            backgroundColor: "rgba(255,255,255,0.92)",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ position: "absolute", left: { xs: 20, sm: 32 }, right: { xs: 20, sm: 32 }, bottom: 20 }}>
          <Typography
            id="tour-details-title"
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" }, fontWeight: 700, lineHeight: 1.15 }}
          >
            {DestinationName}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5, opacity: 0.92 }}>
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <Typography>{Location}</Typography>
          </Box>
        </Box>
      </Box>

      <DialogContent sx={{ p: { xs: 2.5, sm: 4 } }}>
        {/* Infos clés */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: `repeat(${facts.length}, 1fr)` },
            border: "1px solid #eceff2",
            borderRadius: 3,
            mb: 4,
          }}
        >
          {facts.map(({ Icon, label, value }, index) => (
            <Box
              key={label}
              sx={{
                p: 2,
                display: "flex",
                gap: 1.25,
                alignItems: "flex-start",
                borderLeft: { sm: index > 0 ? "1px solid #eceff2" : "none" },
                borderTop: { xs: index > 1 ? "1px solid #eceff2" : "none", sm: "none" },
              }}
            >
              <Icon sx={{ color: BRAND, fontSize: 22, mt: "2px" }} />
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", lineHeight: 1.3 }}>
                  {label}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: INK }}>
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Description */}
        <Typography component="h3" sx={sectionTitleSx}>
          {t("Tours.modal.description")}
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
          {detailedDescription || Description}
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Itinéraire : frise verticale */}
          {Itinerary && Itinerary.length > 0 && (
            <Grid size={{ xs: 12, sm: 5 }}>
              <Typography component="h3" sx={sectionTitleSx}>
                {t("common.itinerary")}
              </Typography>
              <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
                {Itinerary.map((city, index) => {
                  const last = index === Itinerary.length - 1;
                  return (
                    <Box component="li" key={city} sx={{ display: "flex", gap: 1.5, position: "relative", pb: last ? 0 : 2 }}>
                      {!last && (
                        <Box
                          aria-hidden
                          sx={{ position: "absolute", left: 13, top: 28, bottom: 0, width: 2, backgroundColor: `${BRAND}40` }}
                        />
                      )}
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: index === 0 || last ? "white" : BRAND_DARK,
                          backgroundColor: index === 0 || last ? BRAND : `${BRAND}1A`,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography sx={{ color: INK, fontWeight: 500, pt: "3px" }}>{city}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          )}

          {/* Points forts */}
          {highlights && highlights.length > 0 && (
            <Grid size={{ xs: 12, sm: 7 }}>
              <Typography component="h3" sx={sectionTitleSx}>
                {t("Tours.modal.highlights")}
              </Typography>
              <IconList items={highlights} icon={<CheckIcon />} iconColor="white" iconBg={BRAND} />
            </Grid>
          )}
        </Grid>

        {/* Inclus / non inclus */}
        <Grid container spacing={2}>
          {included && included.length > 0 && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ height: "100%", p: 2.5, borderRadius: 3, backgroundColor: `${BRAND}0F` }}>
                <Typography component="h3" sx={sectionTitleSx}>
                  {t("Tours.modal.included")}
                </Typography>
                <IconList items={included} icon={<CheckIcon />} iconColor={BRAND_DARK} iconBg={`${BRAND}26`} />
              </Box>
            </Grid>
          )}
          {notIncluded && notIncluded.length > 0 && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ height: "100%", p: 2.5, borderRadius: 3, backgroundColor: "#f5f6f8" }}>
                <Typography component="h3" sx={sectionTitleSx}>
                  {t("Tours.modal.notIncluded")}
                </Typography>
                <IconList items={notIncluded} icon={<RemoveIcon />} iconColor="#6b7785" iconBg="#e6e9ed" />
              </Box>
            </Grid>
          )}
        </Grid>
      </DialogContent>

      {/* Barre d'actions fixe en bas */}
      <DialogActions
        sx={{
          px: { xs: 2.5, sm: 4 },
          py: 2,
          borderTop: "1px solid #eceff2",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {priceRange ? (
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", lineHeight: 1.2 }}>
              {t("Tours.modal.from")}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: INK, fontSize: "1.15rem" }}>{priceRange}</Typography>
          </Box>
        ) : (
          <span />
        )}
        <Box sx={{ display: "flex", gap: 1.5, ml: "auto" }}>
          <Button
            onClick={onClose}
            sx={{ color: "text.secondary", fontWeight: 600, borderRadius: 3, px: 2.5 }}
          >
            {t("common.close")}
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={onQuoteRequest}
            sx={{
              backgroundColor: BRAND,
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              boxShadow: "none",
              "&:hover": { backgroundColor: BRAND_DARK, boxShadow: "none" },
            }}
          >
            {t("common.requestQuote")}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default TourDetailsModal;

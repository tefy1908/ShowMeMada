import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";
const INK = "#1f2d3d";
const BORDER = "#e3e6ea";

const PRICE_MIN = 20;
const PRICE_MAX = 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const destinations = [
  "Antananarivo",
  "Antsirabe",
  "Toamasina",
  "Mahajanga",
  "Toliara",
  "Antsiranana",
  "Fianarantsoa",
  "Morondava",
  "Nosy Be",
  "Sainte-Marie",
];

const steps = [
  { key: "destination", Icon: LocationOnOutlinedIcon },
  { key: "category", Icon: StarBorderOutlinedIcon },
  { key: "budget", Icon: PaymentsOutlinedIcon },
  { key: "dates", Icon: CalendarMonthOutlinedIcon },
  { key: "contact", Icon: PersonOutlineIcon },
];

const categories = [
  { key: "luxe", Icon: DiamondOutlinedIcon, title: "hotel.luxury", desc: "hotel.luxuryDesc" },
  { key: "simple", Icon: HotelOutlinedIcon, title: "hotel.simple", desc: "hotel.simpleDesc" },
];

const emptySearch = {
  destination: "",
  category: "",
  priceRange: [50, 300],
  checkin: "",
  checkout: "",
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
};

// Date du jour au format AAAA-MM-JJ (fuseau local), comme les champs type="date"
const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const nightsBetween = (checkin, checkout) =>
  Math.round((new Date(checkout) - new Date(checkin)) / 86400000);

// Tuile sélectionnable (destination, catégorie)
const SelectTile = ({ selected, onClick, children, sx }) => (
  <ButtonBase
    onClick={onClick}
    aria-pressed={selected}
    sx={{
      width: "100%",
      position: "relative",
      borderRadius: 3,
      border: "1.5px solid",
      borderColor: selected ? BRAND : BORDER,
      backgroundColor: selected ? `${BRAND}0F` : "white",
      color: INK,
      fontFamily: "inherit",
      transition: "all 0.2s ease",
      "&:hover": { borderColor: BRAND },
      "&.Mui-focusVisible": { outline: `2px solid ${BRAND}`, outlineOffset: 2 },
      ...sx,
    }}
  >
    {selected && (
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: BRAND,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckIcon sx={{ fontSize: 14 }} />
      </Box>
    )}
    {children}
  </ButtonBase>
);

const HotelSearch = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [search, setSearch] = useState(emptySearch);
  const [emailTouched, setEmailTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setSearch((prev) => ({ ...prev, [field]: value }));

  const nights = search.checkin && search.checkout ? nightsBetween(search.checkin, search.checkout) : 0;
  const emailValid = EMAIL_RE.test(search.email.trim());

  const isStepValid = (step = activeStep) => {
    switch (step) {
      case 0:
        return search.destination !== "";
      case 1:
        return search.category !== "";
      case 2:
        return true;
      case 3:
        return Boolean(search.checkin && search.checkout && search.checkin >= today() && nights > 0);
      case 4:
        return search.nom.trim() !== "" && search.prenom.trim() !== "" && emailValid;
      default:
        return false;
    }
  };

  // On ne peut aller qu'aux étapes déjà franchies ou à la suivante valide
  const canGoTo = (step) => step <= activeStep || steps.slice(0, step).every((_, i) => isStepValid(i));

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    setEmailTouched(true);
    if (!isStepValid(4)) return;
    // TODO : brancher l'envoi réel de la demande (EmailJS, Formspree, API...)
    console.log("Recherche avec les critères:", search);
    setSubmitted(true);
  };

  const handleNewSearch = () => {
    setSearch(emptySearch);
    setActiveStep(0);
    setEmailTouched(false);
    setSubmitted(false);
  };

  const summary = [
    { step: 0, Icon: LocationOnOutlinedIcon, label: t("hotel.steps.destination"), value: search.destination },
    {
      step: 1,
      Icon: StarBorderOutlinedIcon,
      label: t("hotel.steps.category"),
      value: search.category && t(search.category === "luxe" ? "hotel.luxury" : "hotel.simple"),
    },
    {
      step: 2,
      Icon: PaymentsOutlinedIcon,
      label: t("hotel.steps.budget"),
      value: `${search.priceRange[0]} € – ${search.priceRange[1]} € ${t("hotel.perNight")}`,
    },
    {
      step: 3,
      Icon: CalendarMonthOutlinedIcon,
      label: t("hotel.steps.dates"),
      value:
        nights > 0 &&
        `${t("hotel.summary.datesValue", { checkin: search.checkin, checkout: search.checkout })} · ${t(
          "hotel.nights",
          { count: nights }
        )}`,
    },
    {
      step: 4,
      Icon: PersonOutlineIcon,
      label: t("hotel.steps.contact"),
      value: search.nom && search.email && `${search.prenom} ${search.nom}`,
    },
  ];

  const stepTitles = [
    t("hotel.destinationTitle"),
    t("hotel.categoryTitle"),
    t("hotel.budgetTitle"),
    t("hotel.datesTitle"),
    t("hotel.contactTitle"),
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={1.5}>
            {destinations.map((dest) => (
              <Grid key={dest} size={{ xs: 6, sm: 4 }}>
                <SelectTile
                  selected={search.destination === dest}
                  onClick={() => update("destination", dest)}
                  sx={{ justifyContent: "flex-start", gap: 1, px: 1.5, py: 1.5, textAlign: "left" }}
                >
                  <LocationOnOutlinedIcon sx={{ fontSize: 20, color: BRAND }} />
                  <Typography sx={{ fontWeight: 500, fontSize: "0.92rem", pr: 2 }}>{dest}</Typography>
                </SelectTile>
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={2}>
            {categories.map(({ key, Icon, title, desc }) => (
              <Grid key={key} size={{ xs: 12, sm: 6 }}>
                <SelectTile
                  selected={search.category === key}
                  onClick={() => update("category", key)}
                  sx={{ flexDirection: "column", alignItems: "flex-start", p: 3, textAlign: "left", height: "100%" }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      backgroundColor: `${BRAND}1A`,
                      color: BRAND,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>{t(title)}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t(desc)}
                  </Typography>
                </SelectTile>
              </Grid>
            ))}
          </Grid>
        );

      case 2:
        return (
          <Box sx={{ px: { xs: 1, sm: 2 } }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography sx={{ fontSize: { xs: "1.6rem", sm: "2rem" }, fontWeight: 700, color: INK }}>
                {search.priceRange[0]} € – {search.priceRange[1]} €
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("hotel.perNight")}
              </Typography>
            </Box>
            <Slider
              value={search.priceRange}
              onChange={(_, value) => update("priceRange", value)}
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={10}
              disableSwap
              valueLabelDisplay="auto"
              valueLabelFormat={(v) => `${v} €`}
              getAriaLabel={(index) => (index === 0 ? "Min" : "Max")}
              marks={[
                { value: PRICE_MIN, label: `${PRICE_MIN} €` },
                { value: PRICE_MAX, label: `${PRICE_MAX} €` },
              ]}
              sx={{ "& .MuiSlider-markLabel": { fontSize: "0.8rem", color: "text.secondary" } }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 2 }}>
              {t("hotel.budgetHint")}
            </Typography>
          </Box>
        );

      case 3:
        return (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type="date"
                label={t("hotel.checkin")}
                value={search.checkin}
                onChange={(e) => update("checkin", e.target.value)}
                slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: today() } }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type="date"
                label={t("hotel.checkout")}
                value={search.checkout}
                onChange={(e) => update("checkout", e.target.value)}
                error={Boolean(search.checkout && search.checkin && nights <= 0)}
                helperText={
                  search.checkout && search.checkin && nights <= 0
                    ? t("contactPage.errors.returnBeforeDeparture")
                    : undefined
                }
                slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: search.checkin || today() } }}
              />
            </Grid>
            {nights > 0 && (
              <Grid size={12}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 2,
                    backgroundColor: `${BRAND}14`,
                    color: BRAND_DARK,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} />
                  {t("hotel.nights", { count: nights })}
                </Box>
              </Grid>
            )}
          </Grid>
        );

      case 4:
        return (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
              {t("hotel.contactIntro")}
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  autoComplete="family-name"
                  label={t("contactPage.lastName")}
                  value={search.nom}
                  onChange={(e) => update("nom", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  autoComplete="given-name"
                  label={t("contactPage.firstName")}
                  value={search.prenom}
                  onChange={(e) => update("prenom", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  autoComplete="email"
                  label={t("contactPage.email")}
                  value={search.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  error={emailTouched && !emailValid}
                  helperText={
                    emailTouched && !emailValid
                      ? t(search.email ? "contactPage.errors.email" : "contactPage.errors.required")
                      : undefined
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  type="tel"
                  autoComplete="tel"
                  label={t("contactPage.phone")}
                  value={search.telephone}
                  onChange={(e) => update("telephone", e.target.value)}
                  helperText={t("contactPage.phoneHelper")}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 2,
                backgroundColor: "#f5f6f8",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, color: BRAND, mt: "2px" }} />
                <Typography variant="body2" color="text.secondary">
                  {t("hotel.infoEmail")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: BRAND, mt: "2px" }} />
                <Typography variant="body2" color="text.secondary">
                  {t("hotel.infoPhone")}
                </Typography>
              </Box>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Box
        role="status"
        sx={{
          minHeight: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 2,
          py: 4,
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 72, color: BRAND }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color: INK }}>
          {t("hotel.successTitle")}
        </Typography>
        <Typography sx={{ color: "text.secondary", maxWidth: 440 }}>{t("hotel.successText")}</Typography>
        <Button variant="outlined" onClick={handleNewSearch} sx={{ mt: 1, borderRadius: 3 }}>
          {t("hotel.newSearch")}
        </Button>
      </Box>
    );
  }

  const isLastStep = activeStep === steps.length - 1;

  return (
    <Grid container spacing={{ xs: 3, md: 5 }}>
      {/* Assistant */}
      <Grid size={{ xs: 12, md: 8 }}>
        {/* Indicateur d'étapes */}
        <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", mb: 4 }}>
          {steps.map(({ key, Icon }, index) => {
            const done = index < activeStep;
            const current = index === activeStep;
            const reachable = canGoTo(index);
            return (
              <Box component="li" key={key} sx={{ flex: 1, position: "relative", textAlign: "center" }}>
                {index > 0 && (
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: 19,
                      right: "50%",
                      width: "100%",
                      height: 2,
                      backgroundColor: index <= activeStep ? BRAND : BORDER,
                      transition: "background-color 0.3s ease",
                    }}
                  />
                )}
                <ButtonBase
                  onClick={() => reachable && setActiveStep(index)}
                  disabled={!reachable}
                  aria-current={current ? "step" : undefined}
                  aria-label={t(`hotel.steps.${key}`)}
                  sx={{
                    position: "relative",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: done || current ? BRAND : BORDER,
                    backgroundColor: done ? BRAND : "white",
                    color: done ? "white" : current ? BRAND : "#9aa4ae",
                    transition: "all 0.3s ease",
                    "&.Mui-focusVisible": { outline: `2px solid ${BRAND}`, outlineOffset: 2 },
                  }}
                >
                  {done ? <CheckIcon sx={{ fontSize: 20 }} /> : <Icon sx={{ fontSize: 20 }} />}
                </ButtonBase>
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "0.78rem",
                    fontWeight: current ? 700 : 500,
                    color: current ? INK : "text.secondary",
                    display: { xs: current ? "block" : "none", sm: "block" },
                  }}
                >
                  {t(`hotel.steps.${key}`)}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Typography variant="body2" sx={{ color: BRAND_DARK, fontWeight: 600, mb: 0.5 }}>
          {t("hotel.stepOf", { current: activeStep + 1, total: steps.length })}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.25rem", sm: "1.4rem" }, fontWeight: 700, color: INK, mb: 3 }}>
          {stepTitles[activeStep]}
        </Typography>

        <Box sx={{ minHeight: { md: 240 } }}>{renderStepContent()}</Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 4 }}>
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            startIcon={<ArrowBackIcon />}
            sx={{ color: "text.secondary", fontWeight: 600, borderRadius: 3, px: 2 }}
          >
            {t("common.previous")}
          </Button>
          <Button
            variant="contained"
            onClick={isLastStep ? handleSubmit : handleNext}
            disabled={!isLastStep && !isStepValid()}
            endIcon={isLastStep ? <EmailOutlinedIcon /> : <ArrowForwardIcon />}
            sx={{ fontWeight: 600, borderRadius: 3, px: 3, py: 1.25, boxShadow: "none" }}
          >
            {isLastStep ? t("hotel.submit") : t("common.next")}
          </Button>
        </Box>
      </Grid>

      {/* Récapitulatif */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            position: { md: "sticky" },
            top: { md: 120 },
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f8f9fa",
            border: `1px solid ${BORDER}`,
          }}
        >
          <Typography sx={{ fontWeight: 700, color: INK, mb: 2 }}>{t("hotel.summaryTitle")}</Typography>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 0.5 }}>
            {summary.map(({ step, Icon, label, value }) => {
              const reachable = canGoTo(step);
              return (
                <Box component="li" key={step}>
                  <ButtonBase
                    onClick={() => reachable && setActiveStep(step)}
                    disabled={!reachable}
                    aria-label={`${t("hotel.edit")} : ${label}`}
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 1.5,
                      p: 1,
                      borderRadius: 2,
                      textAlign: "left",
                      fontFamily: "inherit",
                      "&:hover": { backgroundColor: reachable ? "rgba(0,0,0,0.03)" : "transparent" },
                    }}
                  >
                    <Icon sx={{ fontSize: 20, color: value ? BRAND : "#b4bcc5", mt: "2px" }} />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", lineHeight: 1.3 }}>
                        {label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: value ? 600 : 400, color: value ? INK : "#9aa4ae", wordBreak: "break-word" }}
                      >
                        {value || t("hotel.notSet")}
                      </Typography>
                    </Box>
                  </ButtonBase>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HotelSearch;

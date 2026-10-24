import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccessTime,
  CheckCircleOutline,
  Email,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import TextTitle from "../Components/TextTitle";
import { CONTACT } from "../Utils/contactInfo";

const BRAND = "#63AB45";
const BRAND_DARK = "#4a8533";

const emptyForm = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  typeVoyage: "",
  destination: "",
  nombrePersonnes: "",
  dateDepart: "",
  dateRetour: "",
  budget: "",
  message: "",
};

// Ordre des champs : sert à placer le focus sur la première erreur
const fieldOrder = ["nom", "prenom", "email", "nombrePersonnes", "dateDepart", "dateRetour"];

// Clés de traduction (contactPage.tripTypes.<clé>)
const typesVoyage = ["cultural", "safari", "beach", "adventure", "honeymoon", "family", "business"];

const destinations = [
  "Antananarivo",
  "Nosy Be",
  "Andasibe-Mantadia",
  "Morondava",
  "Isalo",
  "Anakao",
  "Sainte-Marie",
  "Diego Suarez",
  "fullCircuit",
  "otherDestination",
];

const budgetOptions = ["under1000", "1000-2000", "2000-3000", "3000-4000", "over4000"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Date du jour au format AAAA-MM-JJ (fuseau local), comme les champs type="date"
const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const validate = (data) => {
  const errors = {};
  if (!data.nom.trim()) errors.nom = "required";
  if (!data.prenom.trim()) errors.prenom = "required";
  if (!data.email.trim()) errors.email = "required";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "email";
  if (data.nombrePersonnes !== "" && Number(data.nombrePersonnes) < 1) errors.nombrePersonnes = "people";
  if (data.dateDepart && data.dateDepart < today()) errors.dateDepart = "pastDate";
  if (data.dateRetour && data.dateDepart && data.dateRetour < data.dateDepart) {
    errors.dateRetour = "returnBeforeDeparture";
  } else if (data.dateRetour && data.dateRetour < today()) {
    errors.dateRetour = "pastDate";
  }
  return errors;
};

// Titre de section numéroté
const SectionTitle = ({ number, children }) => (
  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        bgcolor: BRAND,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.85rem",
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {number}
    </Box>
    <Typography variant="h6" sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#2c3e50" }}>
      {children}
    </Typography>
  </Box>
);

// Ligne du panneau d'information : icône + libellé + valeur (cliquable si href)
const InfoRow = ({ icon, label, value, href }) => (
  <Box display="flex" alignItems="center" gap={2}>
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
    <Box minWidth={0}>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {label}
      </Typography>
      {href ? (
        <Link
          href={href}
          sx={{
            color: "white",
            fontWeight: 500,
            textDecorationColor: "rgba(255,255,255,0.5)",
            wordBreak: "break-word",
            "&:hover": { textDecorationColor: "white" },
          }}
        >
          {value}
        </Link>
      ) : (
        <Typography sx={{ fontWeight: 500 }}>{value}</Typography>
      )}
    </Box>
  </Box>
);

const Contact = () => {
  const { t } = useTranslation();
  const cardRef = useRef(null);

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  // Après une première tentative d'envoi, on revalide à chaque saisie
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const destinationLabel = (dest) =>
    dest === "fullCircuit" || dest === "otherDestination" ? t(`contactPage.${dest}`) : dest;

  const errorText = (name) => (errors[name] ? t(`contactPage.errors.${errors[name]}`) : undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    if (submitAttempted || errors[name]) setErrors(validate(next));
  };

  // Validation douce de l'email dès qu'on quitte le champ
  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === "email" && formData.email) {
      const fieldErrors = validate(formData);
      setErrors((prev) => ({ ...prev, email: fieldErrors.email }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const newErrors = validate(formData);
    setErrors(newErrors);

    const firstError = fieldOrder.find((name) => newErrors[name]);
    if (firstError) {
      document.getElementsByName(firstError)[0]?.focus();
      return;
    }

    // TODO : brancher l'envoi réel du formulaire (EmailJS, Formspree, API...)
    console.log("Données du formulaire:", formData);
    setSubmitted(true);
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNewRequest = () => {
    setFormData(emptyForm);
    setErrors({});
    setSubmitAttempted(false);
    setSubmitted(false);
  };

  const field = (name, extra = {}) => ({
    name,
    fullWidth: true,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: Boolean(errors[name]),
    helperText: errorText(name),
    ...extra,
  });

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mb={4}>
            <TextTitle title={t("contactPage.title")} />
            <Typography sx={{ color: "text.secondary", mt: 1.5, maxWidth: 560 }}>
              {t("contactPage.subtitle")}
            </Typography>
          </Box>

          <Paper
            ref={cardRef}
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              scrollMarginTop: 24,
            }}
          >
            <Grid container>
              {/* Panneau d'information */}
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  color: "white",
                  background: `linear-gradient(160deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
                  p: { xs: 3, sm: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  // Cercles décoratifs
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    pointerEvents: "none",
                  },
                  "&::before": { width: 220, height: 220, bottom: -80, right: -80 },
                  "&::after": { width: 120, height: 120, bottom: 70, right: 60 },
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {t("contactPage.contactUs")}
                  </Typography>
                  <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {t("contactPage.infoText")}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: 1,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.18)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  <AccessTime fontSize="small" />
                  {t("contactPage.responseTime")}
                </Box>

                <Box display="flex" flexDirection="column" gap={2.5}>
                  <InfoRow
                    icon={<Email />}
                    label={t("contactPage.emailLabel")}
                    value={CONTACT.email}
                    href={CONTACT.emailHref}
                  />
                  <InfoRow
                    icon={<Phone />}
                    label={t("contactPage.phoneLabel")}
                    value={CONTACT.phoneDisplay}
                    href={CONTACT.phoneHref}
                  />
                  <InfoRow
                    icon={<LocationOn />}
                    label={t("contactPage.addressLabel")}
                    value={CONTACT.address}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mt: "auto", pt: 2, fontStyle: "italic", opacity: 0.9, position: "relative" }}
                >
                  {t("contactPage.tagline")}
                </Typography>
              </Grid>

              {/* Formulaire */}
              <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                {submitted ? (
                  <Box
                    role="status"
                    sx={{
                      minHeight: 420,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      gap: 2,
                    }}
                  >
                    <CheckCircleOutline sx={{ fontSize: 72, color: BRAND }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#2c3e50" }}>
                      {t("contactPage.successTitle")}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", maxWidth: 440 }}>
                      {t("contactPage.success")}
                    </Typography>
                    <Button variant="outlined" onClick={handleNewRequest} sx={{ mt: 1, borderRadius: 3 }}>
                      {t("contactPage.newRequest")}
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#2c3e50", mb: 4 }}>
                      {t("contactPage.formTitle")}
                    </Typography>

                    {/* 1. Coordonnées */}
                    <SectionTitle number={1}>{t("contactPage.personalInfo")}</SectionTitle>
                    <Grid container spacing={2} mb={4}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("nom", { required: true, autoComplete: "family-name" })}
                          label={t("contactPage.lastName")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("prenom", { required: true, autoComplete: "given-name" })}
                          label={t("contactPage.firstName")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("email", { required: true, type: "email", autoComplete: "email" })}
                          label={t("contactPage.email")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("telephone", {
                            type: "tel",
                            autoComplete: "tel",
                            helperText: t("contactPage.phoneHelper"),
                          })}
                          label={t("contactPage.phone")}
                        />
                      </Grid>
                    </Grid>

                    {/* 2. Voyage */}
                    <SectionTitle number={2}>{t("contactPage.tripDetails")}</SectionTitle>
                    <Grid container spacing={2} mb={4}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField {...field("typeVoyage", { select: true })} label={t("contactPage.tripType")}>
                          {typesVoyage.map((type) => (
                            <MenuItem key={type} value={type}>
                              {t(`contactPage.tripTypes.${type}`)}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("destination", { select: true })}
                          label={t("contactPage.mainDestination")}
                        >
                          {destinations.map((dest) => (
                            <MenuItem key={dest} value={dest}>
                              {destinationLabel(dest)}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("nombrePersonnes", {
                            type: "number",
                            slotProps: { htmlInput: { min: 1, max: 50 } },
                          })}
                          label={t("contactPage.people")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField {...field("budget", { select: true })} label={t("contactPage.budget")}>
                          {budgetOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {t(`contactPage.budgetOptions.${option}`)}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("dateDepart", {
                            type: "date",
                            slotProps: { inputLabel: { shrink: true }, htmlInput: { min: today() } },
                          })}
                          label={t("contactPage.departureDate")}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          {...field("dateRetour", {
                            type: "date",
                            slotProps: {
                              inputLabel: { shrink: true },
                              htmlInput: { min: formData.dateDepart || today() },
                            },
                          })}
                          label={t("contactPage.returnDate")}
                        />
                      </Grid>
                    </Grid>

                    {/* 3. Message */}
                    <SectionTitle number={3}>{t("contactPage.specificRequests")}</SectionTitle>
                    <TextField
                      {...field("message", { multiline: true, minRows: 4 })}
                      label={t("contactPage.messageLabel")}
                      placeholder={t("contactPage.messagePlaceholder")}
                    />

                    {/* Envoi */}
                    <Box
                      sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row" },
                        alignItems: { xs: "stretch", sm: "center" },
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", textAlign: { xs: "center", sm: "left" } }}
                      >
                        {t("contactPage.requiredNote")}
                      </Typography>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 600,
                          boxShadow: "0 6px 20px rgba(99,171,69,0.3)",
                          flexShrink: 0,
                        }}
                      >
                        {t("contactPage.submit")}
                      </Button>
                    </Box>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Container>
    </Box>
  );
};

export default Contact;

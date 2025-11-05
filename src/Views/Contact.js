import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Alert,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  TravelExplore,
  AccessTime,
  People,
  CalendarToday,
} from "@mui/icons-material";
import TextTitle from "../Components/TextTitle";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
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
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Données du formulaire:", formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    // Reset du formulaire
    setFormData({
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
    });
  };

  const typesVoyage = [
    "Découverte culturelle",
    "Safari et nature",
    "Plages et détente",
    "Aventure et randonnée",
    "Voyage de noces",
    "Voyage en famille",
    "Voyage d'affaires",
  ];

  const destinations = [
    "Antananarivo",
    "Nosy Be",
    "Andasibe-Mantadia",
    "Morondava (Allée des Baobabs)",
    "Isalo",
    "Anakao",
    "Sainte-Marie",
    "Diego Suarez",
    "Circuit complet",
    "Autre",
  ];

  return (
    <Box
      display="flex"
      padding="20px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <TextTitle title="Contact" />

      {showSuccess && (
        <Alert
          severity="success"
          sx={{
            mb: 3,
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "#63AB45",
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          Votre demande de devis a été envoyée avec succès ! Nous vous
          répondrons dans les plus brefs délais.
        </Alert>
      )}

      <Grid
        container
        spacing={4}
        sx={{ mt: 2 }}
        display={"flex"}
        flexGrow={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Formulaire de devis */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              backgroundColor: "white",
              borderTop: "4px solid #63AB45",
            }}
          >
            <Box display="flex" alignItems="center" mb={4}>
              <TravelExplore
                sx={{ color: "#63AB45", mr: 2, fontSize: "2rem" }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#63AB45",
                  fontWeight: "bold",
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                Demande de devis personnalisé
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={4} >
                {/* COLONNE GAUCHE - Informations personnelles */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      p: 3,
                      height: "fit-content",
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: "2px solid #63AB45",
                        pb: 1,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#63AB45",
                          fontWeight: "bold",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                      >
                        📋 Informations personnelles
                      </Typography>
                    </Box>

                    <Grid container spacing={2} display={'flex'} flexDirection={'column'}>
                      {/* Nom */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Nom *"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>

                      {/* Prénom */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Prénom *"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>

                      {/* Email */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>

                      {/* Téléphone */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Téléphone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* COLONNE DROITE - Détails du voyage */}
                <Grid item xs={12} md={6}  >
                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      p: 3,
                      height: "fit-content",
                      display : 'flex',
                      flexDirection : 'column'
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: "2px solid #63AB45",
                        pb: 1,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#63AB45",
                          fontWeight: "bold",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                      >
                        ✈️ Détails de votre voyage
                      </Typography>
                    </Box>

                    <Grid container spacing={2}  display={'flex'} flexDirection={'column'}>
                      {/* Type de voyage */}
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel
                            sx={{
                              "&.Mui-focused": {
                                color: "#63AB45",
                              },
                            }}
                          >
                            Type de voyage
                          </InputLabel>
                          <Select
                            name="typeVoyage"
                            value={formData.typeVoyage}
                            onChange={handleChange}
                            label="Type de voyage"
                            sx={{
                              backgroundColor: "white",
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#63AB45",
                                },
                            }}
                          >
                            {typesVoyage.map((type) => (
                              <MenuItem key={type} value={type}>
                                {type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Destination */}
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel
                            sx={{
                              "&.Mui-focused": {
                                color: "#63AB45",
                              },
                            }}
                          >
                            Destination principale
                          </InputLabel>
                          <Select
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            label="Destination principale"
                            sx={{
                              backgroundColor: "white",
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#63AB45",
                                },
                            }}
                          >
                            {destinations.map((dest) => (
                              <MenuItem key={dest} value={dest}>
                                {dest}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Nombre de personnes */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Nombre de personnes"
                          name="nombrePersonnes"
                          type="number"
                          value={formData.nombrePersonnes}
                          onChange={handleChange}
                          InputProps={{ inputProps: { min: 1 } }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>

                      {/* Budget */}
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel
                            sx={{
                              "&.Mui-focused": {
                                color: "#63AB45",
                              },
                            }}
                          >
                            Budget approximatif (en €)
                          </InputLabel>
                          <Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            label="Budget approximatif (en €)"
                            sx={{
                              backgroundColor: "white",
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#63AB45",
                                },
                            }}
                          >
                            <MenuItem value="moins-1000">
                              Moins de 1000€
                            </MenuItem>
                            <MenuItem value="1000-2000">1000€ - 2000€</MenuItem>
                            <MenuItem value="2000-3000">2000€ - 3000€</MenuItem>
                            <MenuItem value="3000-4000">3000€ - 4000€</MenuItem>
                            <MenuItem value="plus-4000">Plus de 4000€</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* SECTION DATES - Sur toute la largeur */}
                <Grid item xs={12} >
                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: "2px solid #63AB45",
                        pb: 1,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#63AB45",
                          fontWeight: "bold",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                      >
                        📅 Dates de voyage
                      </Typography>
                    </Box>

                    <Grid container spacing={3} display={'flex'} flexDirection={'column'}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Date de départ"
                          name="dateDepart"
                          type="date"
                          value={formData.dateDepart}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Date de retour"
                          name="dateRetour"
                          type="date"
                          value={formData.dateRetour}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "white",
                              "&.Mui-focused fieldset": {
                                borderColor: "#63AB45",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#63AB45",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* MESSAGE - Sur toute la largeur */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: "2px solid #63AB45",
                        pb: 1,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#63AB45",
                          fontWeight: "bold",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                      >
                        💭 Vos demandes spécifiques
                      </Typography>
                    </Box>

                    <TextField
                      fullWidth
                      label="Message / Demandes spécifiques"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      placeholder="Décrivez-nous vos envies, vos centres d'intérêt, ou toute demande particulière pour votre voyage à Madagascar..."
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          "&.Mui-focused fieldset": {
                            borderColor: "#63AB45",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#63AB45",
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* BOUTON D'ENVOI - Centré en bas */}
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    sx={{ mt: 4 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        backgroundColor: "#63AB45",
                        color: "white",
                        fontWeight: "bold",
                        py: 2,
                        px: 6,
                        fontSize: "1.1rem",
                        borderRadius: 3,
                        minWidth: "300px",
                        "&:hover": {
                          backgroundColor: "#4a8533",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(99, 171, 69, 0.3)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      Demander un devis
                    </Button>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="center"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      * Champs obligatoires - Nous vous répondrons sous 24h
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        {/* Informations de contact */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "fit-content",
              backgroundColor: "white",
              borderTop: "4px solid #63AB45",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#63AB45",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Contactez-nous
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Email sx={{ color: "#63AB45", mr: 2 }} />
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Email
                </Typography>
                <Typography variant="body1">
                  contact@madagascar-voyage.mg
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <Phone sx={{ color: "#63AB45", mr: 2 }} />
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Téléphone
                </Typography>
                <Typography variant="body1">+261 20 22 123 45</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn sx={{ color: "#63AB45", mr: 2 }} />
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Adresse
                </Typography>
                <Typography variant="body1">
                  Avenue de l'Indépendance
                  <br />
                  Antananarivo 101, Madagascar
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTime sx={{ color: "#63AB45", mr: 2 }} />
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Horaires
                </Typography>
                <Typography variant="body1">
                  Lun - Ven : 8h00 - 17h00
                  <br />
                  Sam : 8h00 - 12h00
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontStyle: "italic" }}
            >
              🌴 Découvrez la magie de Madagascar avec nos experts locaux ! Des
              circuits sur mesure pour une expérience inoubliable.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import NavBar from "../Components/TourNavBar";
import TextTitle from "../Components/TextTitle";
import { useTranslation } from 'react-i18next';
import CardTourPackage from "../Components/CardTourPackage";
import CardTransport from "../Components/CardTransport";


const Tours = () => {


  // traduction 
    const { t } = useTranslation();
  
  // onglets: 0-tour, 1-hotel, 2-transport
  const [tab, setTab] = useState(0);
  // Fonction pour rendre le contenu en fonction de l'onglet sélectionné
  // Données d'exemple pour les tours
  const tourPackages = [
    {
      id: 1,
      DestinationImage: "/images/tulear.jpg",
      DestinationName: "Tulear",
      Location: "Sud-Ouest de Madagascar",
      Description: "Découvrez les merveilles du sud malgache avec ses plages paradisiaques, ses baobabs majestueux et sa culture unique. Un voyage inoubliable à travers des paysages époustouflants.",
      Itinerary: ["Antananarivo", "Antsirabe", "Fianarantsoa", "Tulear"],
      currentColor: "#ff6b35"
    },
    {
      id: 2,
      DestinationImage: "/images/nosy-be.jpg",
      DestinationName: "Nosy Be",
      Location: "Nord-Ouest de Madagascar",
      Description: "L'île aux parfums vous attend avec ses plages de sable blanc, ses eaux turquoise et ses couchers de soleil magiques. Un paradis tropical authentique.",
      Itinerary: ["Antananarivo", "Mahajanga", "Nosy Be"],
      currentColor: "#4ecdc4"
    },
    {
      id: 3,
      DestinationImage: "/images/andasibe.jpg",
      DestinationName: "Andasibe-Mantadia",
      Location: "Est de Madagascar",
      Description: "Immergez-vous dans la forêt primaire et découvrez les lémuriens Indri dans leur habitat naturel. Une expérience unique au cœur de la biodiversité malgache.",
      Itinerary: ["Antananarivo", "Andasibe-Mantadia"],
      currentColor: "#45b7d1"
    }
  ];

  // Données d'exemple pour les transports
  const transportVehicles = [
    {
      id: 1,
      VehicleImage: "/images/toyota-hiace.jpg",
      Brand: "Toyota",
      Model: "Hiace",
      Seats: 12,
      DailyPrice: 180000,
      FuelType: "Diesel",
      Transmission: "Manuelle",
      currentColor: "#ff6b35"
    },
    {
      id: 2,
      VehicleImage: "/images/nissan-navara.jpg",
      Brand: "Nissan",
      Model: "Navara",
      Seats: 5,
      DailyPrice: 120000,
      FuelType: "Diesel",
      Transmission: "Automatique",
      currentColor: "#4ecdc4"
    },
    {
      id: 3,
      VehicleImage: "/images/toyota-landcruiser.jpg",
      Brand: "Toyota",
      Model: "Land Cruiser",
      Seats: 7,
      DailyPrice: 200000,
      FuelType: "Essence",
      Transmission: "Automatique",
      currentColor: "#45b7d1"
    },
    {
      id: 4,
      VehicleImage: "/images/isuzu-dmax.jpg",
      Brand: "Isuzu",
      Model: "D-Max",
      Seats: 5,
      DailyPrice: 110000,
      FuelType: "Diesel",
      Transmission: "Manuelle",
      currentColor: "#f39c12"
    }
  ];

   const handleQuoteRequest = (tourId) => {
    // Logique pour gérer la demande de devis
    console.log(`Demande de devis pour le tour ${tourId}`);
    // Vous pouvez ouvrir un modal, rediriger vers un formulaire, etc.
  };

   const handleBooking = (vehicleId) => {
    // Logique pour gérer la réservation
    console.log(`Réservation pour le véhicule ${vehicleId}`);
    // Vous pouvez ouvrir un modal, rediriger vers un formulaire, etc.
  };


 
const renderTabContent = () => {
    switch (tab) {
      case 0: // Tour Package
        return (
          <Box padding="2rem 0">
            <Typography 
              variant="h4" 
              textAlign="center" 
              gutterBottom
              sx={{ marginBottom: "3rem", fontWeight: 600 }}
            >
              🌍 Nos Forfaits Tour
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {tourPackages.map((tour) => (
                <Grid item xs={12} sm={6} lg={4} key={tour.id}>
                  <CardTourPackage
                    DestinationImage={tour.DestinationImage}
                    DestinationName={tour.DestinationName}
                    Location={tour.Location}
                    Description={tour.Description}
                    Itinerary={tour.Itinerary}
                    OnQuoteRequest={() => handleQuoteRequest(tour.id)}
                    currentColor={tour.currentColor}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box textAlign="center" padding="2rem">
            <Typography variant="h4" color="primary" gutterBottom>
              🏨 Hotel
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Profitez de nos hôtels de luxe avec des services premium et un confort incomparable.
            </Typography>
          </Box>
        );
     case 2: // Transport
        return (
          <Box padding="2rem 0">
            <Typography 
              variant="h4" 
              textAlign="center" 
              gutterBottom
              sx={{ marginBottom: "3rem", fontWeight: 600 }}
            >
              🚌 Location de Véhicules
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {transportVehicles.map((vehicle) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={vehicle.id}>
                  <CardTransport
                    VehicleImage={vehicle.VehicleImage}
                    Brand={vehicle.Brand}
                    Model={vehicle.Model}
                    Seats={vehicle.Seats}
                    DailyPrice={vehicle.DailyPrice}
                    FuelType={vehicle.FuelType}
                    Transmission={vehicle.Transmission}
                    OnBooking={() => handleBooking(vehicle.id)}
                    currentColor={vehicle.currentColor}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      display={"flex"}
      flexGrow={1}
      flexDirection={"column"}
      padding={"40px 20px"}
      gap={"1.5rem"}
    >
      <Box display="flex" alignItems={"center"} justifyContent={"center"}>
        <TextTitle title={t("aboutUs.title")} />
      </Box>
      <Typography alignContent={'center'} alignItems={'center'} textAlign={'center'} variant="h3">Ultimate Travel Experience</Typography>

      <NavBar tab={tab} setTab={setTab} />
      {/* Contenu dynamique basé sur l'onglet sélectionné */}
      {renderTabContent()}
      
    </Box>
  );
};

export default Tours;

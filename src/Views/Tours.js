import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import NavBar from "../Components/TourNavBar";
import TextTitle from "../Components/TextTitle";
import { useTranslation } from 'react-i18next';
import CardTourPackage from "../Components/CardTourPackage";
import CardTransport from "../Components/CardTransport";
import TourDetailsModal from "../Components/ToursDetailModal";

//photos
import Baobab from "../Assets/Images/Baobab.jpg"
import NosyBe from "../Assets/Images/nosyBe.jpg"
import Foret from "../Assets/Images/Foret.jpg"

//icones
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Tours = () => {
  // traduction 
  const { t } = useTranslation();
  
  // onglets: 0-tour, 1-hotel, 2-transport
  const [tab, setTab] = useState(0);
  
  // État pour la modal des détails
  const [openModal, setOpenModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  // Données d'exemple pour les tours avec détails complets
  const tourPackages = [
    {
      id: 1,
      DestinationImage: Baobab,
      DestinationName: "Morondava",
      Location: "Madagascar Tour Sud-Ouest",
      Description: "Découvrez les merveilles du sud malgache avec ses plages paradisiaques, ses baobabs majestueux et sa culture unique.",
      Itinerary: ["Antananarivo", "Andasibe", "Ampefy", "Antsirabe", "Miandrivazo", "Morondava"],
      currentColor: "#ff6b35",
      // Détails supplémentaires pour la modal
      detailedDescription: "Plongez dans une aventure extraordinaire à travers les paysages époustouflants du sud-ouest de Madagascar. Ce voyage vous mènera des hauts plateaux de la capitale aux célèbres baobabs de Morondava, en passant par les sources thermales d'Antsirabe et les formations géologiques uniques de Miandrivazo. Vous découvrirez la richesse culturelle malgache, observerez une faune endémique exceptionnelle et assisterez aux plus beaux couchers de soleil de l'océan Indien.",
      duration: "8 jours / 7 nuits",
      difficulty: "Facile",
      priceRange: "€1,200 - €1,800",
      bestTime: "Avril - Novembre",
      highlights: [
        "Allée des Baobabs au coucher du soleil",
        "Rencontre avec les lémuriens d'Andasibe",
        "Sources thermales naturelles d'Antsirabe",
        "Navigation sur la rivière Tsiribihina",
        "Découverte de la culture Sakalava",
        "Plages vierges de la côte ouest"
      ],
      included: [
        "Transport en 4x4 avec chauffeur-guide",
        "Hébergement en hôtels 3 étoiles",
        "Tous les petits-déjeuners",
        "Droits d'entrée aux parcs nationaux",
        "Guide francophone local",
        "Activités mentionnées au programme"
      ],
      notIncluded: [
        "Vols internationaux",
        "Déjeuners et dîners (sauf mention contraire)",
        "Boissons",
        "Pourboires",
        "Assurance voyage",
        "Dépenses personnelles"
      ]
    },
    {
      id: 2,
      DestinationImage: NosyBe,
      DestinationName: "Nosy Be",
      Location: "Nord-Ouest de Madagascar",
      Description: "L'île aux parfums vous attend avec ses plages de sable blanc, ses eaux turquoise et ses couchers de soleil magiques. Un paradis tropical authentique.",
      Itinerary: ["Antananarivo", "Mahajanga", "Nosy Be"],
      currentColor: "#45b7d1",
      detailedDescription: "Évadez-vous sur l'île aux parfums, véritable joyau de l'océan Indien. Nosy Be vous séduira par ses plantations d'ylang-ylang, ses plages de rêve et sa biodiversité marine exceptionnelle. Entre farniente sur des plages paradisiaques, plongée dans des eaux cristallines et exploration des îlots environnants, ce séjour promet une expérience tropicale inoubliable dans un cadre préservé.",
      duration: "6 jours / 5 nuits",
      difficulty: "Très facile",
      priceRange: "€900 - €1,400",
      bestTime: "Avril - Décembre",
      highlights: [
        "Plages de sable blanc immaculé",
        "Snorkeling dans le lagon turquoise",
        "Excursion à Nosy Komba (île aux lémuriens)",
        "Visite des distilleries d'ylang-ylang",
        "Couchers de soleil spectaculaires",
        "Dégustation de rhum arrangé local"
      ],
      included: [
        "Vols domestiques Tana-Nosy Be",
        "Transferts aéroport-hôtel",
        "Hébergement en bungalows face à la mer",
        "Petit-déjeuner quotidien",
        "Excursion en bateau aux îlots",
        "Equipment de snorkeling"
      ],
      notIncluded: [
        "Vols internationaux",
        "Repas principaux",
        "Activités de plongée sous-marine",
        "Location de scooter",
        "Spa et massages",
        "Achats personnels"
      ]
    },
    {
      id: 3,
      DestinationImage: Foret,
      DestinationName: "Andasibe-Mantadia",
      Location: "Est de Madagascar",
      Description: "Immergez-vous dans la forêt primaire et découvrez les lémuriens Indri dans leur habitat naturel. Une expérience unique au cœur de la biodiversité malgache.",
      Itinerary: ["Antananarivo", "Andasibe-Mantadia"],
      currentColor: "green",
      detailedDescription: "Partez à la découverte de l'un des plus beaux parcs nationaux de Madagascar, véritable sanctuaire de la biodiversité. La forêt primaire d'Andasibe-Mantadia abrite le plus grand lémurien de l'île, l'Indri indri, dont le chant mélodieux résonne dans la forêt. Cette expérience immersive vous permettra d'observer de nombreuses espèces endémiques dans leur habitat naturel préservé, tout en profitant de paysages montagneux à couper le souffle.",
      duration: "3 jours / 2 nuits",
      difficulty: "Modérée",
      priceRange: "€450 - €650",
      bestTime: "Mars - Novembre",
      highlights: [
        "Observation des lémuriens Indri indri",
        "Trek dans la forêt primaire",
        "Découverte de 11 espèces de lémuriens",
        "Observation de 108 espèces d'oiseaux",
        "Plantes médicinales et orchidées rares",
        "Paysages montagneux spectaculaires"
      ],
      included: [
        "Transport aller-retour depuis Antananarivo",
        "Hébergement en lodge écologique",
        "Guide naturaliste spécialisé",
        "Entrées aux parcs nationaux",
        "Treks et randonnées guidées",
        "Tous les repas"
      ],
      notIncluded: [
        "Hébergement à Antananarivo",
        "Boissons alcoolisées",
        "Equipment de randonnée personnel",
        "Pourboires aux guides",
        "Photos avec les lémuriens",
        "Souvenirs et artisanat local"
      ]
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

  // Handlers pour les événements
  const handleQuoteRequest = (tourId) => {
    // Logique pour gérer la demande de devis
    console.log(`Demande de devis pour le tour ${tourId}`);
    // Vous pouvez ouvrir un modal, rediriger vers un formulaire, etc.
  };

  const handleViewDetails = (tourId) => {
    // Trouver le tour sélectionné
    const tour = tourPackages.find(t => t.id === tourId);
    setSelectedTour(tour);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTour(null);
  };

  const handleBooking = (vehicleId) => {
    // Logique pour gérer la réservation
    console.log(`Réservation pour le véhicule ${vehicleId}`);
    // Vous pouvez ouvrir un modal, rediriger vers un formulaire, etc.
  };

  // Fonction pour rendre le contenu en fonction de l'onglet sélectionné
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
                    OnViewDetails={() => handleViewDetails(tour.id)}
                    currentColor={tour.currentColor}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 1: // Hotel
        return (
          <Box textAlign="center" padding="2rem">
            <Typography variant="h4" gutterBottom>
              🏨 Hôtels
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Profitez de nos hôtels de luxe avec des services premium et un confort incomparable.
            </Typography>
            {/* Vous pouvez ajouter ici le contenu des hôtels */}
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
      <Typography 
        alignContent={'center'} 
        alignItems={'center'} 
        textAlign={'center'} 
        variant="h3"
      >
        Ultimate Travel Experience
      </Typography>

      <NavBar tab={tab} setTab={setTab} />
      
      {/* Contenu dynamique basé sur l'onglet sélectionné */}
      {renderTabContent()}

      {/* Modal pour les détails du tour */}
      <TourDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        tourDetails={selectedTour}
        currentColor={selectedTour?.currentColor}
      />
    </Box>
  );
};

export default Tours;
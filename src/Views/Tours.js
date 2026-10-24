import { useState } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import PageHero from "../Components/PageHero";
import FilterPills from "../Components/FilterPills";
import SectionHeader from "../Components/SectionHeader";
import CtaBanner from "../Components/CtaBanner";
import CardTourPackage from "../Components/CardTourPackage";
import CardTransport from "../Components/CardTransport";
import TourDetailsModal from "../Components/ToursDetailModal";
import HotelSearch from "../Components/HotelSearch";
import { buildTourPackages } from "../Data/tours";
//photos
import NosyBe from "../Assets/Images/nosyBe.jpg"
//icones
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

const tabs = [
  { key: "packages", Icon: PublicOutlinedIcon },
  { key: "hotel", Icon: BedOutlinedIcon },
  { key: "transport", Icon: DirectionsCarFilledOutlinedIcon },
];


const Tours = () => {
  // traduction 
  const { t } = useTranslation();
  const navigate = useNavigate();

  // onglet actif : "packages", "hotel" ou "transport"
  const [tab, setTab] = useState("packages");
  
  // État pour la modal des détails
  const [openModal, setOpenModal] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);

  const tourPackages = buildTourPackages(t);

  // Données d'exemple pour les transports
  const transportVehicles = [
    {
      id: 1,
      VehicleImage: "/images/toyota-hiace.jpg",
      Brand: "Toyota",
      Model: "Hiace",
      Seats: 12,
      DailyPrice: 180000,
      FuelType: "diesel",
      Transmission: "manual",
      currentColor: "#ff6b35"
    },
    {
      id: 2,
      VehicleImage: "/images/nissan-navara.jpg",
      Brand: "Nissan",
      Model: "Navara",
      Seats: 5,
      DailyPrice: 120000,
      FuelType: "diesel",
      Transmission: "automatic",
      currentColor: "#4ecdc4"
    },
    {
      id: 3,
      VehicleImage: "/images/toyota-landcruiser.jpg",
      Brand: "Toyota",
      Model: "Land Cruiser",
      Seats: 7,
      DailyPrice: 200000,
      FuelType: "petrol",
      Transmission: "automatic",
      currentColor: "#45b7d1"
    },
    {
      id: 4,
      VehicleImage: "/images/isuzu-dmax.jpg",
      Brand: "Isuzu",
      Model: "D-Max",
      Seats: 5,
      DailyPrice: 110000,
      FuelType: "diesel",
      Transmission: "manual",
      currentColor: "#f39c12"
    }
  ];

  // Demande de devis / réservation : redirige vers le formulaire de contact
  const goToContact = () => navigate("/contact");

  const handleViewDetails = (tourId) => {
    setSelectedTourId(tourId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTourId(null);
  };

  // Recalculé à chaque rendu pour que la modale suive le changement de langue
  const selectedTour = tourPackages.find((tour) => tour.id === selectedTourId) || null;

  const renderTabContent = () => {
    switch (tab) {
      case "packages":
        return (
          <>
            <SectionHeader title={t("Tours.packagesTitle")} subtitle={t("Tours.packagesSubtitle")} />
            <Grid container spacing={3}>
              {tourPackages.map((tour) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                  <CardTourPackage
                    DestinationImage={tour.DestinationImage}
                    DestinationName={tour.DestinationName}
                    Location={tour.Location}
                    Description={tour.Description}
                    Itinerary={tour.Itinerary}
                    duration={tour.duration}
                    priceRange={tour.priceRange}
                    OnQuoteRequest={goToContact}
                    OnViewDetails={() => handleViewDetails(tour.id)}
                    currentColor={tour.currentColor}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        );
      case "hotel":
        return (
          <>
            <SectionHeader title={t("Tours.hotelTitle")} subtitle={t("Tours.hotelSubtitle")} />
            <Paper
              elevation={0}
              sx={{ borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.06)", p: { xs: 2, sm: 4 } }}
            >
              <HotelSearch />
            </Paper>
          </>
        );
      case "transport":
        return (
          <>
            <SectionHeader title={t("Tours.vehiclesTitle")} subtitle={t("Tours.vehiclesSubtitle")} />
            <Grid container spacing={3}>
              {transportVehicles.map((vehicle) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={vehicle.id}>
                  <CardTransport
                    VehicleImage={vehicle.VehicleImage}
                    Brand={vehicle.Brand}
                    Model={vehicle.Model}
                    Seats={vehicle.Seats}
                    DailyPrice={vehicle.DailyPrice}
                    FuelType={vehicle.FuelType}
                    Transmission={vehicle.Transmission}
                    OnBooking={goToContact}
                    currentColor={vehicle.currentColor}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: { xs: 6, md: 10 } }}>
      <PageHero
        overline={t("Tours.title")}
        title={t("Tours.subtitle")}
        intro={t("Tours.intro")}
        image={NosyBe}
        imagePosition="center 55%"
        overlap={false}
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <FilterPills
            ariaLabel={t("Tours.title")}
            value={tab}
            onChange={setTab}
            items={tabs.map(({ key, Icon }) => ({ key, Icon, label: t(`Tours.tabs.${key}`) }))}
          />
        </Box>

        {renderTabContent()}

        <CtaBanner
          sx={{ mt: { xs: 6, md: 8 } }}
          title={t("Tours.cta.title")}
          text={t("Tours.cta.text")}
          primary={{ label: t("common.requestQuote"), onClick: goToContact }}
          secondary={{ label: t("Tours.cta.destinations"), onClick: () => navigate("/destinations") }}
        />
      </Container>

      <TourDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        onQuoteRequest={goToContact}
        tourDetails={selectedTour}
      />
    </Box>
  );
};

export default Tours;

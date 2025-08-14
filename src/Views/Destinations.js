import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Container,
  Tab,
  Tabs,
  Paper,
  keyframes
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ParkIcon from '@mui/icons-material/Park';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import MuseumIcon from '@mui/icons-material/Museum';
import TextTitle from '../Components/TextTitle';
import { useTranslation } from 'react-i18next';

const Destinations = () => {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState(0);

  const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const destinations = {
    hauts_plateaux: [
      {
        id: 1,
        name: "Antananarivo",
        subtitle: "La Capitale",
        image: "/images/destinations/antananarivo.jpg",
        description: "Capitale historique perchée sur ses collines. Découvrez le Palais de la Reine, les marchés colorés et l'architecture coloniale unique.",
        activities: ["Palais de la Reine", "Marché d'Analakely", "Lac Anosy", "Musées historiques"],
        category: "Culturel",
        color: "#e74c3c",
        region: "Hauts Plateaux"
      },
      {
        id: 2,
        name: "Antsirabe",
        subtitle: "La Ville d'Eau",
        image: "/images/destinations/antsirabe.jpg",
        description: "Station thermale coloniale réputée pour ses eaux minérales et son climat tempéré. Ville des pousse-pousse et de l'artisanat.",
        activities: ["Sources thermales", "Lac Tritriva", "Atelier miniature", "Pousse-pousse tour"],
        category: "Thermal",
        color: "#3498db",
        region: "Hauts Plateaux"
      },
      {
        id: 3,
        name: "Ampefy",
        subtitle: "Le Lac Volcanique",
        image: "/images/destinations/ampefy.jpg",
        description: "Magnifique lac volcanique entouré de collines verdoyantes. Destination parfaite pour la détente et les activités nautiques.",
        activities: ["Lac Itasy", "Geysers", "Îlot de la Vierge", "Sports nautiques"],
        category: "Nature",
        color: "#27ae60",
        region: "Hauts Plateaux"
      },
      {
        id: 4,
        name: "Fianarantsoa",
        subtitle: "Ville de l'Education",
        image: "/images/destinations/fianarantsoa.jpg",
        description: "Capitale intellectuelle de Madagascar avec sa vieille ville historique et ses vignobles environnants.",
        activities: ["Vieille ville", "Vignobles", "Train FCE", "Cathédrale"],
        category: "Culturel",
        color: "#8e44ad",
        region: "Hauts Plateaux"
      }
    ],
    ouest: [
      {
        id: 5,
        name: "Morondava",
        subtitle: "Avenue des Baobabs",
        image: "/images/destinations/morondava.jpg",
        description: "Porte d'entrée vers l'Avenue des Baobabs. Couchers de soleil inoubliables sur les baobabs centenaires et accès aux Tsingy.",
        activities: ["Avenue des Baobabs", "Coucher de soleil", "Plages", "Tsingy de Bemaraha"],
        category: "Nature",
        color: "#f39c12",
        region: "Ouest"
      },
      {
        id: 6,
        name: "Tsingy de Bemaraha",
        subtitle: "Forêt de Pierres",
        image: "/images/destinations/tsingy.jpg",
        description: "Formations calcaires spectaculaires classées UNESCO. Labyrinthe de pics rocheux abritant une faune unique et exceptionnelle.",
        activities: ["Randonnées sur les Tsingy", "Via ferrata", "Grottes", "Observation d'oiseaux"],
        category: "Aventure",
        color: "#95a5a6",
        region: "Ouest"
      },
      {
        id: 7,
        name: "Bekopaka",
        subtitle: "Base des Tsingy",
        image: "/images/destinations/bekopaka.jpg",
        description: "Village authentique servant de base pour explorer les Tsingy. Rencontres avec les communautés locales Sakalava.",
        activities: ["Village traditionnel", "Marché local", "Pirogue sur Manambolo", "Culture Sakalava"],
        category: "Culturel",
        color: "#34495e",
        region: "Ouest"
      },
      {
        id: 8,
        name: "Mahajanga",
        subtitle: "Ville Cosmopolite",
        image: "/images/destinations/mahajanga.jpg",
        description: "Port cosmopolite aux influences arabes et indiennes. Plages magnifiques et baobab sacré millénaire.",
        activities: ["Plages de sable", "Baobab sacré", "Marché couvert", "Cirque Rouge"],
        category: "Plage",
        color: "#e67e22",
        region: "Ouest"
      }
    ],
    est: [
      {
        id: 9,
        name: "Andasibe-Mantadia",
        subtitle: "Forêt des Lémuriens",
        image: "/images/destinations/andasibe.jpg",
        description: "Parc national abritant les lémuriens Indri. Forêt primaire humide avec une biodiversité exceptionnelle.",
        activities: ["Observation des Indri", "Randonnées en forêt", "Orchidées", "Oiseaux endémiques"],
        category: "Nature",
        color: "#27ae60",
        region: "Est"
      },
      {
        id: 10,
        name: "Sainte-Marie",
        subtitle: "Île aux Baleines",
        image: "/images/destinations/sainte-marie.jpg",
        description: "Île paradisiaque célèbre pour l'observation des baleines à bosse. Plages de sable blanc et histoire des pirates.",
        activities: ["Observation baleines", "Plongée", "Cimetière des pirates", "Île aux Nattes"],
        category: "Plage",
        color: "#3498db",
        region: "Est"
      },
      {
        id: 11,
        name: "Manakara",
        subtitle: "Bout du Rail FCE",
        image: "/images/destinations/manakara.jpg",
        description: "Terminus du fameux train FCE. Plages sauvages et canal des Pangalanes avec ses villages de pêcheurs.",
        activities: ["Train FCE", "Canal Pangalanes", "Plages sauvages", "Villages lacustres"],
        category: "Transport",
        color: "#16a085",
        region: "Est"
      },
      {
        id: 12,
        name: "Mananjary",
        subtitle: "Canal des Pangalanes",
        image: "/images/destinations/mananjary.jpg",
        description: "Ville paisible traversée par le canal des Pangalanes. Centre de production de vanille de madagascar et d'épices.",
        activities: ["Canal Pangalanes", "Plantations vanille", "Port traditionnel", "Villages lacustres"],
        category: "Nature",
        color: "#8e44ad",
        region: "Est"
      }
    ],
    nord: [
      {
        id: 13,
        name: "Nosy Be",
        subtitle: "Île aux Parfums",
        image: "/images/destinations/nosy-be.jpg",
        description: "Île tropicale paradisiaque réputée pour ses ylang-ylang et ses plages de sable blanc. Activités nautiques variées.",
        activities: ["Plages paradisiaques", "Plongée", "Ylang-ylang", "Mont Passot"],
        category: "Plage",
        color: "#e74c3c",
        region: "Nord"
      },
      {
        id: 14,
        name: "Diego Suarez",
        subtitle: "Antsiranana",
        image: "/images/destinations/diego-suarez.jpg",
        description: "Baie magnifique et porte d'entrée vers la Montagne d'Ambre. Architecture coloniale et nature préservée.",
        activities: ["Baie de Diego", "Montagne d'Ambre", "Mer d'Émeraude", "Pain de Sucre"],
        category: "Nature",
        color: "#2ecc71",
        region: "Nord"
      },
      {
        id: 15,
        name: "Montagne d'Ambre",
        subtitle: "Parc National",
        image: "/images/destinations/montagne-ambre.jpg",
        description: "Forêt humide de montagne avec cascades spectaculaires. Microclimat tropical unique au nord de Madagascar.",
        activities: ["Cascades sacrées", "Lémuriens couronnés", "Lac cratère", "Randonnées"],
        category: "Nature",
        color: "#27ae60",
        region: "Nord"
      }
    ],
    sud: [
      {
        id: 16,
        name: "Tuléar",
        subtitle: "Toliara",
        image: "/images/destinations/tulear.jpg",
        description: "Porte du grand sud malgache. Plusieurs plages de sable blanc et culture Vezo des pêcheurs-nomades.",
        activities: ["Plages de sable", "Culture Vezo", "Marché aux coquillages", "Reniala"],
        category: "Plage",
        color: "#f39c12",
        region: "Sud"
      },
      {
        id: 17,
        name: "Ifaty",
        subtitle: "Village de Pêcheurs",
        image: "/images/destinations/ifaty.jpg",
        description: "Village de pêcheurs Vezo avec récif corallien exceptionnel. Forêt d'épineux et baobabs du sud de madagascar.",
        activities: ["Plongée récif", "Forêt baobabs", "Village Vezo", "Pêche traditionnelle"],
        category: "Plage",
        color: "#e67e22",
        region: "Sud"
      },
      {
        id: 18,
        name: "Fort Dauphin",
        subtitle: "Tolagnaro",
        image: "/images/destinations/fort-dauphin.jpg",
        description: "Ville historique du sud-est avec plages magnifiques. Réserve de Berenty et observation des lémuriens catta.",
        activities: ["Plages tropicales", "Réserve Berenty", "Pic Saint-Louis", "Baie de Lokaro"],
        category: "Nature",
        color: "#9b59b6",
        region: "Sud"
      },
      {
        id: 19,
        name: "Isalo",
        subtitle: "Parc National",
        image: "/images/destinations/isalo.jpg",
        description: "Massif de grès sculptural avec canyons, oasis et piscines naturelles. Paysages spectaculaires du Far West malgache.",
        activities: ["Canyons", "Piscines naturelles", "Couchers de soleil", "Randonnées"],
        category: "Aventure",
        color: "#d35400",
        region: "Sud"
      }
    ]
  };

  const regions = [
    { name: "Hauts Plateaux", key: "hauts_plateaux", icon: "🏔️" },
    { name: "Côte Ouest", key: "ouest", icon: "🌅" },
    { name: "Côte Est", key: "est", icon: "🌊" },
    { name: "Nord", key: "nord", icon: "🏝️" },
    { name: "Sud", key: "sud", icon: "🌵" }
  ];

  const getActivityIcon = (activity) => {
    if (activity.toLowerCase().includes('plage') || activity.toLowerCase().includes('plongée')) return <BeachAccessIcon />;
    if (activity.toLowerCase().includes('parc') || activity.toLowerCase().includes('forêt')) return <ParkIcon />;
    if (activity.toLowerCase().includes('bateau') || activity.toLowerCase().includes('canal')) return <DirectionsBoatIcon />;
    if (activity.toLowerCase().includes('musée') || activity.toLowerCase().includes('palais')) return <MuseumIcon />;
    if (activity.toLowerCase().includes('randonnée') || activity.toLowerCase().includes('montagne')) return <HikingIcon />;
    return <CameraAltIcon />;
  };

  const getCurrentDestinations = () => {
    const regionKey = regions[selectedRegion].key;
    return destinations[regionKey] || [];
  };

  const handleTabChange = (event, newValue) => {
    setSelectedRegion(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <TextTitle title="Destinations Madagascar" />
        <Typography 
          variant="h3" 
          sx={{ 
            mt: 2, 
            mb: 2, 
            fontWeight: 600,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Découvrez la Grande Île
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="800px" mx="auto">
          Madagascar, continent miniature aux paysages époustouflants et à la biodiversité unique au monde.
          Explorez nos destinations incontournables à travers les différentes régions de l'île.
        </Typography>
      </Box>

      {/* Tabs des régions */}
      <Paper elevation={3} sx={{ mb: 4, borderRadius: '16px', overflow: 'hidden' }}>
        <Tabs
          value={selectedRegion}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            minHeight: '64px',
            '& .MuiTab-root': {
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              minHeight: '64px',
            }
          }}
        >
          {regions.map((region, index) => (
            <Tab
              key={region.key}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '20px' }}>{region.icon}</span>
                  {region.name}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      {/* Grille des destinations */}
      <Grid container spacing={1} flexGrow={1} bgcolor={"black"} display={'flex'} justifyContent={'space-between'}>
        {getCurrentDestinations().map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={destination.id} maxWidth={'600px'} >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s both`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={destination.image}
                alt={destination.name}
                sx={{
                  transition: 'transform 0.6s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              />
              
              {/* Badge catégorie */}
              <Chip
                label={destination.category}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: destination.color,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '12px',
                }}
              />

              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LocationOnIcon sx={{ color: destination.color, fontSize: '20px' }} />
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    {destination.region}
                  </Typography>
                </Box>

                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {destination.name}
                </Typography>
                
                <Typography variant="subtitle1" color={destination.color} fontWeight={600} gutterBottom>
                  {destination.subtitle}
                </Typography>

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2, 
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '4.5em' // Assure une hauteur minimale constante
                  }}
                >
                  {destination.description}
                </Typography>

                {/* Activités */}
                <Box sx={{ mt: 'auto' }}> {/* Push vers le bas */}
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Activités principales :
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, minHeight: '60px', alignItems: 'flex-start' }}>
                    {destination.activities.slice(0, 3).map((activity, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          backgroundColor: `${destination.color}15`,
                          color: destination.color,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 500,
                        }}
                      >
                        {getActivityIcon(activity)}
                        <span>{activity}</span>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: destination.color,
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '14px',
                      '&:hover': {
                        backgroundColor: destination.color,
                        transform: 'translateY(-1px)',
                        boxShadow: `0 8px 20px ${destination.color}40`,
                      }
                    }}
                  >
                    Explorer cette destination
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Section statistiques */}
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Madagascar en chiffres
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" fontWeight={700}>19</Typography>
            <Typography variant="body1">Destinations</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" fontWeight={700}>5</Typography>
            <Typography variant="body1">Régions</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" fontWeight={700}>50+</Typography>
            <Typography variant="body1">Parcs Nationaux</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" fontWeight={700}>90%</Typography>
            <Typography variant="body1">Espèces Endémiques</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Destinations;
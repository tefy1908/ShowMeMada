import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { motion } from "motion/react";
import { Box, keyframes, Chip, Stack } from "@mui/material";
import Tilt from "react-parallax-tilt";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteIcon from '@mui/icons-material/Route';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function CardTourPackage({
  DestinationImage,
  DestinationName,
  Location,
  Description,
  Itinerary, // Array des étapes: ['Antananarivo', 'Antsirabe', 'Fianarantsoa', 'Tulear']
  OnQuoteRequest,
  OnViewDetails, // Nouvelle prop pour voir les détails
  currentColor,
}) {
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

  const floatAnimation = keyframes`
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  `;

  // Formater l'itinéraire avec des flèches
  const formatItinerary = (itinerary) => {
    if (!itinerary || itinerary.length === 0) return '';
    return itinerary.join(' → ');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <Box
          display="flex"
          padding="24px"
          justifyContent="center"
          alignItems="center"
          bgcolor="transparent"
          borderRadius="24px"
          sx={{
            animation: `${fadeInUp} 0.8s ease-out`,
            '&:hover': {
              animation: `${floatAnimation} 2s ease-in-out infinite`,
            }
          }}
        >
          <Card 
            sx={{ 
              maxWidth: 400,
              backgroundColor: "background.paper",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              // Box Shadow principale - très élégante
              boxShadow: `
                0 20px 40px rgba(0, 0, 0, 0.1),
                0 15px 25px rgba(0, 0, 0, 0.08),
                0 5px 10px rgba(0, 0, 0, 0.05)
              `,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              '&:hover': {
                // Box Shadow au hover - plus prononcée
                boxShadow: `
                  0 30px 60px rgba(0, 0, 0, 0.15),
                  0 20px 35px rgba(0, 0, 0, 0.12),
                  0 10px 15px rgba(0, 0, 0, 0.08)
                `,
                transform: "translateY(-2px)",
              },
              // Effet de bordure lumineuse
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '20px',
                padding: '1px',
                background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                zIndex: -1,
              }
            }}
          >
            <CardActionArea
              sx={{
                '&:hover .MuiCardActionArea-focusHighlight': {
                  opacity: 0.1,
                }
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia 
                  component="img" 
                  height="240" 
                  image={DestinationImage} 
                  alt={DestinationName}
                  sx={{
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    '&:hover': {
                      transform: "scale(1.08)",
                    }
                  }}
                />
                
                {/* Overlay avec nom de destination et localisation */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '20px 16px 12px',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      marginBottom: "4px",
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {DestinationName}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LocationOnIcon sx={{ fontSize: '18px', color: currentColor }} />
                    <Typography 
                      variant="body2" 
                      sx={{
                        fontSize: "14px",
                        opacity: 0.9,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {Location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <CardContent sx={{ padding: "24px" }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: currentColor,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    opacity: 0.9,
                  }}
                >
                  {Description}
                </Typography>

                {/* Itinéraire */}
                {Itinerary && Itinerary.length > 0 && (
                  <Box sx={{ marginBottom: "8px" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: "12px" }}>
                      <RouteIcon sx={{ fontSize: '16px', color: currentColor }} />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: "text.secondary",
                          fontSize: "12px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Itinéraire
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        borderRadius: '12px',
                        padding: '12px',
                        border: `1px solid ${currentColor}20`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontSize: "13px",
                          fontWeight: 500,
                          lineHeight: 1.4,
                          textAlign: 'center',
                        }}
                      >
                        {formatItinerary(Itinerary)}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </CardActionArea>
            
            <CardActions 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: "16px 24px 24px 24px",
                gap: 2,
              }}
            >
              {/* Bouton Voir détails */}
              <Button
                size="medium"
                variant="outlined"
                onClick={OnViewDetails}
                startIcon={<VisibilityIcon />}
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "12px",
                  padding: "10px 20px",
                  textTransform: "none",
                  borderColor: currentColor,
                  color: currentColor,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  flex: 1,
                  '&:hover': {
                    backgroundColor: `${currentColor}10`,
                    borderColor: currentColor,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Voir détails
              </Button>

              {/* Bouton Demander un devis */}
              <Button
                size="medium"
                variant="contained"
                onClick={OnQuoteRequest}
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "12px",
                  padding: "12px 20px",
                  textTransform: "none",
                  background: currentColor,
                  boxShadow: `0 8px 16px ${currentColor}30`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  flex: 1,
                  '&:hover': {
                    background: `linear-gradient(45deg, #bc4ed8, ${currentColor})`,
                    boxShadow: `0 12px 24px ${currentColor}40`,
                    transform: "translateY(-2px)",
                  },
                  '&:active': {
                    transform: "translateY(0px)",
                  }
                }}
              >
                Demander un devis
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Tilt>
    </motion.div>
  );
}
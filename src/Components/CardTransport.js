import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, keyframes, Chip } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function CardTransport({
  VehicleImage,
  Brand,
  Model,
  Seats,
  DailyPrice,
  FuelType, // "Essence", "Diesel", "Hybride", etc.
  Transmission, // "Manuelle", "Automatique"
  OnBooking,
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

  const slideInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  // Formater le prix
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <Box
      display="flex"
      padding="24px"
      justifyContent="center"
      alignItems="center"
      bgcolor="transparent"
      borderRadius="24px"
      sx={{
        animation: `${slideInUp} 0.8s ease-out`,
        '&:hover': {
          animation: `${floatAnimation} 2s ease-in-out infinite`,
        }
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 380,
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
            transform: "translateY(-8px)",
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
              height="200" 
              image={VehicleImage} 
              alt={`${Brand} ${Model}`}
              sx={{
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                objectFit: "cover",
                '&:hover': {
                  transform: "scale(1.08)",
                }
              }}
            />
            
            {/* Badge prix en top-right */}
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: currentColor,
                color: 'white',
                borderRadius: '12px',
                padding: '6px 12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LocalOfferIcon sx={{ fontSize: '16px' }} />
                <Typography 
                  variant="body2" 
                  sx={{
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {formatPrice(DailyPrice)} Ar/jour
                </Typography>
              </Box>
            </Box>

            {/* Gradient overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.1))',
                pointerEvents: 'none',
              }}
            />
          </Box>
          
          <CardContent sx={{ padding: "24px" }}>
            {/* Marque et Modèle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: "12px" }}>
              <DirectionsCarIcon sx={{ fontSize: '20px', color: currentColor }} />
              <Typography 
                variant="h5" 
                sx={{
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "text.primary",
                }}
              >
                {Brand} {Model}
              </Typography>
            </Box>
            
            {/* Nombre de places */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: "16px" }}>
              <PeopleIcon sx={{ fontSize: '18px', color: currentColor }} />
              <Typography 
                variant="body2" 
                sx={{
                  fontSize: "14px",
                  color: "text.secondary",
                  fontWeight: 500,
                }}
              >
                {Seats} places
              </Typography>
            </Box>

            {/* Caractéristiques techniques */}
            <Box sx={{ marginBottom: "16px" }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                  display: "block"
                }}
              >
                Caractéristiques
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {FuelType && (
                  <Chip
                    label={FuelType}
                    size="small"
                    sx={{
                      backgroundColor: `${currentColor}20`,
                      color: currentColor,
                      fontSize: "11px",
                      height: "24px",
                      fontWeight: 500,
                      border: `1px solid ${currentColor}40`,
                    }}
                  />
                )}
                {Transmission && (
                  <Chip
                    label={Transmission}
                    size="small"
                    sx={{
                      backgroundColor: `${currentColor}20`,
                      color: currentColor,
                      fontSize: "11px",
                      height: "24px",
                      fontWeight: 500,
                      border: `1px solid ${currentColor}40`,
                    }}
                  />
                )}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        
        <CardActions 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: "16px 24px 24px 24px",
          }}
        >
          <Button
            size="medium"
            variant="contained"
            onClick={OnBooking}
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              borderRadius: "12px",
              padding: "12px 28px",
              textTransform: "none",
              background: currentColor,
              boxShadow: `0 8px 16px ${currentColor}30`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
            Réserver maintenant
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
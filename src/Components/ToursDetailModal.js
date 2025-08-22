import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Grid,
  Divider,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Close as CloseIcon,
  LocationOn as LocationOnIcon,
  Route as RouteIcon,
  AccessTime as AccessTimeIcon,
  Hotel as HotelIcon,
  Restaurant as RestaurantIcon,
  LocalActivity as ActivityIcon,
  AttachMoney as PriceIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'motion/react';

const TourDetailsModal = ({ open, onClose, tourDetails, currentColor }) => {
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

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="md"
          fullWidth
          PaperComponent={motion.div}
          PaperProps={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 },
            transition: { duration: 0.3 },
            sx: {
              borderRadius: '20px',
              overflow: 'hidden',
              maxHeight: '90vh',
              backgroundColor: 'white', // Background blanc
            }
          }}
        >
          {/* Header avec image et titre */}
          <Box sx={{ position: 'relative' }} >
            <Box
              sx={{
                height: 300,
                backgroundImage: `url(${DestinationImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                }}
              />
              
              {/* Bouton fermer */}
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,1)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Titre et localisation */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  right: 24,
                  color: 'white',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  {DestinationName}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: currentColor }} />
                  <Typography
                    variant="h6"
                    sx={{
                      opacity: 0.9,
                      textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {Location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ padding: 3 }}>
              {/* Informations rapides */}
              <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                {duration && (
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={0}
                      sx={{
                        padding: 2,
                        textAlign: 'center',
                        backgroundColor: `${currentColor}10`,
                        borderRadius: 2,
                      }}
                    >
                      <AccessTimeIcon sx={{ color: currentColor, marginBottom: 1 }} />
                      <Typography variant="caption" display="block" color="text.secondary">
                        Durée
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {duration}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {difficulty && (
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={0}
                      sx={{
                        padding: 2,
                        textAlign: 'center',
                        backgroundColor: `${currentColor}10`,
                        borderRadius: 2,
                      }}
                    >
                      <ActivityIcon sx={{ color: currentColor, marginBottom: 1 }} />
                      <Typography variant="caption" display="block" color="text.secondary">
                        Difficulté
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {difficulty}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {priceRange && (
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={0}
                      sx={{
                        padding: 2,
                        textAlign: 'center',
                        backgroundColor: `${currentColor}10`,
                        borderRadius: 2,
                      }}
                    >
                      <PriceIcon sx={{ color: currentColor, marginBottom: 1 }} />
                      <Typography variant="caption" display="block" color="text.secondary">
                        À partir de
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {priceRange}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {bestTime && (
                  <Grid item xs={6} sm={3}>
                    <Paper
                      elevation={0}
                      sx={{
                        padding: 2,
                        textAlign: 'center',
                        backgroundColor: `${currentColor}10`,
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="caption" display="block" color="text.secondary">
                        Meilleure période
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {bestTime}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>

              {/* Description détaillée */}
              <Typography variant="h6" gutterBottom sx={{ color: currentColor, fontWeight: 600 }}>
                Description
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, marginBottom: 3 }}>
                {detailedDescription || Description}
              </Typography>

              {/* Itinéraire */}
              {Itinerary && Itinerary.length > 0 && (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                    <RouteIcon sx={{ color: currentColor }} />
                    <Typography variant="h6" sx={{ color: currentColor, fontWeight: 600 }}>
                      Itinéraire
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: 3 }}>
                    {Itinerary.map((city, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <Chip
                          label={index + 1}
                          size="small"
                          sx={{
                            backgroundColor: currentColor,
                            color: 'white',
                            minWidth: 30,
                            marginRight: 2,
                          }}
                        />
                        <Typography variant="body2">{city}</Typography>
                        {index < Itinerary.length - 1 && (
                          <Typography variant="body2" sx={{ marginLeft: 1, color: 'text.secondary' }}>
                            →
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              {/* Points forts */}
              {highlights && highlights.length > 0 && (
                <>
                  <Typography variant="h6" gutterBottom sx={{ color: currentColor, fontWeight: 600 }}>
                    Points forts
                  </Typography>
                  <List dense sx={{ marginBottom: 2 }}>
                    {highlights.map((highlight, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <ActivityIcon sx={{ color: currentColor, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText primary={highlight} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}

              {/* Ce qui est inclus */}
              <Grid container spacing={3}>
                {included && included.length > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'success.main', fontWeight: 600 }}>
                      ✅ Inclus
                    </Typography>
                    <List dense>
                      {included.map((item, index) => (
                        <ListItem key={index} sx={{ paddingLeft: 0, paddingY: 0.5 }}>
                          <ListItemText 
                            primary={item}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                )}

                {notIncluded && notIncluded.length > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'error.main', fontWeight: 600 }}>
                      ❌ Non inclus
                    </Typography>
                    <List dense>
                      {notIncluded.map((item, index) => (
                        <ListItem key={index} sx={{ paddingLeft: 0, paddingY: 0.5 }}>
                          <ListItemText 
                            primary={item}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                )}
              </Grid>
            </Box>
          </DialogContent>

          <DialogActions sx={{ padding: 3, paddingTop: 0 }}>
            <Button
              onClick={onClose}
              variant="outlined"
              sx={{
                borderColor: 'text.secondary',
                color: 'text.secondary',
                '&:hover': {
                  borderColor: 'text.primary',
                  color: 'text.primary',
                },
              }}
            >
              Fermer
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: currentColor,
                '&:hover': {
                  backgroundColor: currentColor,
                  opacity: 0.9,
                },
              }}
            >
              Demander un devis
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default TourDetailsModal;
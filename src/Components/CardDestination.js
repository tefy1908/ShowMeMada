import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Box,
  keyframes
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ParkIcon from '@mui/icons-material/Park';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import MuseumIcon from '@mui/icons-material/Museum';

const CardDestination = ({ 
  destination, 
  index = 0, 
  onExplore 
}) => {
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

  const getActivityIcon = (activity) => {
    const activityLower = activity.toLowerCase();
    if (activityLower.includes('plage') || activityLower.includes('plongée')) return <BeachAccessIcon />;
    if (activityLower.includes('parc') || activityLower.includes('forêt')) return <ParkIcon />;
    if (activityLower.includes('bateau') || activityLower.includes('canal')) return <DirectionsBoatIcon />;
    if (activityLower.includes('musée') || activityLower.includes('palais')) return <MuseumIcon />;
    if (activityLower.includes('randonnée') || activityLower.includes('montagne')) return <HikingIcon />;
    return <CameraAltIcon />;
  };

  return (
    <Card
      sx={{
        height: '100%',
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
          objectFit: 'cover',
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
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />

      <CardContent sx={{ p: 3 }}>
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
          sx={{ mb: 2, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {destination.description}
        </Typography>

        {/* Activités */}
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          Activités principales :
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
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
                border: `1px solid ${destination.color}30`,
              }}
            >
              {getActivityIcon(activity)}
              <span>{activity}</span>
            </Box>
          ))}
          {destination.activities.length > 3 && (
            <Chip
              label={`+${destination.activities.length - 3} autres`}
              size="small"
              sx={{
                backgroundColor: `${destination.color}10`,
                color: destination.color,
                fontSize: '11px',
                height: '28px',
              }}
            />
          )}
        </Box>

       
      </CardContent>
    </Card>
  );
};

export default CardDestination;
// Components/ValueCard.jsx
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const ValueCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: '1.5rem', md: '2rem' },
        maxWidth : "600px",
        borderRadius: '15px',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        animationDelay: `${delay}s`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: '#63AB45',
        },
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 15px 40px rgba(99, 171, 69, 0.2)',
          '& .value-icon': {
            transform: 'scale(1.1) rotate(5deg)',
          },
          '& .value-title': {
            color: '#63AB45',
          }
        }
      }}
    >
      {/* Icône */}
      <Box
        className="value-icon"
        sx={{
          width: '80px',
          height: '80px',
          margin: '0 auto 1.5rem',
          background: 'linear-gradient(135deg, #63AB45 0%, #4a8c33 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'white',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(99, 171, 69, 0.3)',
        }}
      >
        {icon}
      </Box>

      {/* Titre */}
      <Typography
        variant="h6"
        component="h3"
        className="value-title"
        sx={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333',
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: '#666',
          lineHeight: 1.6,
          fontSize: '0.95rem',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {description}
      </Typography>

      {/* Effet de brillance au hover */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'left 0.5s',
          pointerEvents: 'none',
          '.MuiPaper-root:hover &': {
            left: '100%',
          }
        }}
      />
    </Paper>
  );
};

export default ValueCard;
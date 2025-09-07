import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

const MadagascarCarousel = ({ images = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

 

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = isMobile ? 280 : 320;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 2 }}>
      

      {/* Container principal */}
      <Box sx={{ position: 'relative', '&:hover .nav-button': { opacity: 1 } }}>
        
        {/* Bouton gauche */}
        {showLeftArrow && (
          <IconButton
            className="nav-button"
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                backgroundColor: '#63AB45',
                transform: 'translateY(-50%) scale(1.1)'
              },
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 }
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}

        {/* Bouton droite */}
        {showRightArrow && (
          <IconButton
            className="nav-button"
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                backgroundColor: '#63AB45',
                transform: 'translateY(-50%) scale(1.1)'
              },
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 }
            }}
          >
            <ChevronRight />
          </IconButton>
        )}

        {/* Container des images avec scroll horizontal */}
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            gap: 2,
            px: 2,
            pb: 1,
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {images.map((image) => (
            <Box
              key={image.id}
              sx={{
                minWidth: { xs: '300px', md: '400px' },
                height: { xs: '300px', md: '400px' },
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .image-overlay': {
                    opacity: 1
                  }
                }
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  position: 'relative'
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={image.src}
                  alt={image.title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
                
                {/* Overlay avec informations */}
                <Box
                  className="image-overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    p: 2,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 'bold',
                      mb: 0.5,
                      fontSize: { xs: '0.85rem', md: '0.9rem' }
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#63AB45',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      fontWeight: '500'
                    }}
                  >
                    {image.category}
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MadagascarCarousel;
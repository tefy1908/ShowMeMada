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

const MadagascarCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Images de démonstration pour Madagascar
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop',
      title: 'Baobabs au coucher du soleil',
      category: 'Paysages'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=250&fit=crop',
      title: 'Lémurien de Madagascar',
      category: 'Faune'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
      title: 'Plage paradisiaque',
      category: 'Plages'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      title: 'Forêt tropicale',
      category: 'Flore'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      title: 'Côte sauvage',
      category: 'Paysages'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
      title: 'Végétation luxuriante',
      category: 'Flore'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=250&fit=crop',
      title: 'Plage de sable blanc',
      category: 'Plages'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=400&h=250&fit=crop',
      title: 'Montagnes majestueuses',
      category: 'Paysages'
    }
  ];

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
      {/* Titre de section */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          ml: 2,
          fontWeight: 'bold',
          color: '#333',
          fontSize: { xs: '1.2rem', md: '1.5rem' }
        }}
      >
        Découvrez Madagascar
      </Typography>

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
                minWidth: { xs: '260px', md: '300px' },
                height: { xs: '160px', md: '180px' },
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
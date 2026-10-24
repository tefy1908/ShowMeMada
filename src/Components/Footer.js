import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import { CONTACT } from '../Utils/contactInfo';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Clés de traduction : footer.sections.<section> et footer.links.<lien>
  const footerLinks = {
    discover: [
      { key: 'home', route: '/' },
      { key: 'about', route: '/about' },
      { key: 'destinations', route: '/destinations' },
      { key: 'contact', route: '/contact' }
    ],
    services: [
      { key: 'tours', route: '/tours' },
      { key: 'gallery', route: '/galerie' },
      { key: 'customTrip', route: '#' },
      { key: 'localGuide', route: '#' }
    ],
    madagascar: [
      { key: 'culture', route: '#' },
      { key: 'wildlife', route: '#' },
      { key: 'parks', route: '#' },
      { key: 'tips', route: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        {/* Section principale du footer */}
        <Grid container  justifyContent={'space-between'}>
          {/* Logo et description */}
          <Grid size={12}>
            <Box>
              <Typography 
                variant="h4" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  color: '#63AB45'
                }}
              >
                Show Me Mada
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                  maxWidth: '400px'
                }}
              >
                {t('footer.description')}
              </Typography>
              
              {/* Informations de contact */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Mail size={20} style={{ color: '#63AB45', marginRight: '12px' }} />
                  <Link href={CONTACT.emailHref} variant="body2" sx={{ color: '#e0e0e0', textDecoration: 'none', '&:hover': { color: '#63AB45' } }}>
                    {CONTACT.email}
                  </Link>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: '#63AB45', marginRight: '12px' }} />
                  <Link href={CONTACT.phoneHref} variant="body2" sx={{ color: '#e0e0e0', textDecoration: 'none', '&:hover': { color: '#63AB45' } }}>
                    {CONTACT.phoneDisplay}
                  </Link>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MapPin size={20} style={{ color: '#63AB45', marginRight: '12px' }} />
                  <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                    {CONTACT.address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Liens du footer */}
          <Grid size={12}>
            <Grid container spacing={4}>
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid size={{ xs: 12, sm: 4 }} key={category}>
                  <Box  display={'flex'} flexGrow={1} flexDirection={'column'}>
                    <Typography 
                      variant="h6" 
                      component="div" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 2,
                        color: '#63AB45',
                        fontSize: '1.1rem'
                      }}
                    >
                      {t(`footer.sections.${category}`)}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {links.map((link) => (
                        <Link
                          key={link.key}
                          href={link.route}
                          sx={{
                            color: '#e0e0e0',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: '#63AB45',
                              textDecoration: 'none'
                            }
                          }}
                        >
                          {t(`footer.links.${link.key}`)}
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider 
          sx={{ 
            my: 4, 
            backgroundColor: '#333333',
            borderColor: '#333333'
          }} 
        />

        {/* Section réseaux sociaux et copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          {/* Copyright */}
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#b0b0b0',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            {t('footer.rights', { year: new Date().getFullYear() })}
          </Typography>

          {/* Réseaux sociaux */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <IconButton
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  sx={{
                    color: '#e0e0e0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#63AB45',
                      backgroundColor: 'rgba(99, 171, 69, 0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <IconComponent size={20} />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
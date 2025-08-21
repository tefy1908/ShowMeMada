// components/Layout.js
import React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import NavBarBlack from './NavBarBlack';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar fixe en haut */}
      <ResponsiveAppBar />
      <NavBarBlack/>
      
      {/* Contenu principal */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          // Optionnel : padding pour éviter que le contenu touche les bords
          // pt: 2, // padding-top
        }}
      >
        {children}
      </Box>
      
      {/* Optionnel : Footer */}
      <Footer /> 
    </Box>
  );
};

export default Layout;
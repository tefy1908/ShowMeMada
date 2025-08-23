import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Select, FormControl } from "@mui/material";
import PhoneIcon from "./IconComponent/phoneIcon";
import { useTranslation } from "react-i18next";
import ShowMeMadaLogo from '..//Assets/Images/ShowMeMadaLogo.jpg'



function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Pages avec leurs clés de traduction et routes
  const pages = [
    { key: "navigation.home", route: "/", suffix: " +" },
    { key: "navigation.about", route: "/about", suffix: " +" },
    { key: "navigation.tours", route: "/tours", suffix: " +" },
    { key: "navigation.destinations", route: "/destinations", suffix: " +" },
    { key: "navigation.services", route: "/services", suffix: " +" },
    { key: "navigation.contact", route: "/contact", suffix: " +" },
  ];

  // Langues disponibles
  const languages = [
    { code: "en", flag: "🇺🇸", name: "EN" },
    { code: "fr", flag: "🇫🇷", name: "FR" },
    { code: "es", flag: "🇪🇸", name: "ES" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (route) => {
    navigate(route);
    handleCloseNavMenu();
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Fonction pour vérifier si la route est active
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl" sx={{ marginLeft : 0}} >
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Box onClick={handleLogoClick}> <img src={ShowMeMadaLogo} width={"200px"} height={"120px"} alt="LOGO" /></Box>
         

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu de navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.key}
                  onClick={() => handleNavigation(page.route)}
                  sx={{
                    backgroundColor: isActiveRoute(page.route)
                      ? "rgba(0, 0, 0, 0.1)"
                      : "transparent",
                    fontWeight: isActiveRoute(page.route) ? 600 : 400,
                  }}
                >
                  <Box sx={{ textAlign: "center", color: "black" }}>
                    {t(page.key)}
                    {page.suffix}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
         

          {/* Navigation Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                onClick={() => handleNavigation(page.route)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  position: "relative",
                  fontWeight: isActiveRoute(page.route) ? 600 : 400,
                  "&::after": isActiveRoute(page.route)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80%",
                        height: "2px",
                        backgroundColor: "black",
                        borderRadius: "1px",
                      }
                    : {},
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                {t(page.key)}
                {page.suffix}
              </Button>
            ))}
          </Box>

          {/* Sélecteur de langue */}
          <Box sx={{ mr: 2 }}>
            <FormControl size="small">
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                sx={{
                  color: "black",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                displayEmpty
                renderValue={(selected) => {
                  const lang = languages.find((l) => l.code === selected);
                  return lang ? `${lang.flag} ${lang.name}` : "";
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Contact Info */}
          <Box
            display={"flex"}
            gap={"10px"}
            sx={{ flexGrow: 0 }}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <PhoneIcon />
            <Box display={"flex"} flexDirection={"column"}>
              <Box color={"black"}>{t("inquiry")}</Box>
              <Box color="green">+261343025720</Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

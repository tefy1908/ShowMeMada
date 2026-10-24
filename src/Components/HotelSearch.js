import React, { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

// icones
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useTranslation } from "react-i18next";
const HotelSearch = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [searchData, setSearchData] = useState({
    destination: "",
    category: "",
    priceRange: [50, 1000],
    dates: {
      checkin: "",
      checkout: "",
    },
    contact: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
    },
  });

  const destinations = [
    "Antananarivo",
    "Antsirabe",
    "Toamasina",
    "Mahajanga",
    "Toliara",
    "Antsiranana",
    "Fianarantsoa",
    "Morondava",
    "Nosy Be",
    "Sainte-Marie",
  ];

  const steps = [
    { key: "destination", icon: <AddLocationOutlinedIcon /> },
    { key: "category", icon: <StarBorderOutlinedIcon /> },
    { key: "budget", icon: <AttachMoneyOutlinedIcon /> },
    { key: "dates", icon: <CalendarMonthOutlinedIcon /> },
    { key: "contact", icon: <ContactPageOutlinedIcon /> },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSearch = () => {
    console.log("Recherche avec les critères:", searchData);
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0:
        return searchData.destination !== "";
      case 1:
        return searchData.category !== "";
      case 2:
        return true;
      case 3:
        return (
          searchData.dates.checkin !== "" && searchData.dates.checkout !== ""
        );
      case 4:
        return (
          searchData.contact.nom !== "" &&
          searchData.contact.prenom !== "" &&
          searchData.contact.email !== ""
        );
      default:
        return false;
    }
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "min") {
      setSearchData({
        ...searchData,
        priceRange: [value, searchData.priceRange[1]],
      });
    } else {
      setSearchData({
        ...searchData,
        priceRange: [searchData.priceRange[0], value],
      });
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ color: "#000", marginBottom: "20px", fontSize: "18px" }}
            >
              {t("hotel.destinationTitle")}
            </h3>
            <select
              value={searchData.destination}
              onChange={(e) =>
                setSearchData({ ...searchData, destination: e.target.value })
              }
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                backgroundColor: "#fff",
              }}
            >
              <option value="">{t("hotel.selectDestination")}</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>
        );

      case 1:
        return (
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ color: "#000", marginBottom: "20px", fontSize: "18px" }}
            >
              {t("hotel.categoryTitle")}
            </h3>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 colonne en XS, 2 colonnes à partir de SM
                gap: "15px",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  textAlign: "center",
                  cursor: "pointer",
                  border:
                    searchData.category === "luxe"
                      ? "2px solid #63AB45"
                      : "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  transition: "all 0.2s ease",
                }}
                onClick={() =>
                  setSearchData({ ...searchData, category: "luxe" })
                }
                onMouseEnter={(e) => (e.target.style.borderColor = "#63AB45")}
                onMouseLeave={(e) => {
                  if (searchData.category !== "luxe") {
                    e.target.style.borderColor = "#ddd";
                  }
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                  <KingBedOutlinedIcon fontSize="large" />
                </div>
                <h4 style={{ margin: "0 0 8px 0", color: "#000" }}>{t("hotel.luxury")}</h4>
                <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
                  {t("hotel.luxuryDesc")}
                </p>
              </div>
              <div
                style={{
                  padding: "25px",
                  textAlign: "center",
                  cursor: "pointer",
                  border:
                    searchData.category === "simple"
                      ? "2px solid #63AB45"
                      : "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  transition: "all 0.2s ease",
                }}
                onClick={() =>
                  setSearchData({ ...searchData, category: "simple" })
                }
                onMouseEnter={(e) => (e.target.style.borderColor = "#63AB45")}
                onMouseLeave={(e) => {
                  if (searchData.category !== "simple") {
                    e.target.style.borderColor = "#ddd";
                  }
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                  <CheckCircleOutlineOutlinedIcon fontSize="large" />
                </div>
                <h4 style={{ margin: "0 0 8px 0", color: "#000" }}>{t("hotel.simple")}</h4>
                <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
                  {t("hotel.simpleDesc")}
                </p>
              </div>
            </Box>
          </div>
        );

      case 2:
        return (
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ color: "#000", marginBottom: "20px", fontSize: "18px" }}
            >
              {t("hotel.budgetTitle")}
            </h3>
            <div style={{ padding: "0 10px" }}>
              <div
                style={{
                  marginBottom: "15px",
                  color: "#63AB45",
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {searchData.priceRange[0]}€ - {searchData.priceRange[1]}€
              </div>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontSize: "14px",
                    }}
                  >
                    Min
                  </label>
                  <input
                    type="range"
                    name="min"
                    min="20"
                    max="1000"
                    value={searchData.priceRange[0]}
                    onChange={handlePriceChange}
                    style={{
                      width: "100%",
                      height: "6px",
                      borderRadius: "3px",
                      background: "#ddd",
                      outline: "none",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontSize: "14px",
                    }}
                  >
                    Max
                  </label>
                  <input
                    type="range"
                    name="max"
                    min="20"
                    max="1000"
                    value={searchData.priceRange[1]}
                    onChange={handlePriceChange}
                    style={{
                      width: "100%",
                      height: "6px",
                      borderRadius: "3px",
                      background: "#ddd",
                      outline: "none",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                <span>20€</span>
                <span>1000€</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ color: "#000", marginBottom: "20px", fontSize: "18px" }}
            >
              {t("hotel.datesTitle")}
            </h3>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 colonne en XS, 2 colonnes à partir de SM
                gap: "15px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {t("hotel.checkin")}
                </label>
                <input
                  type="date"
                  value={searchData.dates.checkin}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      dates: { ...searchData.dates, checkin: e.target.value },
                    })
                  }
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {t("hotel.checkout")}
                </label>
                <input
                  type="date"
                  value={searchData.dates.checkout}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      dates: { ...searchData.dates, checkout: e.target.value },
                    })
                  }
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
              </div>
            </Box>
          </div>
        );

      case 4:
        return (
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ color: "#000", marginBottom: "20px", fontSize: "18px" }}
            >
              {t("hotel.contactTitle")}
            </h3>
            <p
              style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}
            >
              {t("hotel.contactIntro")}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {t("hotel.lastName")}
                </label>
                <input
                  type="text"
                  value={searchData.contact.nom}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      contact: { ...searchData.contact, nom: e.target.value },
                    })
                  }
                  placeholder={t("hotel.lastNamePlaceholder")}
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {t("hotel.firstName")}
                </label>
                <input
                  type="text"
                  value={searchData.contact.prenom}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      contact: {
                        ...searchData.contact,
                        prenom: e.target.value,
                      },
                    })
                  }
                  placeholder={t("hotel.firstNamePlaceholder")}
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {t("hotel.email")}
              </label>
              <input
                type="email"
                value={searchData.contact.email}
                onChange={(e) =>
                  setSearchData({
                    ...searchData,
                    contact: { ...searchData.contact, email: e.target.value },
                  })
                }
                placeholder={t("hotel.emailPlaceholder")}
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%",
                  fontSize: "16px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {t("hotel.phone")}
              </label>
              <input
                type="tel"
                value={searchData.contact.telephone}
                onChange={(e) =>
                  setSearchData({
                    ...searchData,
                    contact: {
                      ...searchData.contact,
                      telephone: e.target.value,
                    },
                  })
                }
                placeholder="+33 1 23 45 67 89"
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "100%",
                  fontSize: "16px",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#f0f8ff",
                padding: "15px",
                borderRadius: "6px",
                marginTop: "20px",
                border: "1px solid #63AB45",
              }}
            >
              <div
                style={{
                  margin: "0",
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.4",
                }}
              >
                <span style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "6px" }}>
                  <EmailOutlinedIcon sx={{ fontSize: 18, color: "#63AB45" }} />
                  {t("hotel.infoEmail")}
                </span>
                <span style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <PhoneOutlinedIcon sx={{ fontSize: 18, color: "#63AB45" }} />
                  {t("hotel.infoPhone")}
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Barre de progression */}
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                height: "100%",
                backgroundColor: "#63AB45",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
          <p
            style={{
              textAlign: "center",
              margin: "8px 0 0 0",
              fontSize: "14px",
              color: "#666",
            }}
          >
            {t("hotel.stepOf", { current: activeStep + 1, total: steps.length })}
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "30px",
            px: { xs: 0, sm: 2 }, // padding horizontal 0 en xs, 16px (2*8px) à partir de sm
          }}
        >
          {steps.map((step, index) => (
            <div key={step.key} style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: index <= activeStep ? "#63AB45" : "#ddd",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px auto",
                  fontSize: "18px",
                  transition: "all 0.3s ease",
                }}
              >
                {step.icon}
              </div>
              <p
                style={{
                  margin: "0",
                  fontSize: "12px",
                  color: index <= activeStep ? "#000" : "#999",
                  fontWeight: index === activeStep ? "bold" : "normal",
                }}
              >
                {t(`hotel.steps.${step.key}`)}
              </p>
            </div>
          ))}
        </Box>

        {/* Contenu principal */}
        <Box
          sx={{
            backgroundColor: "#fff",
            p: { xs: "10px", sm: "30px" }, // padding responsive
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            minHeight: "300px",
            mb: "20px",
          }}
        >
          {renderStepContent()}

          {/* Boutons de navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                px: { xs: "12px", sm: "20px" }, // padding horizontal responsive
                py: { xs: "6px", sm: "10px" }, // padding vertical responsive
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                color: activeStep === 0 ? "#ccc" : "#000",
                borderRadius: "4px",
                fontSize: { xs: "10px", sm: "16px" }, // font-size responsive
                cursor: activeStep === 0 ? "not-allowed" : "pointer",
                "&:hover": {
                  backgroundColor: activeStep === 0 ? "#fff" : "#f5f5f5",
                },
              }}
            >
              {t("common.previous")}
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSearch}
                disabled={!isStepValid()}
                sx={{
                  px: { xs: "12px", sm: "25px" }, // padding horizontal responsive
                  py: { xs: "8px", sm: "12px" }, // padding vertical responsive
                  backgroundColor: isStepValid() ? "#63AB45" : "#ccc",
                  color: "#fff",
                  borderRadius: "4px",
                  fontSize: { xs: "10px", sm: "16px" }, // font-size responsive
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: isStepValid() ? "pointer" : "not-allowed",
                  border: "none",
                  "&:hover": {
                    backgroundColor: isStepValid() ? "#55983c" : "#ccc",
                  },
                }}
              >
                {t("hotel.submit")}
              </Button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  backgroundColor: isStepValid() ? "#63AB45" : "#ccc",
                  color: "#fff",
                  borderRadius: "4px",
                  cursor: isStepValid() ? "pointer" : "not-allowed",
                  fontSize: "16px",
                }}
              >
                {t("common.next")}
              </button>
            )}
          </div>
        </Box>

        {/* Résumé de la recherche */}
        {(searchData.destination || searchData.category) && (
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h3
              style={{
                margin: "0 0 15px 0",
                color: "#63AB45",
                fontSize: "18px",
              }}
            >
              {t("hotel.summaryTitle")}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              {searchData.destination && (
                <div>
                  <strong style={{ color: "#000" }}>{t("hotel.summary.destination")}</strong>
                  <span style={{ marginLeft: "8px", color: "#666" }}>
                    {searchData.destination}
                  </span>
                </div>
              )}
              {searchData.category && (
                <div>
                  <strong style={{ color: "#000" }}>{t("hotel.summary.category")}</strong>
                  <span style={{ marginLeft: "8px", color: "#666" }}>
                    {searchData.category === "luxe" ? t("hotel.luxury") : t("hotel.simple")}
                  </span>
                </div>
              )}
              <div>
                <strong style={{ color: "#000" }}>{t("hotel.summary.budget")}</strong>
                <span style={{ marginLeft: "8px", color: "#666" }}>
                  {searchData.priceRange[0]}€ - {searchData.priceRange[1]}€
                </span>
              </div>
              {searchData.dates.checkin && searchData.dates.checkout && (
                <div>
                  <strong style={{ color: "#000" }}>{t("hotel.summary.dates")}</strong>
                  <span style={{ marginLeft: "8px", color: "#666" }}>
                    {t("hotel.summary.datesValue", { checkin: searchData.dates.checkin, checkout: searchData.dates.checkout })}
                  </span>
                </div>
              )}
              {searchData.contact.nom && searchData.contact.email && (
                <div>
                  <strong style={{ color: "#000" }}>{t("hotel.summary.contact")}</strong>
                  <span style={{ marginLeft: "8px", color: "#666" }}>
                    {searchData.contact.prenom} {searchData.contact.nom} -{" "}
                    {searchData.contact.email}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelSearch;

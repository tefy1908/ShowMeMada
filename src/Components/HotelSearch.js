import React, { useState } from 'react';
// icones 
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const HotelSearch = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [searchData, setSearchData] = useState({
    destination: '',
    category: '',
    priceRange: [50, 1000],
    dates: {
      checkin: '',
      checkout: ''
    },
    contact: {
      nom: '',
      prenom: '',
      email: '',
      telephone: ''
    }
  });

  const destinations = [
    'Antananarivo',
    'Antsirabe', 
    'Toamasina',
    'Mahajanga',
    'Toliara',
    'Antsiranana',
    'Fianarantsoa',
    'Morondava',
    'Nosy Be',
    'Sainte-Marie'
  ];

  const steps = [
    { name: 'Destination', icon: <AddLocationOutlinedIcon/> },
    { name: 'Catégorie', icon: <StarBorderOutlinedIcon/> },
    { name: 'Budget', icon: <AttachMoneyOutlinedIcon/> },
    { name: 'Dates', icon: <CalendarMonthOutlinedIcon/> },
    { name: 'Contact', icon: <ContactPageOutlinedIcon/> }
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
    console.log('Recherche avec les critères:', searchData);
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0: return searchData.destination !== '';
      case 1: return searchData.category !== '';
      case 2: return true;
      case 3: return searchData.dates.checkin !== '' && searchData.dates.checkout !== '';
      case 4: return searchData.contact.nom !== '' && 
                     searchData.contact.prenom !== '' && 
                     searchData.contact.email !== '';
      default: return false;
    }
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === 'min') {
      setSearchData({...searchData, priceRange: [value, searchData.priceRange[1]]});
    } else {
      setSearchData({...searchData, priceRange: [searchData.priceRange[0], value]});
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#000', marginBottom: '20px', fontSize: '18px' }}>
              Choisissez votre destination à Madagascar
            </h3>
            <select
              value={searchData.destination}
              onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                backgroundColor: '#fff'
              }}
            >
              <option value="">Sélectionnez une destination</option>
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
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#000', marginBottom: '20px', fontSize: '18px' }}>
              Choisissez le type d'hébergement
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div
                style={{
                  padding: '25px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: searchData.category === 'luxe' ? '2px solid #63AB45' : '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSearchData({...searchData, category: 'luxe'})}
                onMouseEnter={(e) => e.target.style.borderColor = '#63AB45'}
                onMouseLeave={(e) => {
                  if (searchData.category !== 'luxe') {
                    e.target.style.borderColor = '#ddd';
                  }
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}><KingBedOutlinedIcon fontSize='large'/></div>
                <h4 style={{ margin: '0 0 8px 0', color: '#000' }}>Luxe</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                  Hôtels 4-5 étoiles, services premium
                </p>
              </div>
              <div
                style={{
                  padding: '25px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: searchData.category === 'simple' ? '2px solid #63AB45' : '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSearchData({...searchData, category: 'simple'})}
                onMouseEnter={(e) => e.target.style.borderColor = '#63AB45'}
                onMouseLeave={(e) => {
                  if (searchData.category !== 'simple') {
                    e.target.style.borderColor = '#ddd';
                  }
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}><CheckCircleOutlineOutlinedIcon fontSize='large'/></div>
                <h4 style={{ margin: '0 0 8px 0', color: '#000' }}>Simple</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                  Hôtels confortables, bon rapport qualité-prix
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#000', marginBottom: '20px', fontSize: '18px' }}>
              Définissez votre budget par nuit
            </h3>
            <div style={{ padding: '0 10px' }}>
              <div style={{ 
                marginBottom: '15px', 
                color: '#63AB45', 
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center'
              }}>
                {searchData.priceRange[0]}€ - {searchData.priceRange[1]}€
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Min</label>
                  <input
                    type="range"
                    name="min"
                    min="20"
                    max="1000"
                    value={searchData.priceRange[0]}
                    onChange={handlePriceChange}
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '3px',
                      background: '#ddd',
                      outline: 'none',
                      appearance: 'none',
                      WebkitAppearance: 'none'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Max</label>
                  <input
                    type="range"
                    name="max"
                    min="20"
                    max="1000"
                    value={searchData.priceRange[1]}
                    onChange={handlePriceChange}
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '3px',
                      background: '#ddd',
                      outline: 'none',
                      appearance: 'none',
                      WebkitAppearance: 'none'
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                <span>20€</span>
                <span>500€</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#000', marginBottom: '20px', fontSize: '18px' }}>
              Sélectionnez vos dates
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  value={searchData.dates.checkin}
                  onChange={(e) => setSearchData({
                    ...searchData,
                    dates: {...searchData.dates, checkin: e.target.value}
                  })}
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '100%',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Date de départ
                </label>
                <input
                  type="date"
                  value={searchData.dates.checkout}
                  onChange={(e) => setSearchData({
                    ...searchData,
                    dates: {...searchData.dates, checkout: e.target.value}
                  })}
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '100%',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#000', marginBottom: '20px', fontSize: '18px' }}>
              Vos informations de contact
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Nous vous enverrons une sélection personnalisée d'hôtels correspondant à vos critères.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Nom *
                </label>
                <input
                  type="text"
                  value={searchData.contact.nom}
                  onChange={(e) => setSearchData({
                    ...searchData,
                    contact: {...searchData.contact, nom: e.target.value}
                  })}
                  placeholder="Votre nom"
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '100%',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  Prénom *
                </label>
                <input
                  type="text"
                  value={searchData.contact.prenom}
                  onChange={(e) => setSearchData({
                    ...searchData,
                    contact: {...searchData.contact, prenom: e.target.value}
                  })}
                  placeholder="Votre prénom"
                  style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '100%',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                Email *
              </label>
              <input
                type="email"
                value={searchData.contact.email}
                onChange={(e) => setSearchData({
                  ...searchData,
                  contact: {...searchData.contact, email: e.target.value}
                })}
                placeholder="votre@email.com"
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  width: '100%',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                Téléphone
              </label>
              <input
                type="tel"
                value={searchData.contact.telephone}
                onChange={(e) => setSearchData({
                  ...searchData,
                  contact: {...searchData.contact, telephone: e.target.value}
                })}
                placeholder="+33 1 23 45 67 89"
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  width: '100%',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{
              backgroundColor: '#f0f8ff',
              padding: '15px',
              borderRadius: '6px',
              marginTop: '20px',
              border: '1px solid #63AB45'
            }}>
              <p style={{ margin: '0', fontSize: '13px', color: '#666', lineHeight: '1.4' }}>
                📧 Nous vous enverrons par email une sélection d'hôtels personnalisée sous 24h.<br/>
                📞 Si vous renseignez votre téléphone, nous pourrons vous contacter pour affiner votre recherche.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{
            fontWeight: 'bold',
            color: '#000',
            margin: '0 0 10px 0',
            fontSize: '28px'
          }}>
            Trouvez votre hôtel à Madagascar
          </h1>
          <p style={{ color: '#666', margin: '0', fontSize: '16px' }}>
            Découvrez les meilleurs hébergements de la Grande Île
          </p>
        </div>

        {/* Barre de progression */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(activeStep + 1) * 25}%`,
              height: '100%',
              backgroundColor: '#63AB45',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <p style={{
            textAlign: 'center',
            margin: '8px 0 0 0',
            fontSize: '14px',
            color: '#666'
          }}>
            Étape {activeStep + 1} sur {steps.length}
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
          padding: '0 20px'
        }}>
          {steps.map((step, index) => (
            <div key={step.name} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: index <= activeStep ? '#63AB45' : '#ddd',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px auto',
                fontSize: '18px',
                transition: 'all 0.3s ease'
              }}>
                {step.icon}
              </div>
              <p style={{
                margin: '0',
                fontSize: '12px',
                color: index <= activeStep ? '#000' : '#999',
                fontWeight: index === activeStep ? 'bold' : 'normal'
              }}>
                {step.name}
              </p>
            </div>
          ))}
        </div>

        {/* Contenu principal */}
        <div style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          minHeight: '300px',
          marginBottom: '20px'
        }}>
          {renderStepContent()}

          {/* Boutons de navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px'
          }}>
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{
                padding: '10px 20px',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                color: activeStep === 0 ? '#ccc' : '#000',
                borderRadius: '4px',
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                fontSize: '16px'
              }}
            >
              Précédent
            </button>

            {activeStep === steps.length - 1 ? (
              <button
                onClick={handleSearch}
                disabled={!isStepValid()}
                style={{
                  padding: '12px 25px',
                  border: 'none',
                  backgroundColor: isStepValid() ? '#63AB45' : '#ccc',
                  color: '#fff',
                  borderRadius: '4px',
                  cursor: isStepValid() ? 'pointer' : 'not-allowed',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                📧 Recevoir ma sélection
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  backgroundColor: isStepValid() ? '#63AB45' : '#ccc',
                  color: '#fff',
                  borderRadius: '4px',
                  cursor: isStepValid() ? 'pointer' : 'not-allowed',
                  fontSize: '16px'
                }}
              >
                Suivant
              </button>
            )}
          </div>
        </div>

        {/* Résumé de la recherche */}
        {(searchData.destination || searchData.category) && (
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{ 
              margin: '0 0 15px 0', 
              color: '#63AB45',
              fontSize: '18px'
            }}>
              Votre recherche
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '10px' 
            }}>
              {searchData.destination && (
                <div>
                  <strong style={{ color: '#000' }}>Destination:</strong>
                  <span style={{ marginLeft: '8px', color: '#666' }}>{searchData.destination}</span>
                </div>
              )}
              {searchData.category && (
                <div>
                  <strong style={{ color: '#000' }}>Catégorie:</strong>
                  <span style={{ marginLeft: '8px', color: '#666' }}>
                    {searchData.category === 'luxe' ? 'Luxe' : 'Simple'}
                  </span>
                </div>
              )}
              <div>
                <strong style={{ color: '#000' }}>Budget:</strong>
                <span style={{ marginLeft: '8px', color: '#666' }}>
                  {searchData.priceRange[0]}€ - {searchData.priceRange[1]}€
                </span>
              </div>
              {searchData.dates.checkin && searchData.dates.checkout && (
                <div>
                  <strong style={{ color: '#000' }}>Dates:</strong>
                  <span style={{ marginLeft: '8px', color: '#666' }}>
                    {searchData.dates.checkin} au {searchData.dates.checkout}
                  </span>
                </div>
              )}
              {searchData.contact.nom && searchData.contact.email && (
                <div>
                  <strong style={{ color: '#000' }}>Contact:</strong>
                  <span style={{ marginLeft: '8px', color: '#666' }}>
                    {searchData.contact.prenom} {searchData.contact.nom} - {searchData.contact.email}
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
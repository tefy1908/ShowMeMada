// Components/CardItemTeam.jsx
import React, { useState } from 'react';

const CardItemTeam = ({ 
  name = "John Doe", 
  title = "Guide Professionnel", 
  image = "https://i.ibb.co/1f5RVjV/764fdbe2-f549-4a55-bb87-c0396839183f.jpg",
  experience = "5 ans d'expérience",
  specialty = "Faune endémique",
  onContact
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);



  // Styles adaptés à votre thème
  const profileCardStyle = {
    width: '100%',
    maxWidth: '280px',
    margin: '0 auto',
    borderRadius: '25px',
    background: '#ffffff',
    boxShadow: isHovered 
      ? '0 15px 35px rgba(99, 171, 69, 0.2), 0 5px 15px rgba(0,0,0,0.1)'
      : '0 8px 25px rgba(0,0,0,0.1)',
    padding: '25px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'default',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    border: '1px solid #f0f0f0'
  };

  const profileImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    margin: '0 auto 20px',
    overflow: 'hidden',
    border: '4px solid #63AB45',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const nameStyle = {
    margin: '0 0 8px 0',
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    color: '#63AB45',
    marginBottom: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: 'Arial, sans-serif'
  };

  const experienceStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '15px',
    fontFamily: 'Arial, sans-serif'
  };

  const specialtyStyle = {
    background: 'linear-gradient(135deg, #63AB45, #4a8c33)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    display: 'inline-block',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const contactBtnStyle = {
    padding: '10px 24px',
    border: 'none',
    borderRadius: '25px',
    background: isContactHovered 
      ? 'linear-gradient(135deg, #4a8c33, #63AB45)'
      : 'linear-gradient(135deg, #63AB45, #4a8c33)',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '600',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 15px rgba(99, 171, 69, 0.3)',
    transform: isContactHovered ? 'translateY(-2px)' : 'translateY(0)',
    width: '100%'
  };

  return (
    <div 
      style={profileCardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={profileImageStyle}>
        <img src={image} alt={name} style={imgStyle} />
      </div>
      
      <div>
        <h3 style={nameStyle}>{name}</h3>
        <p style={titleStyle}>{title}</p>
        <p style={experienceStyle}>{experience}</p>
        <div style={specialtyStyle}>{specialty}</div>
        
    
      </div>
    </div>
  );
};

export default CardItemTeam;
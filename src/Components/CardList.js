import React from 'react';

const CardList = () => {
  const cards = [
    {
      id: 1,
      title: 'trust & co.',
      description: 'Fill out the form and the algorithm will offer the right team of experts',
      image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [
        { name: 'branding', color: '#d3b19a', class: 'branding' },
        { name: 'packaging', color: '#70b3b1', class: 'packaging' }
      ],
      iconColor: '#d3b19a'
    },
    {
      id: 2,
      title: 'tonic',
      description: 'Fill out the form and the algorithm will offer the right team of experts',
      image: 'https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [
        { name: 'branding', color: '#d3b19a', class: 'branding' },
        { name: 'marketing', color: '#d05fa2', class: 'marketing' }
      ],
      iconColor: '#70b3b1'
    },
    {
      id: 3,
      title: 'shower gel',
      description: 'Fill out the form and the algorithm will offer the right team of experts',
      image: 'https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [
        { name: 'branding', color: '#d3b19a', class: 'branding' },
        { name: 'packaging', color: '#70b3b1', class: 'packaging' },
        { name: 'marketing', color: '#d05fa2', class: 'marketing' }
      ],
      iconColor: '#d05fa2'
    }
  ];

  // Fonction pour assombrir une couleur
  const darkenColor = (hex, percent) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + 
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  // Styles
  const sectionStyle = {
    paddingBlock: 'min(20vh, 2rem)',
    width: 'calc(min(76.5rem, 90%))',
    marginInline: 'auto',
    color: '#111',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400
  };

  const h2Style = {
    textTransform: 'capitalize',
    letterSpacing: '0.025em',
    fontSize: 'clamp(2rem, 1.8125rem + 0.75vw, 2.6rem)',
    margin: 0
  };

  const containerStyle = {
    marginTop: '5em',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  };

  const cardInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '18.75rem',
    background: '#fff',
    borderRadius: '1.25rem',
    borderBottomRightRadius: 0,
    overflow: 'hidden'
  };

  const boxStyle = {
    width: '100%',
    height: '100%',
    background: '#fff',
    borderRadius: '1.25rem',
    overflow: 'hidden',
    position: 'relative'
  };

  const imgBoxStyle = {
    position: 'absolute',
    inset: 0
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const iconStyle = (color) => ({
    position: 'absolute',
    bottom: '-0.375rem',
    right: '-0.375rem',
    width: '6rem',
    height: '6rem',
    background: color,
    borderTopLeftRadius: '50%'
  });

  const iconBeforeStyle = {
    position: 'absolute',
    content: '""',
    bottom: '0.375rem',
    left: '-1.25rem',
    background: 'transparent',
    width: '1.25rem',
    height: '1.25rem',
    borderBottomRightRadius: '1.25rem',
    boxShadow: '0.313rem 0.313rem 0 0.313rem #fff'
  };

  const iconAfterStyle = (color) => ({
    position: 'absolute',
    content: '""',
    top: '-1.25rem',
    right: '0.375rem',
    background: 'transparent',
    width: '1.25rem',
    height: '1.25rem',
    borderBottomRightRadius: '1.25rem',
    boxShadow: `0.313rem 0.313rem 0 0.313rem ${color}`
  });

  const iconBoxStyle = {
    position: 'absolute',
    inset: '0.625rem',
    background: '#282828',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5rem'
  };

  const contentStyle = {
    padding: '0.938rem 0.625rem'
  };

  const h3Style = {
    textTransform: 'capitalize',
    fontSize: 'clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem)',
    margin: 0
  };

  const pStyle = {
    margin: '0.625rem 0 1.25rem',
    color: '#565656'
  };

  const ulStyle = {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.625rem'
  };

  const liStyle = (bgColor, textColor) => ({
    textTransform: 'uppercase',
    background: bgColor,
    color: textColor,
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '0.375rem 0.625rem',
    borderRadius: '0.188rem'
  });

  const getTagTextColor = (className) => {
    switch (className) {
      case 'branding':
        return darkenColor('#d3b19a', 40);
      case 'packaging':
        return darkenColor('#70b3b1', 40);
      case 'marketing':
        return darkenColor('#d05fa2', 40);
      default:
        return '#282828';
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#fff',
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      margin: 0,
      padding: 0
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
      
      <section style={sectionStyle}>
        <h2 style={h2Style}>leading companies<br />have trusted us</h2>
        <div style={containerStyle}>
          {cards.map((card) => (
            <div key={card.id} style={cardStyle}>
              <div style={cardInnerStyle}>
                <div style={boxStyle}>
                  <div style={imgBoxStyle}>
                    <img src={card.image} alt={card.title} style={imgStyle} />
                  </div>
                  <div style={iconStyle(card.iconColor)}>
                    <div style={iconBeforeStyle}></div>
                    <div style={iconAfterStyle(card.iconColor)}></div>
                    <a href="#" style={iconBoxStyle}>
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div style={contentStyle}>
                <h3 style={h3Style}>{card.title}</h3>
                <p style={pStyle}>{card.description}</p>
                <ul style={ulStyle}>
                  {card.tags.map((tag, index) => (
                    <li
                      key={index}
                      style={liStyle(tag.color, getTagTextColor(tag.class))}
                    >
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardList;
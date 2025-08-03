import React, { useState, useEffect, useRef } from 'react';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const autoPlayInterval = useRef(null);
  const progressBarRef = useRef(null);

  const slides = [
    {
      number: '01',
      title: 'Cosmic Dreams',
      description: 'Journey through infinite possibilities where reality bends and imagination soars beyond the stars.',
      backgroundImage: 'https://picsum.photos/1920/1080?random=1',
      slideImage: 'https://picsum.photos/400/300?random=1'
    },
    {
      number: '02',
      title: 'Urban Pulse',
      description: 'Feel the rhythm of city life where neon lights dance with shadows in the endless metropolitan symphony.',
      backgroundImage: 'https://picsum.photos/1920/1080?random=2',
      slideImage: 'https://picsum.photos/400/300?random=2'
    },
    {
      number: '03',
      title: 'Ocean Depths',
      description: 'Dive into mysterious waters where ancient secrets whisper through currents of time and space.',
      backgroundImage: 'https://picsum.photos/1920/1080?random=3',
      slideImage: 'https://picsum.photos/400/300?random=3'
    },
    {
      number: '04',
      title: 'Desert Mirage',
      description: 'Witness the dance of heat and sand where mirages reveal hidden truths in the vast golden expanse.',
      backgroundImage: 'https://picsum.photos/1920/1080?random=4',
      slideImage: 'https://picsum.photos/400/300?random=4'
    },
    {
      number: '05',
      title: 'Forest Magic',
      description: 'Step into enchanted woods where every leaf tells a story and magic flows through ancient roots.',
      backgroundImage: 'https://picsum.photos/1920/1080?random=5',
      slideImage: 'https://picsum.photos/400/300?random=5'
    }
  ];

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    updateProgress();

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);

    if (progressBarRef.current) {
      progressBarRef.current.style.transform = 'scaleX(1)';
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = 'scaleX(0)';
    }
  };

  const updateProgress = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.transform = 'scaleX(0)';

      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = 'transform 5s linear';
          if (autoPlayInterval.current) {
            progressBarRef.current.style.transform = 'scaleX(1)';
          }
        }
      }, 50);
    }
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;
    
    const handleTouchEnd = (endEvent) => {
      const endX = endEvent.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    startAutoPlay();
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('mouseenter', stopAutoPlay);
    document.addEventListener('mouseleave', startAutoPlay);

    return () => {
      stopAutoPlay();
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseenter', stopAutoPlay);
      document.removeEventListener('mouseleave', startAutoPlay);
    };
  }, []);

  // Styles
  const containerStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    background: '#000',
    overflow: 'hidden',
    cursor: 'none',
    position: 'relative',
    width: '100vw',
    height: '100vh'
  };

  const slideStyle = (index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: index === currentSlide ? 1 : 0,
    visibility: index === currentSlide ? 'visible' : 'hidden',
    transition: 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
    transform: index === currentSlide 
      ? 'scale(1) rotate(0deg)' 
      : index < currentSlide 
        ? 'scale(0.9) rotate(-2deg) translateX(-50px)'
        : 'scale(0.9) rotate(2deg) translateX(50px)'
  });

  const slideBackgroundStyle = (backgroundImage, isActive) => ({
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '120%',
    height: '120%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: isActive ? 'skewX(-5deg) scale(1.05)' : 'skewX(-15deg)',
    transition: 'transform 1.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
    opacity: isActive ? 1 : 0
  });

  const slideOverlayStyle = (isActive) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))',
    transform: isActive ? 'skewX(-3deg)' : 'skewX(-10deg)',
    transition: 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
  });

  const slideContentStyle = (isActive) => ({
    position: 'absolute',
    top: '50%',
    left: '15%',
    color: 'white',
    zIndex: 10,
    opacity: isActive ? 1 : 0,
    transform: isActive 
      ? 'translateY(-50%) translateX(0) skewX(-5deg)' 
      : 'translateY(-50%) translateX(-100px) skewX(-20deg)',
    transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)'
  });

  const slideNumberStyle = {
    fontSize: '8rem',
    fontWeight: 900,
    lineHeight: 0.8,
    opacity: 0.7,
    marginBottom: '1rem',
    transform: 'skewX(-25deg)',
    background: 'linear-gradient(45deg, #ff0, #ffd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.9)) drop-shadow(2px 2px 4px rgba(0, 0, 0, 1)) drop-shadow(-2px -2px 4px rgba(0, 0, 0, 0.8))'
  };

  const slideTitleStyle = {
    fontSize: '4rem',
    fontWeight: 700,
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transform: 'skewX(-15deg)',
    textShadow: '0 0 30px rgba(0, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1), -2px -2px 8px rgba(0, 0, 0, 0.8), 4px 4px 15px rgba(0, 0, 0, 0.7)'
  };

  const slideDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    maxWidth: '500px',
    opacity: 0.9,
    transform: 'skewX(-8deg)',
    textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 1)'
  };

  const slideImageStyle = (isActive) => ({
    position: 'absolute',
    top: '50%',
    right: '10%',
    width: '400px',
    height: '300px',
    transform: isActive 
      ? 'translateY(-50%) skewX(-5deg) scale(1)' 
      : 'translateY(-50%) skewX(-15deg) scale(0.8)',
    opacity: isActive ? 1 : 0,
    transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
  });

  const navigationStyle = {
    position: 'fixed',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '15px',
    zIndex: 100
  };

  const navDotStyle = (isActive) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: isActive ? '#ff6b6b' : 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isActive ? 'scale(1.5) skewX(-10deg)' : 'skewX(-25deg)',
    boxShadow: isActive ? '0 0 20px rgba(255, 107, 107, 0.8)' : 'none'
  });

  const navArrowStyle = (direction) => ({
    position: 'fixed',
    top: '50%',
    [direction]: '40px',
    transform: 'translateY(-50%) skewX(-20deg)',
    width: '60px',
    height: '60px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  });

  const arrowIconStyle = (direction) => ({
    width: '12px',
    height: '12px',
    borderTop: '2px solid white',
    borderRight: '2px solid white',
    transform: direction === 'prev' ? 'rotate(-135deg)' : 'rotate(45deg)',
    marginLeft: direction === 'prev' ? '5px' : '0',
    marginRight: direction === 'next' ? '5px' : '0'
  });

  const progressBarStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)',
    zIndex: 100,
    transformOrigin: 'left',
    transform: 'scaleX(0) skewX(-10deg)',
    transition: 'transform 5s linear'
  };

  const customCursorStyle = {
    position: 'fixed',
    width: '20px',
    height: '20px',
    background: '#ff6b6b',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 1000,
    mixBlendMode: 'difference',
    transition: 'transform 0.1s ease',
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <div key={index} style={slideStyle(index)}>
            <div style={slideBackgroundStyle(slide.backgroundImage, index === currentSlide)}></div>
            <div style={slideOverlayStyle(index === currentSlide)}></div>
            <div style={slideContentStyle(index === currentSlide)}>
              <div style={slideNumberStyle}>{slide.number}</div>
              <h2 style={slideTitleStyle}>{slide.title}</h2>
              <p style={slideDescriptionStyle}>{slide.description}</p>
            </div>
            <div style={slideImageStyle(index === currentSlide)}>
              <img 
                src={slide.slideImage} 
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={navigationStyle}>
        {slides.map((_, index) => (
          <div 
            key={index}
            style={navDotStyle(index === currentSlide)}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div 
        style={navArrowStyle('left')}
        onClick={prevSlide}
      >
        <div style={arrowIconStyle('prev')}></div>
      </div>

      <div 
        style={navArrowStyle('right')}
        onClick={nextSlide}
      >
        <div style={arrowIconStyle('next')}></div>
      </div>

      <div ref={progressBarRef} style={progressBarStyle}></div>
      <div style={customCursorStyle}></div>
    </div>
  );
};

export default SlideShow;
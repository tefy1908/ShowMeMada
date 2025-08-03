import React, { useEffect, useRef, useState } from 'react';

const DraggableVertical = () => {
  const vertRef = useRef(null);
  const dragRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // État pour les variables CSS
  const [dvar, setDvar] = useState(0);
  const [xvar, setXvar] = useState(0);
  
  // Variables pour le drag
  const isDragging = useRef(false);
  const dragValue = useRef(0);
  const clickOffsetY = useRef(0);
  const lastTop = useRef(0);
  const lastTime = useRef(performance.now());
  const smoothedVelocity = useRef(0);
  const velocityStrength = 164;
  const velocityEase = 0.2;
  const velocityDecay = 0.1;
  const lastUpdateTime = useRef(0);
  const rafId = useRef(null);
  const updateInterval = 10;
  
  // Variables pour l'oscillation idle
  const lastInteractionTime = useRef(performance.now());
  const idleOscillating = useRef(false);
  const idleStartTime = useRef(0);

  const images = [
    'https://picsum.photos/id/43/300',
    'https://picsum.photos/id/58/300',
    'https://picsum.photos/id/61/300',
    'https://picsum.photos/id/79/300',
    'https://picsum.photos/id/88/300',
    'https://picsum.photos/id/91/300',
    'https://picsum.photos/id/115/300',
    'https://picsum.photos/id/121/300',
    'https://picsum.photos/id/130/300',
    'https://picsum.photos/id/192/300',
    'https://picsum.photos/id/209/300'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseDown = (e) => {
    lastInteractionTime.current = performance.now();
    if (idleOscillating.current) idleOscillating.current = false;
    isDragging.current = true;
    const dragRect = dragRef.current.getBoundingClientRect();
    clickOffsetY.current = e.clientY - dragRect.top;
    document.body.style.userSelect = 'none';
    lastTop.current = dragRef.current.offsetTop;
    lastTime.current = performance.now();
  };

  const handleMouseMove = (e) => {
    lastInteractionTime.current = performance.now();
    if (!isDragging.current || rafId.current) return;
    if (idleOscillating.current) idleOscillating.current = false;

    rafId.current = requestAnimationFrame(() => {
      const now = performance.now();
      const deltaTime = now - lastTime.current;
      const vertRect = vertRef.current.getBoundingClientRect();
      let newTop = e.clientY - vertRect.top - clickOffsetY.current;
      const maxTop = vertRef.current.offsetHeight - dragRef.current.offsetHeight;
      newTop = Math.max(0, Math.min(newTop, maxTop));

      dragRef.current.style.top = `${newTop}px`;
      dragValue.current = newTop / maxTop;

      if (now - lastUpdateTime.current >= updateInterval) {
        const cleanValue = parseFloat(dragValue.current.toFixed(4));
        setDvar(cleanValue);
        lastUpdateTime.current = now;
      }

      const deltaPos = newTop - lastTop.current;
      const rawVelocity = deltaTime > 0 ? deltaPos / deltaTime : 0;
      smoothedVelocity.current += (rawVelocity - smoothedVelocity.current) * velocityEase;
      const outputVelocity = Math.max(-velocityStrength, Math.min(velocityStrength, smoothedVelocity.current * velocityStrength));
      setXvar(parseFloat(outputVelocity.toFixed(4)));
      
      lastTop.current = newTop;
      lastTime.current = now;
      rafId.current = null;
    });
  };

  const easeVelocityToZero = () => {
    if (isDragging.current) {
      requestAnimationFrame(easeVelocityToZero);
      return;
    }
    smoothedVelocity.current += (0 - smoothedVelocity.current) * velocityDecay;
    const outputVelocity = smoothedVelocity.current * velocityStrength;
    setXvar(parseFloat(outputVelocity.toFixed(4)));

    if (Math.abs(smoothedVelocity.current) > 0.001) {
      requestAnimationFrame(easeVelocityToZero);
    }
  };

  const handleMouseUp = () => {
    lastInteractionTime.current = performance.now();
    if (idleOscillating.current) idleOscillating.current = false;
    isDragging.current = false;
    document.body.style.userSelect = '';
    easeVelocityToZero();
  };

  const startIdleOscillation = () => {
    if (idleOscillating.current || isDragging.current) return;
    idleOscillating.current = true;
    idleStartTime.current = performance.now();
    const vertHeight = vertRef.current.offsetHeight - dragRef.current.offsetHeight;
    
    const animateIdle = () => {
      if (isDragging.current) {
        idleOscillating.current = false;
        return;
      }
      const now = performance.now();
      const elapsed = (now - idleStartTime.current) / 1000;
      const frequency = 0.12;
      const amplitude = 0.4;
      const phaseOffset = Math.PI / -2;
      const dvarValue = 0.5 + Math.sin(elapsed * 2 * Math.PI * frequency + phaseOffset) * amplitude;
      const newTop = dvarValue * vertHeight;
      
      dragRef.current.style.top = `${newTop}px`;
      const cleanValue = parseFloat(dvarValue.toFixed(4));
      setDvar(cleanValue);
      
      const deltaTime = now - lastTime.current;
      const deltaPos = newTop - lastTop.current;
      const rawVelocity = deltaTime > 0 ? deltaPos / deltaTime : 0;
      smoothedVelocity.current += (rawVelocity - smoothedVelocity.current) * velocityEase;
      const outputVelocity = Math.max(-velocityStrength, Math.min(velocityStrength, smoothedVelocity.current * velocityStrength));
      setXvar(parseFloat(outputVelocity.toFixed(4)));
      
      lastTop.current = newTop;
      lastTime.current = now;
      requestAnimationFrame(animateIdle);
    };
    animateIdle();
  };

  const monitorIdle = () => {
    requestAnimationFrame(() => {
      const now = performance.now();
      if (!isDragging.current && !idleOscillating.current && now - lastInteractionTime.current > 3200) {
        startIdleOscillation();
      }
      monitorIdle();
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    monitorIdle();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: '#09090a',
    fontSize: 'clamp(24px, min(4vw, 6vh), 42px)',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  };

  const vertStyle = {
    position: 'relative',
    width: '12em',
    height: '12em'
  };

  const dragStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4rem',
    cursor: 'grab',
    color: '#fff',
    transformStyle: 'preserve-3d',
    perspective: '1200px',
    transition: 'all ease-out 1s',
    transform: isLoaded ? `rotateX(${16 - (2 * 16 * dvar)}deg)` : 'none'
  };

  const rectBaseStyle = {
    position: 'absolute',
    margin: 'auto',
    transformStyle: 'preserve-3d',
    left: 0,
    right: 0,
    width: '2rem',
    height: '100%',
    translate: '4rem',
    transformOrigin: '-3rem 50%',
    boxShadow: 'inset 0 0 0 1px gray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all ease-out 2s'
  };

  const faceStyle = {
    position: 'absolute',
    boxShadow: 'inset 0 0 0 1px gray',
    background: '#09090a'
  };

  return (
    <div style={containerStyle}>
      <div ref={vertRef} style={vertStyle}>
        <div
          ref={dragRef}
          onMouseDown={handleMouseDown}
          style={dragStyle}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...rectBaseStyle,
                backgroundImage: `linear-gradient(rgba(9, 9, 10, 0.3), rgba(9, 9, 10, 0.3)), url(${image})`,
                transform: isLoaded 
                  ? `rotateY(${360 * (index / 11 + dvar)}deg) rotateX(${xvar}deg)` 
                  : 'none'
              }}
            >
              {/* Face gauche */}
              <span style={{
                ...faceStyle,
                width: '0.4rem',
                height: '100%',
                transformOrigin: '0% 50%',
                transform: 'rotateY(-90deg)'
              }}></span>
              
              {/* Face droite */}
              <span style={{
                ...faceStyle,
                width: '0.4rem',
                height: '100%',
                transformOrigin: '0% 50%',
                transform: 'rotateY(-90deg)',
                left: '100%'
              }}></span>
              
              {/* Face haut */}
              <span style={{
                ...faceStyle,
                width: '100%',
                height: '0.4rem',
                transformOrigin: '50% 0%',
                transform: 'rotateX(90deg)'
              }}></span>
              
              {/* Face bas */}
              <span style={{
                ...faceStyle,
                width: '100%',
                height: '0.4rem',
                transformOrigin: '50% 0%',
                transform: 'rotateX(90deg)',
                top: '100%'
              }}></span>
              
              {/* Face arrière */}
              <span style={{
                ...faceStyle,
                width: '100%',
                height: '100%',
                transformOrigin: '50% 50%',
                transform: 'translateZ(0.4rem)',
                background: 'rgba(9, 9, 10, 0.9)'
              }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraggableVertical;
import { Box, Typography } from "@mui/material";

const CardAboutUS = ({ title, description, icon }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexGrow: 1,
                bgcolor: 'white',
                borderRadius: '16px',
                flexDirection: 'column',
                padding: '32px 24px',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                
                // Box Shadow élégante
                boxShadow: '0 4px 20px rgba(99, 171, 69, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
                
                // Hover effects
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(99, 171, 69, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                    
                    // Animation de l'accent coloré
                    '&::before': {
                        transform: 'scaleX(1)',
                    }
                },

                // Accent coloré en haut
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(135deg, #63AB45 0%, #7BC142 100%)`,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease-in-out',
                },

                // Effet de brillance subtile
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    transition: 'left 0.5s ease-in-out',
                },

                '&:hover::after': {
                    left: '100%',
                }
            }}
        >
            {/* Icône (optionnelle) */}
            {icon && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, #63AB45 0%, #7BC142 100%)`,
                        color: 'white',
                        fontSize: '28px',
                        margin: '0 auto 8px auto',
                        boxShadow: '0 4px 12px rgba(99, 171, 69, 0.3)',
                    }}
                >
                    {icon}
                </Box>
            )}

            {/* Titre */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: '#2C3E50',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        lineHeight: 1.3,
                        letterSpacing: '-0.02em',
                        background: `linear-gradient(135deg, #63AB45 0%, #2C3E50 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    {title}
                </Typography>
            </Box>

            {/* Description */}
            <Box sx={{ display: 'flex' }}>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#64748B',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        '& strong': {
                            color: '#63AB45',
                            fontWeight: 600,
                        }
                    }}
                >
                    {description}
                </Typography>
            </Box>

            {/* Point décoratif en bas à droite */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    bgcolor: '#63AB45',
                    opacity: 0.3,
                    transition: 'all 0.3s ease-in-out',
                }}
            />
        </Box>
    );
};

export default CardAboutUS;
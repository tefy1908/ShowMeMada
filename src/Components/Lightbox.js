import { useRef } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

const navButtonSx = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  backgroundColor: "rgba(255,255,255,0.12)",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
  width: { xs: 44, md: 56 },
  height: { xs: 44, md: 56 },
  zIndex: 1,
};

// Visionneuse plein écran : flèches, clavier (← → Échap) et glissement du doigt sur mobile.
// images : [{ src, title, category }] ; index : photo affichée (null = fermée)
const Lightbox = ({ images, index, onClose, onChange }) => {
  const { t } = useTranslation();
  const touchStartX = useRef(null);
  const open = index !== null && index >= 0 && index < images.length;
  const image = open ? images[index] : null;

  const go = (delta) => onChange((index + delta + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      onKeyDown={handleKeyDown}
      aria-label={image?.title}
      slotProps={{ paper: { sx: { backgroundColor: "rgba(8,12,8,0.96)" } } }}
    >
      {image && (
        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 1, md: 10 },
            py: 8,
          }}
        >
          <Typography
            sx={{ position: "absolute", top: 20, left: 24, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}
          >
            {index + 1} / {images.length}
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label={t("common.close")}
            sx={{ position: "absolute", top: 12, right: 12, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          {images.length > 1 && (
            <IconButton onClick={() => go(-1)} aria-label={t("common.previous")} sx={{ ...navButtonSx, left: { xs: 8, md: 24 } }}>
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          )}

          <Box
            component="img"
            key={image.src}
            src={image.src}
            alt={image.title}
            sx={{
              maxWidth: "100%",
              maxHeight: "calc(100vh - 160px)",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              animation: "lightboxFade 0.25s ease-out",
              "@keyframes lightboxFade": { from: { opacity: 0 }, to: { opacity: 1 } },
            }}
          />

          {images.length > 1 && (
            <IconButton onClick={() => go(1)} aria-label={t("common.next")} sx={{ ...navButtonSx, right: { xs: 8, md: 24 } }}>
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          )}

          <Typography sx={{ mt: 2, color: "white", fontWeight: 600 }}>{image.category}</Typography>
        </Box>
      )}
    </Dialog>
  );
};

export default Lightbox;

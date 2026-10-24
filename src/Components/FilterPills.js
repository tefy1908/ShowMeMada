import { Box, ButtonBase } from "@mui/material";

const BRAND = "#63AB45";
const INK = "#1f2d3d";

// Rangée de pastilles de filtre (une seule active), défilable horizontalement sur mobile.
// items : [{ key, label, Icon?, count? }]
const FilterPills = ({ items, value, onChange, ariaLabel }) => (
  <Box
    role="tablist"
    aria-label={ariaLabel}
    sx={{
      display: "flex",
      gap: 1.25,
      overflowX: "auto",
      pb: 1,
      mx: { xs: -2, sm: 0 },
      px: { xs: 2, sm: 0 },
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" },
    }}
  >
    {items.map(({ key, label, Icon, count }) => {
      const active = key === value;
      return (
        <ButtonBase
          key={key}
          role="tab"
          aria-selected={active}
          onClick={() => onChange(key)}
          sx={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1.1,
            borderRadius: 999,
            fontFamily: "inherit",
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "1px solid",
            borderColor: active ? BRAND : "#e3e6ea",
            backgroundColor: active ? BRAND : "white",
            color: active ? "white" : INK,
            transition: "all 0.2s ease",
            "&:hover": { borderColor: BRAND, color: active ? "white" : BRAND },
            "&.Mui-focusVisible": { outline: `2px solid ${BRAND}`, outlineOffset: 2 },
          }}
        >
          {Icon && <Icon fontSize="small" />}
          {label}
          {count !== undefined && (
            <Box
              component="span"
              sx={{
                minWidth: 22,
                height: 22,
                px: 0.75,
                borderRadius: 999,
                fontSize: "0.75rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: active ? "rgba(255,255,255,0.25)" : "#f0f2f4",
              }}
            >
              {count}
            </Box>
          )}
        </ButtonBase>
      );
    })}
  </Box>
);

export default FilterPills;

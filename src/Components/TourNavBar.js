import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//icones
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const menutabs = [
  { key: "packages", icon: <PublicOutlinedIcon/> },
  { key: "hotel", icon:<BedOutlinedIcon/> },
  { key: "transport", icon: <DirectionsCarFilledOutlinedIcon/> }
];

export default function NavBar({ tab, setTab }) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div style={{
      display: "flex", justifyContent: "center", gap : isMobile ? 0 : 18, flexDirection : isMobile ? 'column' : 'row',
      marginTop: 12, marginBottom: 6
    }}>
      {menutabs.map((item, idx) => (
        <button
          key={item.key}
          onClick={() => setTab(idx)}
          style={{
            border: "none",
            background: tab === idx ? "#dff5df" : "transparent",
            color: tab === idx ? "#59c659" : "#333",
            fontWeight: tab === idx ? 700 : 500,
            fontSize: 17,
            padding: "6px 26px",
            borderRadius: 24,
            cursor: "pointer",
            display: "flex", alignItems: "center", gap: 7,
            transition: "all .2s", 
            justifyContent : isMobile ? 'center' : '',
          }}
        >
          <span>{item.icon}</span> {t(`Tours.tabs.${item.key}`)}
        </button>
      ))}
    </div>
  )
}

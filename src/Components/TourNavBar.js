const menutabs = [
  { name: "Tour Package", icon: "🌍" },
  { name: "Hotel", icon: "🏨" },
  { name: "Transports", icon: "🚌" }
];

export default function NavBar({ tab, setTab }) {
  return (
    <div style={{
      display: "flex", justifyContent: "center", gap: 18,
      marginTop: 12, marginBottom: 6
    }}>
      {menutabs.map((item, idx) => (
        <button
          key={item.name}
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
            transition: "all .2s"
          }}
        >
          <span>{item.icon}</span> {item.name}
        </button>
      ))}
    </div>
  )
}

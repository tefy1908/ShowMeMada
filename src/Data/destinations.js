import Antananarivo from "../Assets/Images/Antananarivo.jpg";
import Ampefy from "../Assets/Images/Ampefy.jpg";
import Antsirabe from "../Assets/Images/Antsirabe.jpg";
import Fianarantsoa from "../Assets/Images/Fianaranstoa.jpg";

// Textes (sous-titre, description, activités) : destinations.items.<key> dans les fichiers de traduction.
// activityIcons : type d'icône de chaque activité, dans le même ordre que la liste traduite.
// Les images en "/images/destinations/..." n'existent pas encore dans public/ : la carte affiche alors un visuel de remplacement.
export const destinationsByRegion = {
  hauts_plateaux: [
    {
      id: 1,
      key: "antananarivo",
      name: "Antananarivo",
      image: Antananarivo,
      category: "cultural",
      color: "#63AB45",
      activityIcons: ["museum", "camera", "camera", "museum"]
    },
    {
      id: 2,
      key: "antsirabe",
      name: "Antsirabe",
      image: Antsirabe,
      category: "thermal",
      color: "#63AB45",
      activityIcons: ["camera", "camera", "camera", "camera"]
    },
    {
      id: 3,
      key: "ampefy",
      name: "Ampefy",
      image: Ampefy,
      category: "nature",
      color: "#63AB45",
      activityIcons: ["camera", "camera", "camera", "camera"]
    },
    {
      id: 4,
      key: "fianarantsoa",
      name: "Fianarantsoa",
      image: Fianarantsoa,
      category: "cultural",
      color: "#63AB45",
      activityIcons: ["camera", "camera", "camera", "camera"]
    }
  ],
  ouest: [
    {
      id: 5,
      key: "morondava",
      name: "Morondava",
      image: "/images/destinations/morondava.jpg",
      category: "nature",
      color: "#f39c12",
      activityIcons: ["camera", "camera", "beach", "camera"]
    },
    {
      id: 6,
      key: "tsingy",
      name: "Tsingy de Bemaraha",
      image: "/images/destinations/tsingy.jpg",
      category: "adventure",
      color: "#f39c12",
      activityIcons: ["hiking", "camera", "camera", "camera"]
    },
    {
      id: 7,
      key: "bekopaka",
      name: "Bekopaka",
      image: "/images/destinations/bekopaka.jpg",
      category: "cultural",
      color: "#f39c12",
      activityIcons: ["camera", "camera", "camera", "camera"]
    },
    {
      id: 8,
      key: "mahajanga",
      name: "Mahajanga",
      image: "/images/destinations/mahajanga.jpg",
      category: "beach",
      color: "#f39c12",
      activityIcons: ["beach", "camera", "camera", "camera"]
    }
  ],
  est: [
    {
      id: 9,
      key: "andasibe",
      name: "Andasibe-Mantadia",
      image: "/images/destinations/andasibe.jpg",
      category: "nature",
      color: "#27ae60",
      activityIcons: ["camera", "park", "camera", "camera"]
    },
    {
      id: 10,
      key: "sainteMarie",
      name: "Sainte-Marie",
      image: "/images/destinations/sainte-marie.jpg",
      category: "beach",
      color: "#27ae60",
      activityIcons: ["camera", "beach", "camera", "camera"]
    },
    {
      id: 11,
      key: "manakara",
      name: "Manakara",
      image: "/images/destinations/manakara.jpg",
      category: "transport",
      color: "#27ae60",
      activityIcons: ["camera", "boat", "beach", "camera"]
    },
    {
      id: 12,
      key: "mananjary",
      name: "Mananjary",
      image: "/images/destinations/mananjary.jpg",
      category: "nature",
      color: "#27ae60",
      activityIcons: ["boat", "camera", "camera", "camera"]
    }
  ],
  nord: [
    {
      id: 13,
      key: "nosyBe",
      name: "Nosy Be",
      image: "/images/destinations/nosy-be.jpg",
      category: "beach",
      color: "#e74c3c",
      activityIcons: ["beach", "beach", "camera", "camera"]
    },
    {
      id: 14,
      key: "diego",
      name: "Diego Suarez",
      image: "/images/destinations/diego-suarez.jpg",
      category: "nature",
      color: "#e74c3c",
      activityIcons: ["camera", "hiking", "camera", "camera"]
    },
    {
      id: 15,
      key: "ambre",
      name: "Montagne d'Ambre",
      image: "/images/destinations/montagne-ambre.jpg",
      category: "nature",
      color: "#e74c3c",
      activityIcons: ["camera", "camera", "camera", "hiking"]
    }
  ],
  sud: [
    {
      id: 16,
      key: "tulear",
      name: "Tuléar",
      image: "/images/destinations/tulear.jpg",
      category: "beach",
      color: "#f39c12",
      activityIcons: ["beach", "camera", "camera", "camera"]
    },
    {
      id: 17,
      key: "ifaty",
      name: "Ifaty",
      image: "/images/destinations/ifaty.jpg",
      category: "beach",
      color: "#f39c12",
      activityIcons: ["beach", "park", "camera", "camera"]
    },
    {
      id: 18,
      key: "fortDauphin",
      name: "Fort Dauphin",
      image: "/images/destinations/fort-dauphin.jpg",
      category: "nature",
      color: "#f39c12",
      activityIcons: ["beach", "camera", "camera", "camera"]
    },
    {
      id: 19,
      key: "isalo",
      name: "Isalo",
      image: "/images/destinations/isalo.jpg",
      category: "adventure",
      color: "#f39c12",
      activityIcons: ["camera", "camera", "camera", "hiking"]
    }
  ]
};

export const regionKeys = Object.keys(destinationsByRegion);

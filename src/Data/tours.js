import Baobab from "../Assets/Images/Baobab.jpg";
import NosyBe from "../Assets/Images/nosyBe.jpg";
import Foret from "../Assets/Images/Foret.jpg";

// Données des circuits : les textes viennent des fichiers de traduction (Tours.packages.<key>)
const tourBase = [
  {
    id: 1,
    key: "morondava",
    DestinationImage: Baobab,
    DestinationName: "Morondava",
    Itinerary: ["Antananarivo", "Andasibe", "Ampefy", "Antsirabe", "Miandrivazo", "Morondava"],
    currentColor: "#ff6b35",
    priceRange: "€1,200 - €1,800",
  },
  {
    id: 2,
    key: "nosyBe",
    DestinationImage: NosyBe,
    DestinationName: "Nosy Be",
    Itinerary: ["Antananarivo", "Mahajanga", "Nosy Be"],
    currentColor: "#45b7d1",
    priceRange: "€900 - €1,400",
  },
  {
    id: 3,
    key: "andasibe",
    DestinationImage: Foret,
    DestinationName: "Andasibe-Mantadia",
    Itinerary: ["Antananarivo", "Andasibe-Mantadia"],
    currentColor: "green",
    priceRange: "€450 - €650",
  },
];

// Fusionne les données fixes et les textes traduits (à appeler à chaque rendu pour suivre la langue)
export const buildTourPackages = (t) =>
  tourBase.map((tour) => {
    const base = `Tours.packages.${tour.key}`;
    return {
      ...tour,
      Location: t(`${base}.location`),
      Description: t(`${base}.description`),
      detailedDescription: t(`${base}.detailedDescription`),
      duration: t(`${base}.duration`),
      difficulty: t(`${base}.difficulty`),
      bestTime: t(`${base}.bestTime`),
      highlights: t(`${base}.highlights`, { returnObjects: true }),
      included: t(`${base}.included`, { returnObjects: true }),
      notIncluded: t(`${base}.notIncluded`, { returnObjects: true }),
    };
  });

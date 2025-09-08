import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "../Components/Tourismcarroussel";
import { importAll, formatImagesForCarousel } from "..//Utils/ImportImage";
import { useState } from "react";
import { useEffect } from "react";
import TextTitle from "../Components/TextTitle";

const Services = () => {
  // Import toutes les images des différents dossiers
  const [fauneImages, setFauneImages] = useState([]);
  const [floreImages, setFloreImages] = useState([]);
  const [paysagesImages, setPaysagesImages] = useState([]);
  const [plagesImages, setPlagesImages] = useState([]);
  const [localesImages, setLocalesImages] = useState([]);

  useEffect(() => {
    // Méthode simple pour importer les images
    const importImages = () => {
      try {
        // Contexte des images Faune
        const context = require.context(
          "..//Assets/Images/Galerie/Faune",
          false,
          /\.(png|jpe?g|svg|webp)$/
        );

        // Contexte des images Flore
        const contextFlore = require.context(
          "..//Assets/Images/Galerie/Flore",
          false,
          /\.(png|jpe?g|svg|webp)$/
        );

        // Contexte des images Paysages
        const contextPaysages = require.context(
          "..//Assets/Images/Galerie/Paysage",
          false,
          /\.(png|jpe?g|svg|webp)$/
        );

        // Contexte des images Plages
        const contextPlages = require.context(
          "..//Assets/Images/Galerie/Plage",
          false,
          /\.(png|jpe?g|svg|webp)$/
        );
        // Contexte des images locales
        const contextLocales = require.context(
          "..//Assets/Images/Galerie/Locale",
          false,
          /\.(png|jpe?g|svg|webp)$/
        );

        // Clés des images
        const imageKeys = context.keys();
        const imageFloreKeys = contextFlore.keys();
        const imagePaysagesKeys = contextPaysages.keys();
        const imagePlagesKeys = contextPlages.keys();
        const imageLocalesKeys = contextLocales.keys();

        // Traitement des images Faune
        const imageArray = imageKeys.map((item, index) => {
          const imageSrc = context(item);
          const filename = item.replace("./", "").replace(/\.[^/.]+$/, "");

          return {
            id: index + 1,
            src: imageSrc.default || imageSrc,
            title: filename.replace(/[-_]/g, " "),
            category: "Faune",
          };
        });

        // Traitement des images Flore
        const imageArrayFlore = imageFloreKeys.map((item, index) => {
          const imageSrcFlore = contextFlore(item);
          const filenameFlore = item.replace("./", "").replace(/\.[^/.]+$/, "");

          return {
            id: index + 1,
            src: imageSrcFlore.default || imageSrcFlore,
            title: filenameFlore.replace(/[-_]/g, " "),
            category: "Flore",
          };
        });

        // Traitement des images Paysages
        const imageArrayPaysages = imagePaysagesKeys.map((item, index) => {
          const imageSrcPaysages = contextPaysages(item);
          const filenamePaysages = item
            .replace("./", "")
            .replace(/\.[^/.]+$/, "");

          return {
            id: index + 1,
            src: imageSrcPaysages.default || imageSrcPaysages,
            title: filenamePaysages.replace(/[-_]/g, " "),
            category: "Paysages",
          };
        });

        // Traitement des images Plages
        const imageArrayPlages = imagePlagesKeys.map((item, index) => {
          const imageSrcPlages = contextPlages(item);
          const filenamePlages = item
            .replace("./", "")
            .replace(/\.[^/.]+$/, "");

          return {
            id: index + 1,
            src: imageSrcPlages.default || imageSrcPlages,
            title: filenamePlages.replace(/[-_]/g, " "),
            category: "Plages",
          };
        });

        // Traitement des images locales

        const imageArrayLocales = imageLocalesKeys.map((item, index) => {
          const imageSrcLocales = contextLocales(item);
          const filenameLocales = item
            .replace("./", "")
            .replace(/\.[^/.]+$/, "");

          return {
            id: index + 1,
            src: imageSrcLocales.default || imageSrcLocales,
            title: filenameLocales.replace(/[-_]/g, " "),
            category: "Plages",
          };
        });

        console.log("Images Faune chargées:", imageArray);
        console.log("Images Flore chargées:", imageArrayFlore);
        console.log("Images Paysages chargées:", imageArrayPaysages);
        console.log("Images Plages chargées:", imageArrayPlages);
        console.log("Images locales chargées :", imageArrayLocales);

        setFauneImages(imageArray);
        setFloreImages(imageArrayFlore);
        setPaysagesImages(imageArrayPaysages);
        setPlagesImages(imageArrayPlages);
        setLocalesImages(imageArrayLocales);
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
        setFauneImages([]);
        setFloreImages([]);
        setPaysagesImages([]);
        setPlagesImages([]);
        setLocalesImages([]);
      }
    };

    importImages();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      padding={"20px "}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {" "}
        <TextTitle title={"Gallery.Title"} />
      </Box>
      {/* Container pour les faunes */}
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
        {/* Title section */}
        <Box display={"flex"} fontSize={"20px"} fontWeight={"700"}>
          Faune
        </Box>
        <Carousel images={fauneImages} />
      </Box>

      {/* Container pour les flores */}
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
        {/* Title section */}
        <Box display={"flex"} fontWeight={"700"} fontSize={"20px"}>
          Flore
        </Box>
        <Carousel images={floreImages} />
      </Box>

      {/* Container pour les paysages */}
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
        {/* Title section */}
        <Box display={"flex"} fontWeight={"700"} fontSize={"20px"}>
          Paysages
        </Box>
        <Carousel images={paysagesImages} />
      </Box>

      {/* Container pour les plages */}
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
        {/* Title section */}
        <Box display={"flex"} fontWeight={"700"} fontSize={"20px"}>
          Plages
        </Box>
        <Carousel images={plagesImages} />
      </Box>

      {/* Container pour les images locales */}
      <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
        {/* Title section */}
        <Box display={"flex"} fontWeight={"700"} fontSize={"20px"}>
          Locales
        </Box>
        <Carousel images={localesImages} />
      </Box>
    </Box>
  );
};

export default Services;

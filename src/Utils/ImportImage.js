export const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Fonction pour convertir les images importées en format pour le carousel
export const formatImagesForCarousel = (importedImages, category = 'Images') => {
  return Object.entries(importedImages).map(([path, src], index) => {
    // Extraire le nom du fichier sans extension pour le titre
    const filename = path.split('/').pop().replace(/\.[^/.]+$/, "");
    const title = filename.replace(/[-_]/g, ' '); // Remplace - et _ par des espaces
    
    return {
      id: index + 1,
      src: src.default || src, // Handle both default exports and direct imports
      title: title.charAt(0).toUpperCase() + title.slice(1), // Capitalise première lettre
      category: category
    };
  });
};
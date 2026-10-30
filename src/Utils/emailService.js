import emailjs from "@emailjs/browser";

// Identifiants EmailJS, lus depuis le fichier .env.local (non versionné) :
// REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_PUBLIC_KEY, REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const TEMPLATES = {
  contact: process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
};

if (PUBLIC_KEY) {
  emailjs.init({
    publicKey: PUBLIC_KEY,
    // Limite anti-spam : un envoi toutes les 10 s par navigateur
    limitRate: { id: "show-me-mada", throttle: 10000 },
  });
}

// Envoie un email via un template EmailJS ; les clés de `params` correspondent
// aux variables {{...}} du template
export const sendEmail = (templateId, params) => {
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    return Promise.reject(new Error("EmailJS non configuré : vérifier les variables REACT_APP_EMAILJS_* du .env"));
  }
  return emailjs.send(SERVICE_ID, templateId, params);
};

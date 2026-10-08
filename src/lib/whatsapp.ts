export const WHATSAPP_NUMBER = "917386531253";
export const WHATSAPP_DISPLAY_NUMBER = "+91 7386531253";

export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

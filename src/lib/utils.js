/**
 * Extracts the filename without extension from a Supabase storage URL
 * @param {string} url - The full public URL from Supabase
 * @returns {string} - The clean filename (e.g., "3sea")
 */
export const getFileNameFromUrl = (url) => {
  if (!url) return "";
  
  // 1. Get the part after the last slash (e.g., "3sea.JPG")
  const fileNameWithExtension = url.split('/').pop();
  
  // 2. Remove the extension (the part after the last dot)
  // This regex matches the dot and everything after it at the end of the string
  return fileNameWithExtension.replace(/\.[^/.]+$/, "");
};
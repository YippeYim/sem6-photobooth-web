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

export const getMaxShotFromFileName = (filename) => {
  if (!filename) return null;
  
  // \d matches the first digit (0-9)
  const match = filename.match(/\d/); 
  
  return match ? parseInt(match[0], 10) : null;

  return
}

/**
 * Reconstructs the full Supabase URL using environment variables.
 * @param {string} fileName - The clean name (e.g., "3sea")
 * @param {string} bucket - The name of your bucket (default: "frame-bucket")
 * @param {string} folder - The folder inside the bucket (default: "3-slot")
 * @param {string} ext - The file extension (default: "JPG")
 */
export const getUrlFromFileName = (fileName, bucket = "frame-bucket", folder, ext = "JPG") => {
  if (!fileName) return "";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  // Supabase Public Storage URL Pattern:
  // [ProjectURL]/storage/v1/object/public/[Bucket]/[Folder]/[FileName].[ext]
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${folder}/${fileName}.${ext}`;
};

/**
 * Generates a random integer between min and max (both inclusive).
 * @param {number} min - The starting number (e.g., 1)
 * @param {number} max - The ending number (e.g., 10)
 * @returns {number}
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
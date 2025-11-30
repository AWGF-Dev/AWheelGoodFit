// utils/assets.js
export function getAssetUrl(fileName) {
  return import.meta.env.BASE_URL + fileName;
}

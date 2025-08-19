export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};

export const convertCoordsInString = (coords: []) => coords.join(',');

export const convertStringInCoords = (coords: string) => {
  if (!coords) return [0, 0];
  return coords.split(',').map(item => Number(item));
};

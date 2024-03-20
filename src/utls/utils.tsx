/*const baseUrl = 'https://i.imgur.com';

export function getImageUrl(imageId: string): string {
  return `${baseUrl}/${imageId}.jpg`;
}*/

export function getImageUrl(imageId: string, size: string) {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

export function getImageUrlV2(person: { imageId: string; }, size: string) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

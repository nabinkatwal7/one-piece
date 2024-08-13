export function isImageUrl(url: string): boolean {
  const imagePattern = /\.(jpg|jpeg|png|gif)$/i;
  return imagePattern.test(url);
}

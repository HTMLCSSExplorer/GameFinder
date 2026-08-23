import noImagePlaceHolder from '../assets/Image Placeholder/noImagePlaceHolder.webp';

export const getCroppedUrl = (url: string): string => {
  if (!url) return noImagePlaceHolder;
  const target = '/media/';
  const index = url.indexOf(target);

  if (index === -1) return '';
  const insertAt = index + target.length;

  return `${url.slice(0, insertAt)}crop/600/400/${url.slice(insertAt)}`;
};

export const getCroppedUrl = (url: string): string => {
  const target = '/media/';
  const index = url.indexOf(target);

  if (index === -1) return '';
  const insertAt = index + target.length;

  return `${url.slice(0, insertAt)}crop/600/400/${url.slice(insertAt)}`;
};

// https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg
// https://media.rawg.io/media/crop/600/400/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg
// https://media.rawg.io/media/crop/600/400/games/20a/

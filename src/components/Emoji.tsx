import bullsEye from '../assets/Emojis/bulls-eye.webp';
import tUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, type ImageProps } from '@chakra-ui/react';
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) return;

  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh,
      alt: 'meh',
      boxSize:'35px'
    },
    4: {
      src: tUp,
      alt: 'recommended',
      boxSize:'25px'
    },
    5: {
      src: bullsEye,
      alt: 'Acceptional',
      boxSize:'35px'
    },
  };

  return <Image {...emojiMap[rating]} />;
}

export default Emoji;

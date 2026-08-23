import { HStack, Icon } from '@chakra-ui/react';

interface Props {
  platforms: Platform[];
}
import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from 'react-icons/fa';

import { MdPhoneIphone, MdGamepad, MdPieChart } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons/lib';
import type { Platform } from '@/hooks/usePlatforms';

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    mac: FaApple,
    windows: FaWindows,
    linux: FaLinux,
    xbox: FaXbox,
    iphone: MdPhoneIphone,
    ninntendo: MdGamepad,
    web: BsGlobe,
    pc: MdPieChart,
    playstation: FaPlaystation,
    playstation2: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    psp: FaPlaystation,
    'ps-vita': FaPlaystation,
  };
  return (
    <>
      <HStack>
        {platforms.map((platform) => {
          const IconComponent = iconMap[platform.slug] ?? BsGlobe;
          return <Icon color="gray.700" as={IconComponent} key={platform.id} />;
        })}
      </HStack>
    </>
  );
}

export default PlatformIconList;

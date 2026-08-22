import type { Platform } from '@/hooks/fetchGames';

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

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    mac: FaApple,
    windows: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    iphone: MdPhoneIphone,
    ninntendo: MdGamepad,
    web: BsGlobe,
    pc: MdPieChart,
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

import { HStack, Image } from '@chakra-ui/react';
import logo from '@/assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (query: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding={2}>
      <HStack>
        <Image src={logo} width="50px" />
      </HStack>
      <SearchInput onSearch={(query) => onSearch(query)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;

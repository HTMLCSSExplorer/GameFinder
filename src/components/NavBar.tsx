import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
function NavBar() {
  return (
    <HStack padding={2}>
      <HStack>
        <Image src={logo} width="50px" />
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;

import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
function NavBar() {
  return (
    <HStack justifyContent={'space-between'} padding={2}>
      <HStack>
        <Image src={logo} width="50px" />
        <Text>Site Title</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;

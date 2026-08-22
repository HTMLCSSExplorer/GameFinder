import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/Logo/logo.webp';
function NavBar() {
  return (
    <HStack>
      <Image src={logo} width="50px" />
      <Text>Site Title</Text>
    </HStack>
  );
}

export default NavBar;

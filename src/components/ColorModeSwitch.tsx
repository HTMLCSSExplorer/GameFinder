import { HStack, Switch } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root colorPalette="green">
        <Switch.HiddenInput />
        <Switch.Control onClick={toggleColorMode} />
        <Switch.Label whiteSpace={'nowrap'}>
          {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;

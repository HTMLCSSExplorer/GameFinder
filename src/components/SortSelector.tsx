import { Menu, Button, Portal } from '@chakra-ui/react';

function SortSelector() {
  return (
    <Menu.Root closeOnSelect>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner autoCapitalize="on">
          <Menu.Content color={'red'}>
            <Menu.Item value="" className="capitalize">
              Relevannce
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;

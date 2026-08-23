import { usePlatforms } from '@/hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react';

function PlatformSelector() {
  const { entities: platforms, error } = usePlatforms();

  if (error) return;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Relevance
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner autoCapitalize="on">
          <Menu.Content color={'red'}>
            {platforms.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                className="capitalize"
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;

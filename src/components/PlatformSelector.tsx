import { usePlatforms, type Platform } from '@/hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react';

interface Props {
  onPlatformChange: (platform: Platform) => void;
  onPlatformClearSelection: ()=>void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ selectedPlatform, onPlatformChange,onPlatformClearSelection }: Props) {
  const { entities: platforms, error } = usePlatforms();

  if (error) return;

  return (
    <Menu.Root closeOnSelect>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : 'Relevance'}
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
                onSelect={() => onPlatformChange(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
             <Menu.Item
             value='clear'
             onSelect={onPlatformClearSelection}
            
             >Clear</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;

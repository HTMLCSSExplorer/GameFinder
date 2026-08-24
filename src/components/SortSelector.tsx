import { Menu, Button, Portal } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

export type SortOrder =
  'relevance' | '-added' | '-released' | '-created' | '-updated' | '-rating';

export interface SortOrderOption {
  value: SortOrder;
  label: string;
}
interface Props {
  onOrder: (order: SortOrderOption) => void;
  selectedOrder: SortOrderOption | null;
}

function SortSelector({ onOrder, selectedOrder }: Props) {
  const [isOpen, setOpen] = useState(false);
  const sortOrders: SortOrderOption[] = [
    { value: 'relevance', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: '-released', label: 'Release Date' },
    { value: '-created', label: 'Created Date' },
    { value: '-updated', label: 'Last Update' },
    { value: '-rating', label: 'Rating' },
  ];

  return (
    <Menu.Root closeOnSelect>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <BsChevronDown /> : <BsChevronRight />}
          Order by: {selectedOrder ? selectedOrder.label : 'Relevance'}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner autoCapitalize="on">
          <Menu.Content color={'red'}>
            {sortOrders.map((sortOrder) => (
              <Menu.Item
                value={sortOrder.value}
                key={sortOrder.label}
                className="capitalize"
                onSelect={() => {
                  onOrder(sortOrder);
                  setOpen(!isOpen);
                }}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;

import { Box } from '@chakra-ui/react';
import { type ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function BoxContainer({ children }: Props) {
  return (
    <Box borderRadius={5} overflow={'hidden'}>
      {children}
    </Box>
  );
}

export default BoxContainer;

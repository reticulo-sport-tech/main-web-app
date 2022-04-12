import { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface TextUnderlineProps {
  children: ReactNode;
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={'span'}
      color={useColorModeValue('brand.400', 'white')}
      position={'relative'}
      zIndex={10}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '30%',
        bg: useColorModeValue('brand.100', 'brand.500'),
        zIndex: -1,
      }}>
      {children}
    </Box>
  );
};

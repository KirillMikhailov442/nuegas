'use client';

import chakraTheme from '@/configs/chakraTheme';
import { ChakraProvider } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
    </Provider>
  );
};

export default Providers;

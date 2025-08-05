'use client';

import chakraTheme from '@/configs/chakraTheme';
import { ChakraProvider } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';

const query = new QueryClient();

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={query}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Open Sans, sans-serif',
          },
        }}>
        <Provider store={store}>
          <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
        </Provider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default Providers;

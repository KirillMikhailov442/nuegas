'use client';

import chakraTheme from '@configs/chakraTheme';
import { ChakraProvider } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={query}>
      <ConfigProvider
        locale={ruRU}
        theme={{
          token: {
            fontFamily: 'Golos Text, sans-serif',
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

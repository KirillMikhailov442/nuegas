import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Providers from '@layouts/Providers';
import { Toaster } from 'sonner';
import favicon from '@public/favicon.ico';

import '@styles/globals.scss';
import Modals from '@components/Modals';
import { SITE_DESCRIPTION, SITE_NAME } from '@/configs/SEO';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `${SITE_NAME} | %s`,
    default: `${SITE_NAME} | Главная`,
  },
  icons: favicon.src,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.className} antialiased`}>
        <Providers>
          <Toaster richColors />
          <Modals />
          <div className="wrapper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

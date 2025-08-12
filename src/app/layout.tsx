import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import Providers from '@layouts/Providers';
import { Toaster } from 'sonner';
import favicon from '@public/favicon.ico';

import '@styles/globals.scss';
import '@styles/libs.scss';
import '@styles/vars.css';
import 'react-spring-bottom-sheet/dist/style.css';
import Modals from '@components/Modals';
import { SITE_DESCRIPTION, SITE_NAME } from '@configs/SEO';
import logo_img from '@images/logo.svg';

const golosText = Golos_Text({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `${SITE_NAME} | %s`,
    default: `${SITE_NAME} | Главная`,
  },
  openGraph: {
    images: [logo_img.src],
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
      <body className={`${golosText.className} antialiased`}>
        <Providers>
          <Toaster richColors />
          <Modals />
          <div className="wrapper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

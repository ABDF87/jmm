import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
<link rel='icon' href='/favicon.ico' sizes='any' />;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jean-Marc Mazzoni',
  description: 'food photography',
  icons: {
    icon: 'app/favicon/android-chrome-192x192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          href='/favicon/android-chrome-192x192.png'
          type='image/png'
          sizes='192x192'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap'
          rel='stylesheet'
          type='text/css'
        /> 
        

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

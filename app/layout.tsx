import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
<link rel='icon' href='/favicon.ico' sizes='any' />;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jean-Marc Mazzoni',
  description: 'food phtorhraphy',
  icons: {
    icon: '/favicon.ico',
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
          href='/apple-touch-icon.png'
          type='image/<generated>'
          sizes='<generated>'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap'
          rel='stylesheet'
          type='text/css'
        />

        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

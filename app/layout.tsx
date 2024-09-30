import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jean-Marc Mazzoni - Food photographer',
  description: 'Food photography portfolio',
  keywords:
    'food photography, food photography for restourants, photographer portfolio, photographer food, food photographer, JM Mazzoni, Jean-Marc Mazzoni, food photo, food photo for restourants ood photography,Food photography for restaurant, Food photo, Food photographer, JM Mazzoni, Jean-Marc Mazzoni, Jean-Marc Mazzoni food photography, Restaurant photography, Culinary photography, San Francisco  food photography, San Jose  food photography, San Mateo  food photography, Palo Alto  food photography, San Francisco  Bay Area food photography, Peninsula food photography, Burlingame  food photography, San Francisco  restaurant photography, San Jose  restaurant photography, San Mateo  restaurant photography, Palo Alto  restaurant photography, San Francisco  Bay Area restaurant photography, Peninsula restaurant photography, Burlingame restaurant photography, Food photography, Food photography for restaurant, Food photo, Food photographer, JM Mazzoni, Jean-Marc Mazzoni, Jean-Marc Mazzoni food photography, Restaurant photography, Culinary photography, San Francisco  food photography, San Jose  food photography, San Mateo  food photography, Palo Alto  food photography, San Francisco  Bay Area food photography, Peninsula food photography, Burlingame  food photography, San Francisco  restaurant photography, San Jose  restaurant photography, San Mateo  restaurant photography, Palo Alto  restaurant photography, San Francisco  Bay Area restaurant photography, Peninsula restaurant photography, Burlingame  restaurant photography, Cookbook photography, - Food and photography, Cooking photography Food photography, Menu photography, Food styling, Prop styling, Food stylist, Prop stylist, Photographer for food',
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
      <meta name="theme-color" content="#242424"/>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap'
          rel='stylesheet'
          type='text/css'
        />
        <link rel='icon' href='/favicon.ico'></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Create Next App`,
  description: `Generated by create next app`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <MantineProvider>
          <Navbar />
          <div className="p-4">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}

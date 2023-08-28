'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import { defaultLocale } from '@/middleware'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {lang: string};
}) {
  return (
    <Provider store={store}>
      <html lang={params.lang ?? defaultLocale}>
        <head>

        </head>
        <body className={inter.className} style={{backgroundColor: "#F5F5F5"}}>
          <header>
            <Nav params={params}/>
          </header>
          <div className='position-relative App'>
            {children}
          </div>
        </body>
      </html>
    </Provider>
  )
}
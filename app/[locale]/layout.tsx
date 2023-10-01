import '../styles/globals.scss'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

interface LocaleLayoutProps {
  children: ReactNode; // Use ReactNode type for children
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cz' }, { locale: 'ru' }]
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
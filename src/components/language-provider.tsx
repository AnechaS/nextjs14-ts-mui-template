'use client';

import { IntlProvider } from 'react-intl';

export type LanguageProviderProps = Readonly<{
  children: React.ReactNode;
  messages: Record<string, Record<string, string>>;
}>;

export default function LanguageProvider({ children, messages }: LanguageProviderProps) {
  // TODO: get locale from stage manager
  const locale = 'en';
  const appMessages = messages[locale] || messages.en;

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={appMessages}>
      {children}
    </IntlProvider>
  );
}

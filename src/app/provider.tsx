"use client";

import { NextIntlClientProvider, useMessages } from "next-intl";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

interface IProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: ReturnType<typeof useMessages>;
}

//   function ReduxProvider(props: React.PropsWithChildren) {
//     const storeRef = React.useRef<AppStore | null>(null)
//     if (!storeRef.current) {
//       storeRef.current = makeStore()
//     }

//     return <Provider store={storeRef.current}>{props.children}</Provider>
//   }

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function Providers({
  children,
  locale,
  messages,
}: IProvidersProps) {
  console.log("locale", locale);
  console.log("messages", messages);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* <ReduxProvider> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      {/* </ReduxProvider> */}
    </NextIntlClientProvider>
  );
}

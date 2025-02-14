import { getCookie, setCookie } from "@/utils/cookieUtils";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

type TTheme = "light" | "dark";

const useLayout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<TTheme | undefined>("light");
  const [currentLanguage, setCurrentLanguage] = useState(
    getCookie("locale") ?? "ko"
  );
  const onChangeTheme = (theme: string) => {
    setTheme(theme);
    setCurrentTheme(theme as TTheme);
  };

  const replaceLocalePath = (pathname: string, locale: string) => {
    const paths = pathname.split("/");
    paths[1] = locale;
    return paths.join("/");
  };

  const setCookieLocale = async (value: string) => {
    const newLocale = value.split("-")[0] || "ko";

    const redirectUrl = replaceLocalePath(pathname, newLocale);

    setCurrentLanguage(value);
    setCookie("locale", value, 365);
    setCookie("NEXT_LOCALE", newLocale, 365);

    // 다국어 페이지 전환
    router.replace(redirectUrl);
  };

  return {
    currentTheme,
    currentLanguage,
    setCookieLocale,
    setTheme,
    onChangeTheme,
  };
};

export default useLayout;

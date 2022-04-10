import React, { useContext, useState } from "react";
import { Language } from "./const";
import detectBrowserLanguage from "detect-browser-language";

type ContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<ContextType>({
  language: Language.Eng,
  setLanguage: () => {},
});

const interpretLanguageCode = (code: string): Language => {
  if (code === "zh-TW" || code === "zh-HK") {
    return Language.TC;
  } else if (code === "zh-CN" || code === "zh-SG") {
    return Language.SC;
  }
  return Language.Eng;
};

export const LangaugeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userLanguage: string = detectBrowserLanguage();

  const [language, setLanguage] = useState<Language>(
    interpretLanguageCode(userLanguage)
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return { language, setLanguage };
};

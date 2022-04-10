import React, { useContext, useState } from "react";
import { Language } from "./const";

type ContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<ContextType>({
  language: Language.Eng,
  setLanguage: () => {},
});

export const LangaugeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(Language.Eng);

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

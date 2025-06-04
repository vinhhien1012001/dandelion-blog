import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="hover:underline px-[30px] py-[10px]"
    >
      <Globe className="h-5 w-5" />
      <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;

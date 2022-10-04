import { _WORDS } from "i18n";

export const useTranslation = () => {
  return {
    t: (string) => _WORDS[string] || string,
  };
};

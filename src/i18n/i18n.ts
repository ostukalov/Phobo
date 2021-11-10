type Language = "ru" | "en";
type I18nKey = Partial<Record<Language, string>>;
type I18nFunctionKey = (props: any) => I18nKey;
type I18nDictionary = Record<string, I18nKey | I18nFunctionKey>;

type ExtractProps<D extends I18nDictionary, K extends keyof D> = D[K] extends (
  p: infer P
) => any
  ? [P]
  : [];

const getCurrentLanguage = (): Language => "ru";

export const createI18n = <D extends I18nDictionary>(i18nDict: D) => <
  K extends keyof D
>(
  key: K,
  ...[props]: ExtractProps<D, K>
): string => {
  const value = i18nDict[key];
  const lang = getCurrentLanguage();

  if (!value) return String(key);

  const result = typeof value === "function" ? value(props)[lang] : value[lang];

  return result ?? String(key);
};

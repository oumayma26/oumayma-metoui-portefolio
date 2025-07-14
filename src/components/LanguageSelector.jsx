import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="bg-transparent text-sm border-none focus:outline-none cursor-pointer"
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  const selectedLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-transparent text-gray-700 dark:text-gray-200 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{selectedLang.code.toUpperCase()}</span>
        <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
      </button>

      {open && (
        <ul className="absolute right-0 mt-1 w-24 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`cursor-pointer select-none px-4 py-2 text-center text-sm text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-sky-700 ${
                i18n.language === lang.code ? 'font-semibold text-sky-600 dark:text-sky-400' : ''
              }`}
            >
              {lang.code.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

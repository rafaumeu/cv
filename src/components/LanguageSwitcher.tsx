import { useLanguage } from '@/i18n/useLanguage';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 print:hidden">
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-3 py-1 rounded ${
          language === 'pt-BR' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en-US')}
        className={`px-3 py-1 rounded ${
          language === 'en-US' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}; 
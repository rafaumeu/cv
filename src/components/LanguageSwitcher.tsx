import { useLanguage } from '@/i18n/useLanguage';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 print:hidden" role="group" aria-label="Seletor de idioma">
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`
          px-3 py-1 rounded transition-colors duration-200
          ${language === 'pt-BR' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
          }
        `}
        aria-pressed={language === 'pt-BR'}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en-US')}
        className={`
          px-3 py-1 rounded transition-colors duration-200
          ${language === 'en-US' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
          }
        `}
        aria-pressed={language === 'en-US'}
      >
        EN
      </button>
    </div>
  );
}; 
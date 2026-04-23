import { useTheme } from '@/hooks/theme';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg print:hidden group relative overflow-hidden transition-all duration-300 ease-in-out"
      aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
        boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.1), 0 4px 20px rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="relative z-10">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-warning transition-transform duration-500 ease-in-out" style={{ transform: 'rotate(0deg)' }} />
        ) : (
          <Moon className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out" style={{ transform: 'rotate(0deg)' }} />
        )}
      </div>
      <style jsx>{`
        button:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.1));
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2), 0 6px 25px rgba(139, 92, 246, 0.2);
        }
        button:hover .lucide {
          transform: rotate(180deg);
        }
        [data-theme="dark"] button:hover .lucide {
          transform: rotate(-180deg);
        }
      `}</style>
    </button>
  );
}; 
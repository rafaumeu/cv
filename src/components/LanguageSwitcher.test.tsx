import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LanguageProvider } from '@/i18n/LanguageContext'

describe('LanguageSwitcher', () => {
  it('should toggle language when clicked', () => {
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn()
    }
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })

    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    
    // Muda para inglês
    fireEvent.click(button)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('language', 'en-US')
    
    // Muda para português
    fireEvent.click(button)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('language', 'pt-BR')
  })

  it('should show correct flag icon', () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Mudar idioma')
  })

  it('should persist language preference', () => {
    const localStorageMock = {
      getItem: vi.fn(() => 'en-US'),
      setItem: vi.fn()
    }
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })

    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    )

    expect(localStorageMock.getItem).toHaveBeenCalledWith('language')
  })
}) 
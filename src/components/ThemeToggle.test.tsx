import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeToggle } from './ThemeToggle'
import { ThemeProvider } from '@/providers/ThemeProvider'

describe('ThemeToggle', () => {
  it('should render theme toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    expect(screen.getByRole('button', { name: /alternar tema/i })).toBeInTheDocument()
  })

  it('should toggle theme on click', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button', { name: /alternar tema/i })
    const html = document.documentElement
    
    // Tema inicial é light
    expect(html).not.toHaveClass('dark')
    
    // Clique para mudar para dark
    fireEvent.click(button)
    expect(html).toHaveClass('dark')
    
    // Clique para voltar para light
    fireEvent.click(button)
    expect(html).not.toHaveClass('dark')
  })

  it('should persist theme preference', () => {
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn()
    }
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    })

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button', { name: /alternar tema/i })
    fireEvent.click(button)
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
  })
}) 
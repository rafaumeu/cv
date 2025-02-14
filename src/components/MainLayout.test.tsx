import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { MainLayout } from '@/layouts/MainLayout'

describe('MainLayout', () => {
  it('should render children content', () => {
    render(
      <ThemeProvider>
        <MainLayout>
          <div>Conteúdo de teste</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    expect(screen.getByText('Conteúdo de teste')).toBeInTheDocument()
  })

  it('should render theme toggle', () => {
    render(
      <ThemeProvider>
        <MainLayout>
          <div>Conteúdo</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    expect(screen.getByRole('button', { name: /alternar tema/i })).toBeInTheDocument()
  })

  it('should apply correct layout classes', () => {
    const { container } = render(
      <ThemeProvider>
        <MainLayout>
          <div>Conteúdo</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    const main = container.querySelector('main')
    expect(main).toHaveClass('min-h-screen')
  })
}) 
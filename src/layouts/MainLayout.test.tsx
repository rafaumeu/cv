import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MainLayout } from './MainLayout'
import { ThemeProvider } from '@/providers/ThemeProvider'

describe('MainLayout', () => {
  it('should render children content', () => {
    const { container } = render(
      <ThemeProvider>
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    expect(container.querySelector('main')).toBeInTheDocument()
    expect(container.querySelector('main')).toHaveClass('min-h-screen')
    expect(container.textContent).toContain('Test Content')
  })

  it('should apply print styles', () => {
    const { container } = render(
      <ThemeProvider>
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    const main = container.querySelector('main')
    expect(main).toHaveClass('print:p-0')
    expect(main).toHaveClass('print:bg-white')
  })

  it('should apply responsive padding', () => {
    const { container } = render(
      <ThemeProvider>
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      </ThemeProvider>
    )
    
    const main = container.querySelector('main')
    expect(main).toHaveClass('p-4')
    expect(main).toHaveClass('sm:p-8')
    expect(main).toHaveClass('lg:p-12')
  })
}) 
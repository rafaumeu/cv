import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card, CardContent } from './Card'

describe('Card', () => {
  it('should render children content', () => {
    render(
      <Card>
        <div>Card Content</div>
      </Card>
    )
    
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <div>Content</div>
      </Card>
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should render CardContent with proper styling', () => {
    const { container } = render(
      <CardContent>
        <div>Content</div>
      </CardContent>
    )
    
    expect(container.firstChild).toHaveClass('p-6')
  })

  it('should combine CardContent custom className with default styles', () => {
    const { container } = render(
      <CardContent className="custom-class">
        <div>Content</div>
      </CardContent>
    )
    
    expect(container.firstChild).toHaveClass('p-6')
    expect(container.firstChild).toHaveClass('custom-class')
  })
}) 
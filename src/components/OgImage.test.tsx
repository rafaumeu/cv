import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { OgImage } from './OgImage'

describe('OgImage', () => {
  it('should render og image with correct props', () => {
    const { container } = render(<OgImage />)
    
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('width', '1200')
    expect(image).toHaveAttribute('height', '630')
    expect(image).toHaveAttribute('alt', 'OG Image')
  })

  it('should have correct src attribute', () => {
    const { container } = render(<OgImage />)
    
    const image = container.querySelector('img')
    const src = image?.getAttribute('src')
    
    expect(src).toContain('/api/og')
  })
}) 
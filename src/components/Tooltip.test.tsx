import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('should show tooltip on hover', () => {
    render(
      <Tooltip content="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    )
    
    const trigger = screen.getByText('Hover me')
    fireEvent.mouseEnter(trigger)
    
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip Text')
  })

  it('should hide tooltip on mouse leave', () => {
    render(
      <Tooltip content="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    )
    
    const trigger = screen.getByText('Hover me')
    fireEvent.mouseEnter(trigger)
    fireEvent.mouseLeave(trigger)
    
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('should apply custom className to tooltip', () => {
    render(
      <Tooltip content="Tooltip Text" className="custom-tooltip">
        <button>Hover me</button>
      </Tooltip>
    )
    
    const trigger = screen.getByText('Hover me')
    fireEvent.mouseEnter(trigger)
    
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('custom-tooltip')
  })
}) 
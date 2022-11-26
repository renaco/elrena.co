import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Home', () => {
  it('render a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Welcome to my web site/i,
    });

    expect(heading).toBeInTheDocument();
  })
})
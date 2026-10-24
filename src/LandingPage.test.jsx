// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import LandingPage from './LandingPage.jsx'

afterEach(cleanup)

describe('photographer landing page', () => {
  it('shows the photographer’s main message and a prominent contact link', () => {
    render(<LandingPage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Фотографии, в которых живёт главное',
      }),
    ).toBeTruthy()

    expect(
      screen.getByRole('link', { name: 'Обсудить съёмку' }).getAttribute('href'),
    ).toBe('#contacts')
  })

  it('shows a descriptive photograph in the hero', () => {
    render(<LandingPage />)

    expect(
      screen.getByRole('img', {
        name: 'Портрет девушки в мягком естественном свете',
      }),
    ).toBeTruthy()
  })
})

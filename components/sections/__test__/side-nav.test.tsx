import React from 'react'
import { render } from '@testing-library/react'
import { SideNav } from '../side-nav'

jest.mock('@/features/teams/components/team-selection', () => ({
  TeamSelection: () => <div>Team Selection Mock</div>,
}))

jest.mock('../nav-links', () => ({
  NavLinks: () => <div>Nav Links Mock</div>,
}))

describe('SideNav', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<SideNav />)
    expect(asFragment()).toMatchSnapshot()
  })
})

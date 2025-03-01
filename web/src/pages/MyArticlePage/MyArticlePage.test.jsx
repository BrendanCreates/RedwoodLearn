import { render } from '@redwoodjs/testing/web'

import MyArticlePage from './MyArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyArticlePage />)
    }).not.toThrow()
  })
})

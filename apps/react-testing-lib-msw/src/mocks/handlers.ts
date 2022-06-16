import { rest } from 'msw';

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('https://my.domain/greet', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      response: 'hi'
    }))
  }),
]

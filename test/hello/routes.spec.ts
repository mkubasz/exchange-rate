import request from 'supertest'

import { app } from '../../src/app'

describe('health module routes', () => {
  describe('GET /health', () => {
    it('should respond with "Hello, World!"', async () => {
      await request(app)
        .get('/hello')
        .expect(200, 'Hello, World!')
    })
  })
})

const request = require('supertest')
const app = require('../app')

describe('POST /', () => {
  it('should accurately count the number of times a character appears', async () => {
    const res = await request(app)
      .post('/countchars')
      .send({
        "words": "this is a test series of words",
        "character": "i",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('3');
  })
})
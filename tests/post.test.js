const request = require('supertest')
const app = require('../app')

describe('POST /countchars', () => {
  
  it('should accurately count the number of times a character appears in a list of strings', async () => {
    const res = await request(app)
      .post('/countchars')
      .send({
        "words": ["this","is","a","test","series","of","words"],
        "character": "i",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('3');
  })
  
  it('should return a 400 error on invalid data', async () => {
	const res = await request(app)
	  .post('/countchars')
	  .send({
		"words": "foobar",
		"character": "1",
	  });
	expect(res.statusCode).toEqual(400);
  })
  
})


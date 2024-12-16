const request = require('supertest');
const app = require('./app');                     

describe('Test the app', () => {
  test('Get / should return Hello, World!', async () => {
    const response = await request(app).get('/'); 
    expect(response.statusCode).toBe(200);        
<<<<<<< HEAD
    expect(response.text).toBe('Fundamentals of DevOps!');  
=======
    expect(response.text).toBe('Fundamentals of DevOps!!');  
>>>>>>> 35714c7 (update res text in test)
  });
});

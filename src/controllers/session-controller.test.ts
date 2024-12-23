import request from 'supertest'
import { app } from '../app'
import { prisma } from '../database/prisma'
describe('Session controller (e2)',()=>{
  beforeEach(async () => {
    await request(app).post('/api/users').send({
      name: 'any_name',
      birthdate: '2021-09-09',
      email: 'any@example.com',
      password: '123456',
    })
  })
  
  afterAll(async () => {
    await prisma.user.deleteMany()
    await prisma.$disconnect(); 
  });
    it('should return 201 if user is login',async()=>{
      const response = await request(app).post('/api/session/login').send({
        name: 'any_name',
        birthdate: '2021-09-09',
        email: 'any@example.com',
        password: '123456',
      })
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
    })
    it('should return 401',async()=>{
      const response = await request(app).post('/api/session/login').send({
        name: 'any_name',
        birthdate: '2021-09-09',
        email: 'any@example.com',
        password: '123458',
      })
      expect(response.status).toBe(401)
    })
    
})

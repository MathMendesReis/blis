import request from 'supertest'
import { app } from '../app'
import { prisma } from '../database/prisma'
describe('Create user controller (e2)',()=>{
  beforeEach(async () => {
    await prisma.user.deleteMany({})
  })

  afterAll(async () => {
    await prisma.$disconnect(); 
  });
    it('should return 201 if user is created',async()=>{
      const response = await request(app).post('/api/users').send({
        name: 'any_name',
        birthdate: '2021-09-09',
        email: 'any@example.com',
        password: '123456',
      })
      await prisma.user.deleteMany({
        where:{
          email: 'any@example.com',
        }
      })
      expect(response.status).toBe(201)

    })
    it('should return 400 if user is created',async()=>{
      await request(app).post('/api/users').send({
        name: 'any_name',
        birthdate: '2021-09-09',
        email: 'any@example.com',
        password: '123456',
      })
      const response = await request(app).post('/api/users').send({
        name: 'any_name',
        birthdate: '2021-09-09',
        email: 'any@example.com',
        password: '123456',
      })
      expect(response.status).toBe(401)

      await prisma.user.deleteMany({
        where:{
          email: 'any@example.com',
        }
      })
    })
})

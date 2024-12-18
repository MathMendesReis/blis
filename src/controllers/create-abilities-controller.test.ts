import { app } from "../app"
import { prisma } from "../database/prisma"
import { abilitiesRouterPath, userRouterPath } from "../utils/router-paths"
import request from 'supertest'
describe('Create  abilities controller (e2e)',()=>{
  let token:string
  beforeAll(async()=>{
    await request(app).post(userRouterPath).send({
      name: 'any_name',
      birthdate: '2021-09-09',
      email: 'any@example.com',
      password: '123456',
    }).expect(201)
    const login = await request(app).post('/api/session/login').send({
      email: 'any@example.com',
      password: '123456',
    }).expect(200)
    token = login.body.token

    
  })
  afterAll(async()=>{
    await prisma.abilities.deleteMany()
    await prisma.user.deleteMany()
    await prisma.$disconnect()})
  it('should be able to create an ability',async()=>{
    const response = await request(app).post(abilitiesRouterPath)
    .set('Authorization',`Bearer ${token}`)
    .send({
      name:"backend developer",
      active:false,
    })

    expect(response.status).toBe(201)
  })
  
  
 
})
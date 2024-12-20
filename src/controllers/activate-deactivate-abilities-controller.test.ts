import { app } from "../app"
import { prisma } from "../database/prisma"
import { abilitiesRouterPath, userRouterPath } from "../utils/router-paths"
import request from 'supertest'
describe('Active or deactive abilities controller (e2e)',()=>{
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

    await prisma.abilities.create({
      data:{
        id:'1',
        name:'backend developer',
        active:true
      }
    })
  })
  afterAll(async()=>{
    await prisma.abilities.deleteMany()
    await prisma.user.deleteMany()
    await prisma.$disconnect()})
  it('should be able to deactivate an ability',async()=>{
    const response = await request(app).put(`${abilitiesRouterPath}/1`)
    .set('Authorization',`Bearer ${token}`)
    .send({
      active:false,
    })

    const abilities = await prisma.abilities.findMany({
      where:{
        id:'1',
        active:false
      }
    })

    expect(response.status).toBe(201)
    expect(abilities).toBeTruthy()
  })
  it('should be able to activate an ability',async()=>{
    const response = await request(app).put(`${abilitiesRouterPath}/1`)
    .set('Authorization',`Bearer ${token}`)
    .send({
      active:true,
    })

    const abilities = await prisma.abilities.findMany({
      where:{
        id:'1',
        active:true
      }
    })

    expect(response.status).toBe(201)
    expect(abilities).toBeTruthy()
  })
  
 
})
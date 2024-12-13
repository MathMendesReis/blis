import z, { coerce } from "zod";

const envSchema = z.object({
  PORT:z.coerce.number().default(3000),
})

const env = envSchema.safeParse(process.env)

export {env}
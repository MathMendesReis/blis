import z, { coerce } from "zod";

const envSchema = z.object({
  PORT:z.coerce.number().default(3000),
  DATABASE_URL:z.string(),
  JWT_SECRET:z.string(),
  JWT_EXPIRES_IN:z.string(),
})

const envSchemaValidation = envSchema.safeParse(process.env)
if (!envSchemaValidation.success) {
  console.error(envSchemaValidation.error.issues);
  throw new Error('There is an error with the server environment variables');
}

 const env = envSchemaValidation.data;
export {env}
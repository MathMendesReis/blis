import { env } from "../utils/_env";

export const authConfig = {
  jwt:{
    secret:env.JWT_SECRET,
    expiresIn:"1d"
  }
}
import { hash } from "bcrypt"

export const hashPassword = async (data: any) => {
   return await hash(data, 10);
}
import { loginUser, registerUser } from "../controller/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";

export default function authRoute(app){
   //Create User
   app.post('/api/register',validate(registerSchema), registerUser);
   app.post('/api/login',validate(loginSchema), loginUser);
   //Read
}
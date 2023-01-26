import { sign } from "jsonwebtoken";
const secret = process.env.JWT_SECRET || 'jwt_secret';

export default {
  id: 1,
  username: 'Test',
  role: 'admin',
  email: 'test@test.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
}


const mockToken = () => sign({ id: 10, role: 'admin' }, secret, {
  expiresIn: '5h',
  algorithm: 'HS256',
})

export  { mockToken }
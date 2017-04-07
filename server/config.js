export default {
  db: process.env.MongoUri || 'mongodb://localhost:27017/tlytics',
  jwtSecret: process.env.JWTSecret || 'shhh',
  sessionSecret: process.env.SessionSecret || 'shhhh',
  port: process.env.PORT || '8080'
}

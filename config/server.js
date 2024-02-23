module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e0a3c4731adeb40c360d881e0dee3a8c'),
    },
  },
});

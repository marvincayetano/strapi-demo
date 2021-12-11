module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1aa0f02f764865dcb56a6b9209ee660b'),
  },
});

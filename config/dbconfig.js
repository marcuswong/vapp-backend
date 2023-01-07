module.exports = {
  HOST: "10.152.183.254",
  USER: "app1",
  PASSWORD: "AppPassword",
  DB: "app_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
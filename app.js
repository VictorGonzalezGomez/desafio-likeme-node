const app = require('./server');

app.use('/', require('./src/routes/postsRoutes'));

module.exports = app;
const express = require('express');

// ...

const app = express();

const loginRouter = require('./router/login.router');
const { validateLogin } = require('./middlewares/validateLogin');
const userRouter = require('./router/user.router');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', validateLogin, loginRouter);
app.use('/user', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

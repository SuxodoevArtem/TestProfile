const express = require('express');
const cors = require('cors');
const http = require('http');

const authRouter = require('./routes/auth.router')
const balanceRouter = require('./routes/finance.router')
const tarifRouter = require('./routes/tarif.router')
const profileRouter = require('./routes/profile.router')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(authRouter);
app.use(balanceRouter);
app.use(tarifRouter);
app.use(profileRouter);

http.createServer({},app).listen(3000, () => {
    console.log(`Server running at 3000`);
})
require("dotenv").config()
const express = require("express");
const massive = require('massive');
const session = require('express-session');

const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
} = process.env;

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 48},
    secret: SESSION_SECRET,
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())
app.use(express.static(`${__dirname}/../build`));


app.listen(SERVER_PORT, () => {
    console.log(`Please work on ${SERVER_PORT}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 443;

app.use(cors({
    origin: "https://webshop-two-beta.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const router = require('./routes/main');

app.use('/', router);

app.listen(PORT, () => {
    console.log('server is running');
})
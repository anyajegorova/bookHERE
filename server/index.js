const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}
));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok')
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.json()
})


app.listen(4000);
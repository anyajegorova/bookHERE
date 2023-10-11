const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('dotenv').config();

const bcryptSalt = bcrypt.genSaltSync(10);

const User = require('./models/User.js')

app.use(express.json());

/*Handling CORS*/
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}
));

mongoose.connect(process.env.MONGO_URL);

/*Testing*/
app.get('/test', (req, res) => {
    res.json('test ok')
});


/*Registration of a new User*/
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(user)
    } catch (error) {
        res.status(422).json(error);
    }

})


app.listen(4000);
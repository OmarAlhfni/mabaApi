const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
var db = require("../models/index");


const hashPass = require('../helper/passwoed');

const secret = 'mabaApi'

router.post('/register', async (req, res, next) => {
    const { firstName, lastName, email, password, phone } = req.body;
    const hash = await hashPass(password);
    await db.User.findOne({ where: { email } }).then(async data => {
        if (data) {
            res.status(401)
            res.send("user is already exists")
        } else {
            await db.User.create({
                firstName,
                lastName,
                email,
                password: hash,
                phone
            }).then((data) => {
                const { id, firstName, email } = data
                const token = jwt.sign({ id, firstName, email, isAdmin: false }, secret)
                res.json({ token })
            })
        }
    })
})

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const hasher = await hashPass(password);
    await db.User.findOne({
        where: {
            email,
            password: hasher
        }
    }).then(data => {
        if (data == null) {
            res.status(401)
            res.send("user is not found ")
        } else {
            const { id, firstName, isAdmin } = data
            const token = jwt.sign({ id, firstName, isAdmin: isAdmin }, secret)
            res.json({ token })
            console.log(`hi ${firstName}`);
        }
    })

})

module.exports = router

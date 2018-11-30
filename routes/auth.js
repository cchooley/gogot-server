const express = require('express')
const router = express.Router()

const queries = require('../queries/players')
const authUtils = require('../utils/auth')

router.get('/', (req, res) => {
    res.json({
        message: 'Auth'
    })
})

router.post('/login', function (req, res, next) {
    queries.getPlayerByEmail(req.body.email)
        .then(player => {
            if (!player) {
                res.json({
                    error: 'Player not found'
                })
                return
            }
            const passwordMatch = authUtils.comparePassword(req.body.password, player.password)
            if (passwordMatch) {
                const token = authUtils.createJWT(player)
                res.json({ token })
            } else {
                res.json({ error: 'Incorrect password' })
            }

        })
})

router.post('/register', function (req, res, next) {
    queries.create(req.body)
        .then(player => {
            const token = authUtils.createJWT(player)
            res.json({ token })
        }
        )
})

module.exports = router;
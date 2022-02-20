const express = require("express")
const router = express.Router()
const User = require("../models/models.users")

// endpoint stubs - for us to implement
router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {
    
})

module.exports = router;
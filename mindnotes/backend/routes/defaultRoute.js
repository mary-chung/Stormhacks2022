const express = require("express")
const { db } = require("../models/models.users")
const router = express.Router()
const User = require("../models/models.users")

// endpoints
// get request for intial loading
router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/newcard/:userid', async (req, res) => {
    console.log(req.body)

    const userID = req.params.user_ID
    const cardObject = req.body
  
    // const query = {user_ID: userID, "cards.card_ID": cardObject.card_ID};
    // const updateDocument = {
    //     $set: {"cards": cardObject}
    // }

    const query = {user_ID: userID};
    const updateCard = {
        $push: {"cards": cardObject}
    }

    const result = await db.collection("usernotes").updateOne(query, updateCard)
    
    res.json("Successful insert")
    //await db.collection("users").insertOne()
  });

// put request when user saves a card they edited
router.put('/', async (req, res) => {
    try {
        let body = req.body;
        console.log(req.body)
        let card_ID = body.card_ID;

        user = await User.find({card_ID: card_ID});
        console.log(user)

        user.cards["card_ID"]["card_title"] = body.card_title;
        user.cards["card_ID"]["strategies"] = body.strategies;
        user.cards["card_ID"]["notes"] = body.notes;
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;
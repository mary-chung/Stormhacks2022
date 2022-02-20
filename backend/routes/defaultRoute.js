const express = require("express")
const modelsUsers = require("../models/models.users")
const { db } = require("../models/models.users")
const router = express.Router()
const User = require("../models/models.users")
const Card = require("../models/models.cards").Card
const Strategy = require("../models/models.strategies").Strategy

router.use(express.json())

// endpoints
// get request for intial loading
router.get('/', async (req, res) => {
    try {
        const user = await User.findOne({user_ID: 0})
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/newcard/:userid', async (req, res) => {
    const userID = parseInt(req.params.userid)
    const cardObject = req.body
  
    // const query = {user_ID: userID, "cards.card_ID": cardObject.card_ID};
    // const updateDocument = {
    //     $set: {"cards": cardObject}
    // }

    const query = {user_ID: userID};
    const updateCard = {
        $push: {"cards": cardObject}
    }

    const result = await db.collection("usernotes").updateOne(query, updateCard, {upsert:true})
    
    res.json("Successful insert")
    //await db.collection("users").insertOne()
  });
  
router.post('/testadd', (req, res) => {
    try {
        let strategy = new Strategy({
            "strategy": "stay strong!",
            "rating": 3
        });

        let card = new Card({
            card_ID: 1,
            card_title: "card1",
            notes: "we can do this!",
            strategies: [strategy]
        });

        let user = new User({
            user_ID: 1,
            cards: [card]
        });

        const u = user.save();
        res.json(u)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// put request when user saves a card they edited
router.put('/', async (req, res) => {
    try {
        let body = req.body;
        console.log("req.body")
        console.log(body.user_ID)
        let card_ID = body.card_ID;

        user = await User.findOne({ user_ID: user_ID });

        // let query = { 
        //     user_ID: user_ID,
        //     cards.card_ID: card_ID
        // }

        // let filter = {
        //     $set: {"grades"}
        // }

        // User.updateOne(query, {})
        // card = await Card.find({card_ID: 1})
        // console.log("card:")
        // console.log(card)

        let cards = user.cards;
        let found = 0
        for (let card of cards) {
            if (card["card_ID"] === card_ID) {
                card["card_title"] = body.card_title;
                card["strategies"] = body.strategies;
                card["notes"] = body.notes;
                found = 1
                break;
            }
        }
        if (!found) {
            user.cards.append[new Card({
                card_title: body.card_title,
                strategies: body.strategies,
                notes: body.notes,
            })]
        }

        const u = await user.save();
        res.status(200).json(u);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;
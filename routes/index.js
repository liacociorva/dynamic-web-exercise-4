// how you call express
const express = require('express');
const router = express.Router();

// router.use((req, res, next))

router.get("/", (req, res) => {
    res.send("Hello World")
});

module.exports = router;
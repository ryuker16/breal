const express = require('express');
const app = express();

app.listen(5102);

app.get('/gettracker', (req, res) => {
    res.status(200).send("OK");
});


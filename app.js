const express = require('express');
const app = express();

app.listen(5102);

app.get('/gettracker', (req, res) => {
    // requires string returned to be "OK"
    res.status(200).send("OK");
});


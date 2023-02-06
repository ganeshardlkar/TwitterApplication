const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('Server listening on port 3000');

    await connect();

    console.log('Mongodb connected');

    const tweets = await Tweet.find({
        content: ["Sample tweet 4", "Sample tweet 2", "Sample tweet 5"]
    });
    console.log(tweets);
});
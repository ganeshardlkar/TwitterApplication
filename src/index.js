const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet = require('./models/tweet');

// const { TweetRepository } = require('./repository/index');
// const TweetService = require('./services/tweet-service');

app.listen(3000, async () => {
    console.log('Server listening on port 3000');

    await connect();

    console.log('Mongodb connected');

    // const tweets = await Tweet.find({
    //     content: ["Sample tweet 4", "Sample tweet 2", "Sample tweet 5"]
    // });
    // console.log(tweets);

    // let repo = new HashtagRepository();
    // let response = await repo.findByName(['Excited', 'Trend']);
    // console.log(response);
    
    // response = response.map(tags => tags.title);
    // console.log(response);

    // let service = new TweetService();
    // const tweet = await service.create({ content: 'my #working twitter' }); 
    // console.log(tweet);
});
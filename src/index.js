const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('Server listening on port 3000');

    await connect();

    console.log('Mongodb connected');

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'})
    // console.log(tweet);

    // const comment = await Comment.create({content: 'new comment'})
    // tweet.comments.push(comment);
    // tweet.save();
    // console.log(tweet);

    const tweet = await tweetRepo.getWithComments('63e0adcdeda7f3287562d229');
    console.log(tweet);
});
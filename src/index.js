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
    // const tweet = await tweetRepo.create({content: 'Sample tweet 6'})
    // console.log(tweet);

    // const comment = await Comment.create({content: 'Comment for sample tweet 6'})
    // tweet.comments.push(comment);
    // tweet.save();
    // console.log(tweet);

    const tweet = await tweetRepo.getAll(2, 5);
    console.log(tweet[0].contentWithEmail);
});
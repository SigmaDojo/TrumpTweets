/**
 * TrumpTweets
 * 
 * Documentation for C3: see http://c3js.org/gettingstarted.html
 *
 */

const tweetData = tweets.map(tweet => {
    return { retweets: tweet.retweet_count };
});


const mychart = c3.generate({
    bindto: "#chart",
    data: {
        keys: { value: ["retweets"] },
        json: tweetData
    }
});

// convert stupid twitter date format:
// Just use new Date(tweet.created_at)

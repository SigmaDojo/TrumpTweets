/**
 * TrumpTweets
 * 
 * Skeleton code.
 * Filter all tweet-data contained in 'tweets',
 * keep only tweets sent from Android.
 * Show retweet-count in graph.
 *
 * Remember: map, filter and reduce are your friends.
 */

function isTweetFromAndroid(tweet) {
    return  tweet.source === 'Twitter for Android';
}


const chartData = tweets.filter(isTweetFromAndroid);

const mychart = c3.generate({
    bindto: "#chart",
    data: {
        keys: { value: ["retweet_count"] },
        json: chartData
    }
});



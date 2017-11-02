# TrumpTweets

## Overview

Donald Trump is an active Twitter user, we have a data set with around 2k of Trumps tweets
and would like to have some answers to our questions(in the next section). We have prepared a HTML/JavaScript
template with the most basic things: a graph library (C3.js), jquery, moment.js and the
Twitter data (If you prefer other libraries, tools or languages you are free to use
them!).

To start using the template, open 'index.html' in your browser and start editing 'app.js'
in your favorit editor. In 'app.js' you can access the variable 'tweets', the variable
contains a list with all the tweets.

Here is an example on how a Twitter tweet object looks like in the JSON format:

```javascript
  {
    source: "Twitter for iPhone",
    text: "blah, blah...",
    created_at: "Sun Oct 22 00:09:21 +0000 2017",
    retweet_count: 10516,
    favorite_count: 46330,
    is_retweet: false,
    id_str: "921891186352287744"
  }
```

In the end of the event we will looks throught your different solutions, so try to make
them look nice! As said, JavaScript is nice but if you wold like to solve any of the
questions in another language, feel free (Bonus points for Haskell ;)!

## Questions

### Part 1

Create a diagram that show what hours (00-23) that Trump is most active. This can be any kind of
diagram, bar chart, line chart, step chart and so on.

### Part 2

Answer the questions:
- How many tweets are in the data set?
- How many of the tweets are NOT from an iPhone?
- What tweet got the most likes?
- What is the highest amount of favorites he recieved?
- What is the highest amount of favorites recieved on a retweet?
- What date did Trump publish most number of tweets?

## Tips and tricks

- Within the data set there are some re-tweets that Trump has not written.
- map, filter and reduce are really nice functions.
- You can convert the date string 'created_at' to a JavaScript with the help of 'let tweetDate = new Date(tweet.created_at);'


## Links

* C3 http://c3js.org/gettingstarted.html
* C3 reference: http://c3js.org/reference.html
* moment.js https://momentjs.com/ (maybe in combination with https://momentjs.com/timezone/ to handle timezones)
* Twitter data comes from http://www.trumptwitterarchive.com/archive

# TrumpTweets

## Uppgift

### Del 1

Skapa ett diagram som visar vilken timme på dygnet som Trump är som mest aktiv.
X-axeln skall alltså visa timme på dygnet (00 - 23), och Y-axeln skall visa antal tweets.


### Del 2

Svara på följande frågor:
- Hur många tweets av de som Trump skrivit är _inte_ från en iPhone?
- Vilket av Trumps tweets har flest likes?
- Vilket datum twittrade Trump som mest?


Du hittar grafbiblioteket C3.js (och dess dependencies D3 och jQuery), samt även moments.js, som är ett bibliotek för datum-hantering.
Det är fritt fram att använda andra verktyg - vill du exempelvis skriva en backend i C# så går det bra.


## Överblick

Vi vill få svar på en del frågor om Donald Trumps twittrande. Till vår hjälp har vi en fil med drygt 2000 av Trumps tweets.
Vi kommer även att använda oss av C3 som är ett grafbibliotek för javascript (baserat på det populära D3).

Öppna filen 'index.html' i din webbläsare. Öppna sedan filen 'app.js' i din text-editor, och hacka loss.

Inne i 'app.js' har du tillgång till variablen tweets, som är en array av tweets. Varje tweet har följande struktur:

  {
    source: "Twitter for iPhone",
    text: "blah, blah...",
    created_at: "Sun Oct 22 00:09:21 +0000 2017",
    retweet_count: 10516,
    favorite_count: 46330,
    is_retweet: false,
    id_str: "921891186352287744"
  }
  

## Tips och tricks

* Tänk på att datan även innehåller re-tweets, dvs tweets som Trump _inte_ skrivit själv.
* Map, filter och reduce kan vara användbart vid den här typen av uppgifter.
* Du kan konvertera datum-strängen (created_at) till ett javascript Date-object, genom att helt enkelt använda:

    let tweetDate = new Date(tweet.created_at);



## Länkar

* C3 http://c3js.org/gettingstarted.html
* C3 referens: http://c3js.org/reference.html
* moments https://momentjs.com/
* http://www.trumptwitterarchive.com/archive

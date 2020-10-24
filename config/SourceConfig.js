const Parsers = require('../util/SourceParsers');

const SourceConfig = [{
        source: "cnn",
        url: "https://cnn.com",
        parser: new Parsers().cnn
    },
    {
        source: "foxnews",
        url: "https://foxnews.com",
        parser: new Parsers().foxnews
    },
    {
        source: "usatoday",
        url: "https://usatoday.com",
        parser: new Parsers().usatoday
    },
    {
        source: "nbcnews",
        url: "http://nbcnews.com",
        parser: new Parsers().nbcnews
    },
    {
        source: "vanityfair",
        url: "https://vanityfair.com",
        parser: new Parsers().vanityfair
    },
    {
        source: "yahoonews",
        url: "https://news.yahoo.com",
        parser: new Parsers().yahoonews
    },
    {
        source: "nytimes",
        url: "https://nytimes.com",
        parser: new Parsers().nytimes
    },
    {
        source: "huffpost",
        url: "https://huffpost.com",
        parser: new Parsers().huffpost
    },
    {
        source: "dailymail",
        url: "https://dailymail.co.uk",
        parser: new Parsers().dailymail
    }
];
module.exports = SourceConfig;
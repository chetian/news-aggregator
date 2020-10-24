const cheerio = require('cheerio');
const HelperFunctions = require('./HelperFunctions');

function Parsers() {
    // TODO: initialize helperFunctions to prevent repeat
}

/*
  __ _ _  _ _
 / _| ' \| ' \
 \__|_||_|_||_|

*/
Parsers.prototype.cnn = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.screaming-banner-text').text();
    const altHeadline = $('.cd--has-banner .cd__headline-text').first().text();
    const image = $('.media__image').attr('src');
    const poster = $('.cd--has-banner .mp4-animations').attr('poster');
    const video = $('.cd--has-banner video source').attr('src');
    const link = $('.media').find('a').attr('href');
    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: poster,
        video: video
    }, link);
};

/*
   __
  / _|_____ ___ _  _____ __ _____
 |  _/ _ \ \ / ' \/ -_) V  V (_-<
 |_| \___/_\_\_||_\___|\_/\_//__/

*/
Parsers.prototype.foxnews = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.collection-spotlight').first().find('h2.title a').text();
    const altHeadline = $('.kicker-text').first().text();
    const image = $('article.story-1 picture').find('img').first().attr('src');
    const link = $('article.story-1').find('a').attr('href');
    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: null,
        video: null
    }, link);
};

/*
                _           _
  _  _ ___ __ _| |_ ___  __| |__ _ _  _
 | || (_-</ _` |  _/ _ \/ _` / _` | || |
  \_,_/__/\__,_|\__\___/\__,_\__,_|\_, |
                                   |__/
*/
Parsers.prototype.usatoday = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.gnt_m_he span').text();
    const altHeadline = $('.gtn_m_he').attr('data-c-br') || "";
    const image = $('.gnt_m_he_i').attr('src');
    const link = $('.gnt_m_he').attr('href');

    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: null,
        video: null
    }, link);
};

/*
       _
  _ _ | |__  __ _ _  _____ __ _____
 | ' \| '_ \/ _| ' \/ -_) V  V (_-<
 |_||_|_.__/\__|_||_\___|\_/\_//__/

*/
Parsers.prototype.nbcnews = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.tease-card__headline').first().text();
    const image = $('.tease-card__picture-link img').first().attr('src');
    const link = $('.tease-card a').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, "", image, {
        poster: null,
        video: null
    }, link);
};

/*
                _ _         __      _
 __ ____ _ _ _ (_) |_ _  _ / _|__ _(_)_ _
 \ V / _` | ' \| |  _| || |  _/ _` | | '_|
  \_/\__,_|_||_|_|\__|\_, |_| \__,_|_|_|
                      |__/
*/
Parsers.prototype.vanityfair = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.feature-item-hed').first().text();
    const altHeadline = $('.feature-item-dek').first().text();
    const image = $('.feature-item img').first().attr('src');
    const link = $('a.feature-item-link-hed').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: null,
        video: null
    }, link);
};

/*
            _
  _  _ __ _| |_  ___  ___ _ _  _____ __ _____
 | || / _` | ' \/ _ \/ _ \ ' \/ -_) V  V (_-<
  \_, \__,_|_||_\___/\___/_||_\___|\_/\_//__/
  |__/
*/
Parsers.prototype.yahoonews = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.js-stream-content h2').first().text();
    const altHeadline = $('.js-stream-content p').first().text();
    const image = $('.js-stream-content img').first().attr('src');
    const link = $('.js-stream-content a').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: null,
        video: null
    }, link);
};

/*
           _   _
  _ _ _  _| |_(_)_ __  ___ ___
 | ' \ || |  _| | '  \/ -_|_-<
 |_||_\_, |\__|_|_|_|_\___/__/
      |__/
*/
Parsers.prototype.nytimes = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.g-active h4 a').first().text();
    const altHeadline = $('.g-hp-cta').first().text();
    const image = $('.g-media-link img').first().attr('src');
    const link = $('.g-active h4 a').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, altHeadline, image, {
        poster: null,
        video: null
    }, link);
};

/*
  _         __  __              _
 | |_ _  _ / _|/ _|_ __  ___ __| |_
 | ' \ || |  _|  _| '_ \/ _ (_-<  _|
 |_||_\_,_|_| |_| | .__/\___/__/\__|
                  |_|
*/
Parsers.prototype.huffpost = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.splash__headline__text a').first().text();
    const image = $('.splash__image img').first().attr('src');
    const link = $('.splash__headline__text a').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, "", image, {
        poster: null,
        video: null
    }, link);
};

/*
     _      _ _                 _ _
  __| |__ _(_) |_  _ _ __  __ _(_) |
 / _` / _` | | | || | '  \/ _` | | |
 \__,_\__,_|_|_|\_, |_|_|_\__,_|_|_|
                |__/
*/
Parsers.prototype.dailymail = function(source, page) {
    const helperFunctions = new HelperFunctions();
    const $ = cheerio.load(page);
    const headline = $('.article-tri-headline h2 a').first().text();
    const altHeadline = $('.article-tri-headline .articletext p').first().text();
    const image = $('.article-tri-headline img').first().attr('src');
    const link = $('.article-tri-headline a').first().attr('href');

    return helperFunctions.formatScrapedData(source, headline, altHeadline  , image, {
        poster: null,
        video: null
    }, link);
};



module.exports = Parsers;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8566b11f65a14d54b8be47b1c01db39e');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
console.log('wow');
exports.handler = newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
    console.log(response);
});

console.log('done');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8566b11f65a14d54b8be47b1c01db39e');

exports.handler = async (event) => {

  return newsapi.v2.topHeadlines({
    sources: `${event["queryStringParameters"]['sources']}`
  }).then((resp) => {
    const response = {"isBase64Encoded": false,
                    "statusCode": 200,
                    "headers": { "Access-Control-Allow-Origin": "*" }
                    };
    response.body = JSON.stringify(resp);
    return response;
  });
};

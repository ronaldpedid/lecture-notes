const http = require("http");
const axios = require("axios");

const newDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const pickCardURL = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2";
let deckId;

http.createServer(async (request, response) => {
  if (request.url === "/favicon.ico") {
    response.statusCode = 404;
    response.end();
    return;
  }

  if (!deckId) {
    // Get a new deck of cards
    let deckResponse = await axios.get(newDeckURL);
    let deckObj = deckResponse.data;
    deckId = deckObj.deck_id;
  }

  let cardResponse = await axios.get(pickCardURL.replace("<<deck_id>>", deckId));
  let card = cardResponse.data.cards[0];
  let html = `
  <img src="${card.image}" />
  <br/>
  ${cardObj.remaining}
  `;

  if (cardObj.remaining === 0) {
    deckId = undefined;
  }

  response.writeHead(200, { "content-type": "text/html"} );
  response.write(html);
  response.end();
}).listen(8080);
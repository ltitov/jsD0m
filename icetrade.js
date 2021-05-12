const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const IcetradeURLBuilder = new URL('https://icetrade.by/search/auctions');
IcetradeURLBuilder.searchParams.set('search_text', 'ремонт');
IcetradeURLBuilder.searchParams.set('zakup_type[1]', '1');
IcetradeURLBuilder.searchParams.set('zakup_type[2]', '1');
IcetradeURLBuilder.searchParams.set('establishment', '0');
IcetradeURLBuilder.searchParams.set('t[Trade]', '1');
IcetradeURLBuilder.searchParams.set('t[eTrade]', '1');
IcetradeURLBuilder.searchParams.set('t[socialOrder]', '1');
IcetradeURLBuilder.searchParams.set('t[singleSource]', '1');
IcetradeURLBuilder.searchParams.set('t[Auction]', '1');
IcetradeURLBuilder.searchParams.set('t[Request]', '1');
IcetradeURLBuilder.searchParams.set('t[contractingTrades]', '1');
IcetradeURLBuilder.searchParams.set('t[negotiations]', '1');
IcetradeURLBuilder.searchParams.set('t[Other]', '1');
IcetradeURLBuilder.searchParams.set('r[1]', '1');
IcetradeURLBuilder.searchParams.set('sort', 'date:desc');
IcetradeURLBuilder.searchParams.set('sbm', '1');
IcetradeURLBuilder.searchParams.set('onPage', '100');


got(IcetradeURLBuilder).then(response => {
  const eventsPageDom = new JSDOM(response.body.toString()).window.document;
  const eventsElement = eventsPageDom.querySelectorAll("#auctions-list > tbody > tr:not(:nth-child(1)");

  eventsElement.forEach(even => {
    const linkEvent = even.querySelector('td').querySelector('a').getAttribute('href');
    console.log(linkEvent);
    // got(linkEvent).then(eventPageData => {
    //   const eventPageDom = new JSDOM(eventPageData.body.toString()).window.document;
    //   console.log(eventPageDom);
    //   let eventData = {};
    //   eventData.title = (eventPageDom.querySelector('#auctBlock > div > div.h1 > div > h1').textContent);

    //   // .match(/\d+/g)

    //   // eventData.organization = eventPageDom.querySelector("#auctBlockCont > table > tbody > tr.af.af-customer_data.nxt-false > td.afv").textContent;

    //   // eventData.working = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td").textContent;
    //   // eventData.price = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td").textContent;
    //   // eventData.date = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(5) > table > tbody > tr:nth-child(2) > td").textContent;
    //   console.log(eventData);
    // });
  });
});

// document.querySelector("#auctBlock > div > div.h1 > div > h1")
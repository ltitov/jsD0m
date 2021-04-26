const GoszakupkiURLBuilder = new URL('https://goszakupki.by/tenders/posted');

GoszakupkiURLBuilder.searchParams.set('TendersSearch[text]', 'ремонт');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[status][]', 'Submission');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[region][]', '1');
GoszakupkiURLBuilder.searchParams.set('page', '1');

// const IcetradeURLBuilder = new URL('https://icetrade.by/search/auctions');

// IcetradeURLBuilder.searchParams.set('search_text', 'ремонт');
// IcetradeURLBuilder.searchParams.set('zakup_type[1]', '1');
// IcetradeURLBuilder.searchParams.set('zakup_type[2]', '1');
// IcetradeURLBuilder.searchParams.set('establishment', '0');
// IcetradeURLBuilder.searchParams.set('t[Trade]', '1');
// IcetradeURLBuilder.searchParams.set('t[eTrade]', '1');
// IcetradeURLBuilder.searchParams.set('t[socialOrder]', '1');
// IcetradeURLBuilder.searchParams.set('t[singleSource]', '1');
// IcetradeURLBuilder.searchParams.set('t[Auction]', '1');
// IcetradeURLBuilder.searchParams.set('t[Request]', '1');
// IcetradeURLBuilder.searchParams.set('t[contractingTrades]', '1');
// IcetradeURLBuilder.searchParams.set('t[negotiations]', '1');
// IcetradeURLBuilder.searchParams.set('t[Other]', '1');
// IcetradeURLBuilder.searchParams.set('r[1]', '1');
// IcetradeURLBuilder.searchParams.set('sort', 'date:desc');
// IcetradeURLBuilder.searchParams.set('sbm', '1');
// IcetradeURLBuilder.searchParams.set('onPage', '100');

const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

got(GoszakupkiURLBuilder).then(response => {
  const eventsPageDom = new JSDOM(response.body.toString()).window.document;
  const eventsParentsElement = eventsPageDom.querySelector('.table');
  const eventsChildrenElement = eventsParentsElement.querySelector('tbody');
  const eventsElements = eventsChildrenElement.querySelectorAll('tr');

  eventsElements.forEach(even => {
    const eventUrl = even.querySelector('td:nth-child(2)').textContent;
    console.log(eventUrl)
  });

  // console.log(dom.window.document.querySelector('tbody').textContent);
}).catch(err => {
  console.log(err);
});

// got(IcetradeURLBuilder).then(response => {
//   const dom = new JSDOM(response.body);
//   console.log(dom.window.document.getElementById('auctions-list').textContent);
// }).catch(err => {
//   console.log(err);
// });

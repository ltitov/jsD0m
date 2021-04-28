const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const GoszakupkiURLBuilder = new URL('https://goszakupki.by/tenders/posted');

GoszakupkiURLBuilder.searchParams.set('TendersSearch[text]', 'ремонт');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[status][]', 'Submission');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[region][]', '1');
GoszakupkiURLBuilder.searchParams.set('page', '1');

got(GoszakupkiURLBuilder).then(res => {
  const parentPageSrc = new JSDOM(res.body.toString()).window.document;
  const parentUrlElement = parentPageSrc.querySelectorAll(".table > tbody > tr > td")
  console.log(parentUrlElement[7].textContent);
})


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





// let IcetradeURLBuilder = new URL('https://goszakupki.by/tenders/posted');
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
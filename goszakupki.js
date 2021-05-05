const lastPage = null;
let eventData = {};

const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const GoszakupkiURLBuilder = new URL('https://goszakupki.by/tenders/posted');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[text]', 'ремонт');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[status][]', 'Submission');
GoszakupkiURLBuilder.searchParams.set('TendersSearch[region][]', '1');
GoszakupkiURLBuilder.searchParams.set('page', lastPage);

// got(GoszakupkiURLBuilder).then(response => {
const eventsPageDom = new JSDOM(GoszakupkiURLBuilder.body.toString()).window.document;
const eventsLastPage = eventsPageDom.querySelector("#w0 > ul > li.last > a").textContent;
lastPage = eventsLastPage;

// });

console.log(lastPage);
for (let i = 0; i < lastPage; i++) {
  // console.log(lastPage);
  GoszakupkiURLBuilder.searchParams.set('page', i + 1);
  got(GoszakupkiURLBuilder).then(response => {
    const eventsPageDom = new JSDOM(response.body.toString()).window.document;
    const eventsElement = eventsPageDom.querySelectorAll("#w0 > table > tbody > tr");
    const eventsLastPage = eventsPageDom.querySelector("#w0 > ul > li.last > a").textContent;

    eventsElement.forEach(even => {
      const linkEvent = even.querySelector('.word-break').querySelector('a').getAttribute('href');

      got(GoszakupkiURLBuilder.origin + linkEvent).then(eventPageData => {
        const eventPageDom = new JSDOM(eventPageData.body.toString()).window.document;
        eventData.title = (eventPageDom.querySelector('h1').textContent).match(/\d+/g);
        eventData.organization = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(4) > table > tbody > tr:nth-child(1) > td").textContent;
        eventData.working = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td").textContent;
        eventData.price = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td").textContent;
        eventData.date = eventPageDom.querySelector("body > div.wrap > div > div:nth-child(5) > table > tbody > tr:nth-child(2) > td").textContent;

      });
    });
  });


}




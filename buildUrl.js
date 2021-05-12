const buildUrl = new URL('https://goszakupki.by/tenders/posted');
buildUrl.searchParams.set('TendersSearch[text]', 'ремонт');
buildUrl.searchParams.set('TendersSearch[status][]', 'Submission');
buildUrl.searchParams.set('TendersSearch[region][]', '1');
buildUrl.searchParams.set('page', 1);

const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const NumOfTendersOnPage = 20;

async function getTendersByPage(pageNumber) {

  const url = buildUrl;

  got(buildUrl).then(response => {
    const eventsPageDom = new JSDOM(response.body.toString()).window.document;
    const eventsLastPage = eventsPageDom.querySelectorAll("#w0 > table > tbody > tr");
    console.log("eventsLastPage:", eventsLastPage.length);
  });
  // ... form url with the pageNumber
  // + page limit = NumOfTendersOnPage
  const resp = await got(url);
  const htmlPageWithTenders = resp.body;

  // ...parse htmlPageWithTenders
  const tenders = [];

  return tenders;
}

async function getTenders() {
  let allTenders = [];
  let pageNumber = 0

  while (true) {
    const tendersOnPage = await getTendersByPage(pageNumber);
    allTenders = _.concat(allTenders, tendersOnPage);

    if (tendersOnPage.length < NumOfTendersOnPage) {
      break;
    }
    pageNumber++;
  }

  return allTenders;
}

(async () => {
  const allTenders = await getTenders();
  console.log(allTenders);
})();
const NumOfTendersOnPage = 20;

async function getTendersByPage(pageNumber) {
  const url = `...`;
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
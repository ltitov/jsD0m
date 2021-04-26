let IcetradeURLBuilder = new URL('https://goszakupki.by/tenders/posted');

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

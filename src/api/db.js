export const accounts = {
  '1': {
    id: '1',
    title: 'Debit card',
    amount: 3242,
    currency: 'EUR',
    iban: 'NL21 INGB 8822 9283 63',
    transactions: [{
      id: 1,
      title: 'Spirit Amsterdam',
      amount: -12
    }, {
      id: 2,
      title: 'Card services',
      amount: -54
    }]
  },
  '2': {
    id: '2',
    title: 'Credit card',
    amount: -2000,
    currency: 'EUR',
    iban: 'NL21 INGB 2288 9876 02',
    transactions: [{
      id: 3,
      title: 'Uber Eats',
      amount: -14,
    }, {
      id: 4,
      title: 'The sting',
      amount: -87
    }]
  },
};

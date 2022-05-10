module.exports = {
  ci: {
    collect: {
      url: ['https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://powerful-basin-31641.herokuapp.com',
      token: '468d4287-b920-4933-8739-103155ff895d', // could also use LHCI_TOKEN variable instead
    },
  },
};
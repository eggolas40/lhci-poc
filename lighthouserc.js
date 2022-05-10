module.exports = {
  ci: {
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://powerful-basin-31641.herokuapp.com/app/projects',
      token: 'Your *build token* goes here', // could also use LHCI_TOKEN variable instead
    },
  },
};
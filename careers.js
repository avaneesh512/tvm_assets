window.addEventListener('DOMContentLoaded', (event) => {
// - - - - - Variables:
const D = document;

const careerPageSelectionRedBar = D.getElementById('careerPageSelectionRedBar');
const careerPageMapSelectionScroller = D.getElementById('careerPageMapSelectionScroller');

const cityMiami = D.getElementById('cityMiami');
const cityStuart = D.getElementById('cityStuart');
const cityJackson = D.getElementById('cityJackson');
const cityChicago = D.getElementById('cityChicago');
const cityEdison = D.getElementById('cityEdison');

const hideMiami = D.getElementById('hideMiami');
const hideStuart = D.getElementById('hideStuart');
const hideJackson = D.getElementById('hideJackson');
const hideChicago = D.getElementById('hideChicago');
const hideEdison = D.getElementById('hideEdison');

let cityMQ = window.matchMedia('(max-width: 1050px)');

// - - - - - Functions:
function miamiSelected() {
  careerPageSelectionRedBar.style.width = '302px';
  careerPageSelectionRedBar.style.left = '0px';

  hideMiami.style.display = 'inline-block';
  hideStuart.style.display = 'none';
  hideJackson.style.display = 'none';
  hideChicago.style.display = 'none';
  hideEdison.style.display = 'none';

  if (cityMQ.matches) {
    careerPageSelectionRedBar.style.left = '0px';
    careerPageMapSelectionScroller.style.left = '0px';
    careerPageSelectionRedBar.style.width = '302px';
  }
}

function stuartSelected() {
  careerPageSelectionRedBar.style.width = '302px';
  careerPageSelectionRedBar.style.left = '312px';

  hideMiami.style.display = 'none';
  hideStuart.style.display = 'inline-block';
  hideJackson.style.display = 'none';
  hideChicago.style.display = 'none';
  hideEdison.style.display = 'none';

  if (cityMQ.matches) {
    careerPageSelectionRedBar.style.left = '150px';
    careerPageMapSelectionScroller.style.left = '0px';
    careerPageSelectionRedBar.style.width = '96px';
  }
}

function jacksonSelected() {
  careerPageSelectionRedBar.style.width = '302px';
  careerPageSelectionRedBar.style.left = '624px';

  hideMiami.style.display = 'none';
  hideStuart.style.display = 'none';
  hideJackson.style.display = 'inline-block';
  hideChicago.style.display = 'none';
  hideEdison.style.display = 'none';

  if (cityMQ.matches) {
    careerPageSelectionRedBar.style.left = '150px';
    careerPageMapSelectionScroller.style.left = '-150px';
    careerPageSelectionRedBar.style.width = '155px';
  }
}

function chicagoSelected() {
  careerPageSelectionRedBar.style.width = '302px';
  careerPageSelectionRedBar.style.left = '936px';

  hideMiami.style.display = 'none';
  hideStuart.style.display = 'none';
  hideJackson.style.display = 'none';
  hideChicago.style.display = 'inline-block';
  hideEdison.style.display = 'none';

  if (cityMQ.matches) {
    careerPageSelectionRedBar.style.left = '150px';
    careerPageMapSelectionScroller.style.left = '-380px';
    careerPageSelectionRedBar.style.width = '108px';
  }
}

function edisonSelected() {
  careerPageSelectionRedBar.style.width = '302px';
  careerPageSelectionRedBar.style.left = '1248px';

  hideMiami.style.display = 'none';
  hideStuart.style.display = 'none';
  hideJackson.style.display = 'none';
  hideChicago.style.display = 'none';
  hideEdison.style.display = 'inline-block';

  if (cityMQ.matches) {
    careerPageSelectionRedBar.style.left = '150px';
    careerPageMapSelectionScroller.style.left = '-550px';
    careerPageSelectionRedBar.style.width = '103px';
  }
}

var selectedLocation = 'miami';

// - - - - - Events
cityMiami.addEventListener('click', () => {
  miamiSelected();
  selectedLocation = 'miami';
});

cityStuart.addEventListener('click', () => {
  stuartSelected();
  selectedLocation = 'stuart';
});

cityJackson.addEventListener('click', () => {
  jacksonSelected();
  selectedLocation = 'jackson';
});

cityChicago.addEventListener('click', () => {
  chicagoSelected();
  selectedLocation = 'chicago';
});

cityEdison.addEventListener('click', () => {
  edisonSelected();
  selectedLocation = 'edison';
});

// var location = {
//   miami: {
//     tabs: [
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103668', //open
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103661', //gmc
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103662', //cadillac
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103664', //honda
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103667', //mazda
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103660' //brickle
//     ]
//   },
//   stuart: {
//     tabs: [
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103668', //open
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103658', //audi
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103665', //infinite
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103657', //alf roman
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103666' //maserati
//     ]
//   },
//   jackson: {
//     tabs: [
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103668', //open
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103659', //bentley
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103666', //maserati
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103657' //alf roman
//     ]
//   },
//   chicago: {
//     tabs: [
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103668', //open
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103664', //honda
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103669' //volks
//     ]
//   },
//   edison: {
//     tabs: [
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103668', //open
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103663', //ferrari
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103659', //bentley
//       'https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=103666' //maserati
//     ]
//   }
// };


});

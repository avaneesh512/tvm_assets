window.addEventListener('DOMContentLoaded', (event) => {
// - - - - - Variables:
const D = document;

const careerPageSelectionRedBar = D.getElementById('careerPageSelectionRedBar');
const careerPageMapSelectionScroller = D.getElementById('careerPageMapSelectionScroller');

const miamiSelectionRedBar = D.getElementById('miamiSelectionRedBar');
const miamiScroll = D.getElementById('miamiScroll');

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

//dealers for each location and view positions variables
//miami location dealers
const miamiAll = D.getElementById('miamiAll');
const miamiGmc = D.getElementById('miamiGmc');
const miamiCadillac = D.getElementById('miamiCadillac');
const miamiHonda = D.getElementById('miamiHonda');
const miamiMazda = D.getElementById('miamiMazda');
const miamiBrickell = D.getElementById('miamiBrickell');

const hideMiamiAll = D.getElementById('hideMiamiAll');
const hideMiamiGmc = D.getElementById('hideMiamiGmc');
const hideMiamiCadillac = D.getElementById('hideMiamiCadillac');
const hideMiamiHonda = D.getElementById('hideMiamiHonda');
const hideMiamiMazda = D.getElementById('hideMiamiMazda');
const hideMiamiBrickell = D.getElementById('hideMiamiBrickell');

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

//miami dealers functions
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '0px';

  hideMiamiAll.style.display = 'inline-block';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiGmcSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '510px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'inline-block';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '770px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'inline-block';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '1030px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'inline-block';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '1290px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'inline-block';
  hideMiamiBrickell.style.display = 'none';
}
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiScroll.style.left = '1600px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'inline-block';
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

//miami dealers
miamiAll.addEventListener('click', () => {
  miamiAllSelected();
});
miamiGmc.addEventListener('click', () => {
  miamiGmcSelected();
});
miamiCadillac.addEventListener('click', () => {
  miamiCadillacSelected();
});
miamiHonda.addEventListener('click', () => {
  miamiHondaSelected();
});
miamiMazda.addEventListener('click', () => {
  miamiMazdaSelected();
});
miamiBrickell.addEventListener('click', () => {
  miamiBrickellSelected();
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

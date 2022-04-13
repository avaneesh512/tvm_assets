window.addEventListener('DOMContentLoaded', (event) => {
// - - - - - Variables:
const D = document;

const careerPageSelectionRedBar = D.getElementById('careerPageSelectionRedBar');
const careerPageMapSelectionScroller = D.getElementById('careerPageMapSelectionScroller');

//dealer scroll
const dealerScroll = D.getElementById('dealerScroll');
const miamiSelectionRedBar = D.getElementById('miamiSelectionRedBar');
const stuartSelectionRedBar = D.getElementById('stuartSelectionRedBar');
const jacksonSelectionRedBar = D.getElementById('jacksonSelectionRedBar');
const chicagoSelectionRedBar = D.getElementById('chicagoSelectionRedBar');
const edisonSelectionRedBar = D.getElementById('edisonSelectionRedBar');

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

//stuart locations dealers
const stuartAll = D.getElementById('stuartAll');
const stuartAudi = D.getElementById('stuartAudi');
const stuartInfiniti = D.getElementById('stuartInfiniti');
const stuartAlfa = D.getElementById('stuartAlfa');
const stuartMaserati = D.getElementById('stuartMaserati');

const hideStuartAll = D.getElementById('hideStuartAll');
const hideStuartAudi = D.getElementById('hideStuartAudi');
const hideStuartInfiniti = D.getElementById('hideStuartInfiniti');
const hideStuartAlfa = D.getElementById('hideStuartAlfa');
const hideStuartMaserati = D.getElementById('hideStuartMaserati');

//jackson locations dealers
const jacksonAll = D.getElementById('jacksonAll');
const jacksonBentley = D.getElementById('jacksonBentley');
const jacksonMaserati = D.getElementById('jacksonMaserati');
const jacksonAlfa = D.getElementById('jacksonAlfa');

const hideJacksonAll = D.getElementById('hideJacksonAll');
const hideJacksonBentley = D.getElementById('hideJacksonBentley');
const hideJacksonMaserati = D.getElementById('hideJacksonMaserati');
const hideJacksonAlfa = D.getElementById('hideJacksonAlfa');

//chicago locations dealers
const chicagoAll = D.getElementById('chicagoAll');
const chicagoHonda = D.getElementById('chicagoHonda');
const chicagoVolks = D.getElementById('chicagoVolks');

const hideChicagoAll = D.getElementById('hideChicagoAll');
const hideChicagoHonda = D.getElementById('hideChicagoHonda');
const hideChicagoVolks = D.getElementById('hideChicagoVolks');

//edison locations dealers
const edisonAll = D.getElementById('edisonAll');
const edisonFerrari = D.getElementById('edisonFerrari');
const edisonBentley = D.getElementById('edisonBentley');
const edisonMaserati = D.getElementById('edisonMaserati');

const hideEdisonAll = D.getElementById('hideEdisonAll');
const hideEdisonFerrari = D.getElementById('hideEdisonFerrari');
const hideEdisonBentley = D.getElementById('hideEdisonBentley');
const hideEdisonMaserati = D.getElementById('hideEdisonMaserati');

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
    careerPageSelectionRedBar.style.left = '312px';
    careerPageMapSelectionScroller.style.left = '-302px';
    careerPageSelectionRedBar.style.width = '302px';
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
    careerPageSelectionRedBar.style.left = '624px';
    careerPageMapSelectionScroller.style.left = '-302px';
    careerPageSelectionRedBar.style.width = '302px';
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
    careerPageSelectionRedBar.style.left = '936px';
    careerPageMapSelectionScroller.style.left = '-302px';
    careerPageSelectionRedBar.style.width = '302px';
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
    careerPageSelectionRedBar.style.left = '1248px';
    careerPageMapSelectionScroller.style.left = '-936px';
    careerPageSelectionRedBar.style.width = '302px';
  }
}

//miami dealers functions
function miamiAllSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '0px';

  hideMiamiAll.style.display = 'inline-block';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiGmcSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '260px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'inline-block';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiCadillacSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '520px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'inline-block';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiHondaSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '780px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'inline-block';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'none';
}
function miamiMazdaSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '1040px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'inline-block';
  hideMiamiBrickell.style.display = 'none';
}
function miamiBrickellSelected() {
  miamiSelectionRedBar.style.width = '250px';
  miamiSelectionRedBar.style.left = '1300px';

  hideMiamiAll.style.display = 'none';
  hideMiamiGmc.style.display = 'none';
  hideMiamiCadillac.style.display = 'none';
  hideMiamiHonda.style.display = 'none';
  hideMiamiMazda.style.display = 'none';
  hideMiamiBrickell.style.display = 'inline-block';
}

//stuart dealers functions
function stuartAllSelected() {
  stuartSelectionRedBar.style.width = '250px';
  stuartSelectionRedBar.style.left = '0px';

  hideStuartAll.style.display = 'inline-block';
  hideStuartAudi.style.display = 'none';
  hideStuartInfiniti.style.display = 'none';
  hideStuartAlfa.style.display = 'none';
  hideStuartMaserati.style.display = 'none';
}
function stuartAudiSelected() {
  stuartSelectionRedBar.style.width = '250px';
  stuartSelectionRedBar.style.left = '260px';

  hideStuartAll.style.display = 'none';
  hideStuartAudi.style.display = 'inline-block';
  hideStuartInfiniti.style.display = 'none';
  hideStuartAlfa.style.display = 'none';
  hideStuartMaserati.style.display = 'none';
}
function stuartInfinitiSelected() {
  stuartSelectionRedBar.style.width = '250px';
  stuartSelectionRedBar.style.left = '520px';

  hideStuartAll.style.display = 'none';
  hideStuartAudi.style.display = 'none';
  hideStuartInfiniti.style.display = 'inline-block';
  hideStuartAlfa.style.display = 'none';
  hideStuartMaserati.style.display = 'none';
}
function stuartAlfaSelected() {
  stuartSelectionRedBar.style.width = '250px';
  stuartSelectionRedBar.style.left = '780px';

  hideStuartAll.style.display = 'none';
  hideStuartAudi.style.display = 'none';
  hideStuartInfiniti.style.display = 'none';
  hideStuartAlfa.style.display = 'inline-block';
  hideStuartMaserati.style.display = 'none';
}
function stuartMaseratiSelected() {
  stuartSelectionRedBar.style.width = '250px';
  stuartSelectionRedBar.style.left = '1040px';

  hideStuartAll.style.display = 'none';
  hideStuartAudi.style.display = 'none';
  hideStuartInfiniti.style.display = 'none';
  hideStuartAlfa.style.display = 'none';
  hideStuartMaserati.style.display = 'inline-block';
}

//jackson dealers functions
function jacksonAllSelected() {
  jacksonSelectionRedBar.style.width = '250px';
  jacksonSelectionRedBar.style.left = '0px';

  hideJacksonAll.style.display = 'inline-block';
  hideJacksonBentley.style.display = 'none';
  hideJacksonMaserati.style.display = 'none';
  hideJacksonAlfa.style.display = 'none';
}
function jacksonBentleySelected() {
  jacksonSelectionRedBar.style.width = '250px';
  jacksonSelectionRedBar.style.left = '260px';

  hideJacksonAll.style.display = 'none';
  hideJacksonBentley.style.display = 'inline-block';
  hideJacksonMaserati.style.display = 'none';
  hideJacksonAlfa.style.display = 'none';
}
function jacksonMaseratiSelected() {
  jacksonSelectionRedBar.style.width = '250px';
  jacksonSelectionRedBar.style.left = '520px';

  hideJacksonAll.style.display = 'none';
  hideJacksonBentley.style.display = 'none';
  hideJacksonMaserati.style.display = 'inline-block';
  hideJacksonAlfa.style.display = 'none';
}
function jacksonAlfaSelected() {
  jacksonSelectionRedBar.style.width = '250px';
  jacksonSelectionRedBar.style.left = '780px';

  hideJacksonAll.style.display = 'none';
  hideJacksonBentley.style.display = 'none';
  hideJacksonMaserati.style.display = 'none';
  hideJacksonAlfa.style.display = 'inline-block';
}

//chicago dealers functions
function chicagoAllSelected() {
  chicagoSelectionRedBar.style.width = '250px';
  chicagoSelectionRedBar.style.left = '0px';

  hideChicagoAll.style.display = 'inline-block';
  hideChicagoHonda.style.display = 'none';
  hideChicagoVolks.style.display = 'none';
}
function chicagoHondaSelected() {
  chicagoSelectionRedBar.style.width = '250px';
  chicagoSelectionRedBar.style.left = '260px';

  hideChicagoAll.style.display = 'none';
  hideChicagoHonda.style.display = 'inline-block';
  hideChicagoVolks.style.display = 'none';
}
function chicagoVolksSelected() {
  chicagoSelectionRedBar.style.width = '250px';
  chicagoSelectionRedBar.style.left = '520px';

  hideChicagoAll.style.display = 'none';
  hideChicagoHonda.style.display = 'none';
  hideChicagoVolks.style.display = 'inline-block';
}

//edison dealers functions
function edisonAllSelected() {
  edisonSelectionRedBar.style.width = '250px';
  edisonSelectionRedBar.style.left = '0px';

  hideEdisonAll.style.display = 'inline-block';
  hideEdisonFerrari.style.display = 'none';
  hideEdisonBentley.style.display = 'none';
  hideEdisonMaserati.style.display = 'none';
}
function edisonFerrariSelected() {
  edisonSelectionRedBar.style.width = '250px';
  edisonSelectionRedBar.style.left = '260px';

  hideEdisonAll.style.display = 'none';
  hideEdisonFerrari.style.display = 'inline-block';
  hideEdisonBentley.style.display = 'none';
  hideEdisonMaserati.style.display = 'none';
}
function edisonBentleySelected() {
  edisonSelectionRedBar.style.width = '250px';
  edisonSelectionRedBar.style.left = '520px';

  hideEdisonAll.style.display = 'none';
  hideEdisonFerrari.style.display = 'none';
  hideEdisonBentley.style.display = 'inline-block';
  hideEdisonMaserati.style.display = 'none';
}
function edisonMaseratiSelected() {
  edisonSelectionRedBar.style.width = '250px';
  edisonSelectionRedBar.style.left = '780px';

  hideEdisonAll.style.display = 'none';
  hideEdisonFerrari.style.display = 'none';
  hideEdisonBentley.style.display = 'none';
  hideEdisonMaserati.style.display = 'inline-block';
}

// - - - - - Events
cityMiami.addEventListener('click', () => {
  miamiSelected();
});

cityStuart.addEventListener('click', () => {
  stuartSelected();
});

cityJackson.addEventListener('click', () => {
  jacksonSelected();
});

cityChicago.addEventListener('click', () => {
  chicagoSelected();
});

cityEdison.addEventListener('click', () => {
  edisonSelected();
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

//stuart dealers
stuartAll.addEventListener('click', () => {
  stuartAllSelected();
});
stuartAudi.addEventListener('click', () => {
  stuartAudiSelected();
});
stuartInfiniti.addEventListener('click', () => {
  stuartInfinitiSelected();
});
stuartAlfa.addEventListener('click', () => {
  stuartAlfaSelected();
});
stuartMaserati.addEventListener('click', () => {
  stuartMaseratiSelected();
});

//Jackson dealers
jacksonAll.addEventListener('click', () => {
  jacksonAllSelected();
});
jacksonBentley.addEventListener('click', () => {
  jacksonBentleySelected();
});
jacksonMaserati.addEventListener('click', () => {
  jacksonMaseratiSelected();
});
jacksonAlfa.addEventListener('click', () => {
  jacksonAlfaSelected();
});

//chicago dealers
chicagoAll.addEventListener('click', () => {
  chicagoAllSelected();
});
chicagoHonda.addEventListener('click', () => {
  chicagoHondaSelected();
});
chicagoVolks.addEventListener('click', () => {
  chicagoVolksSelected();
});

//edison dealers
edisonAll.addEventListener('click', () => {
  edisonAllSelected();
});
edisonFerrari.addEventListener('click', () => {
  edisonFerrariSelected();
});
edisonBentley.addEventListener('click', () => {
  edisonBentleySelected();
});
edisonMaserati.addEventListener('click', () => {
  edisonMaseratiSelected();
});


});

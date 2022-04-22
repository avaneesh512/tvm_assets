window.addEventListener('DOMContentLoaded', (event) => {
  // - - - - - Variables:
  const D = document;

  const careerPageSelectionRedBar = D.getElementById('careerPageSelectionRedBar');
  const careerPageMapSelectionScroller = D.getElementById('careerPageMapSelectionScroller');

  //dealer scroll
  const miamiScroll = D.getElementById('miamiScroll');
  const stuartScroll = D.getElementById('stuartScroll');
  const jacksonScroll = D.getElementById('jacksonScroll');
  const chicagoScroll = D.getElementById('chicagoScroll');
  const edisonScroll = D.getElementById('edisonScroll');

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
      careerPageSelectionRedBar.style.left = '10px';
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
      careerPageSelectionRedBar.style.left = '12px';
      careerPageMapSelectionScroller.style.left = '-612px';
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
      careerPageSelectionRedBar.style.left = '12px';
      careerPageMapSelectionScroller.style.left = '-924px';
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
      careerPageSelectionRedBar.style.left = '12px';
      careerPageMapSelectionScroller.style.left = '-1236px';
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

    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '0px';
      miamiScroll.style.left = '0px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '260px';
      miamiScroll.style.left = '-200px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '520px';
      miamiScroll.style.left = '-450px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '780px';
      miamiScroll.style.left = '-700px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '1040px';
      miamiScroll.style.left = '-960px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      miamiSelectionRedBar.style.left = '1300px';
      miamiScroll.style.left = '-1200px';
      miamiSelectionRedBar.style.width = '250px';
    }
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
    if (cityMQ.matches) {
      stuartSelectionRedBar.style.left = '0px';
      stuartScroll.style.left = '0px';
      stuartSelectionRedBar.style.width = '250px';
    }
  }
  function stuartAudiSelected() {
    stuartSelectionRedBar.style.width = '250px';
    stuartSelectionRedBar.style.left = '260px';

    hideStuartAll.style.display = 'none';
    hideStuartAudi.style.display = 'inline-block';
    hideStuartInfiniti.style.display = 'none';
    hideStuartAlfa.style.display = 'none';
    hideStuartMaserati.style.display = 'none';
    if (cityMQ.matches) {
      stuartSelectionRedBar.style.left = '260px';
      stuartScroll.style.left = '-200px';
      stuartSelectionRedBar.style.width = '250px';
    }
  }
  function stuartInfinitiSelected() {
    stuartSelectionRedBar.style.width = '250px';
    stuartSelectionRedBar.style.left = '520px';

    hideStuartAll.style.display = 'none';
    hideStuartAudi.style.display = 'none';
    hideStuartInfiniti.style.display = 'inline-block';
    hideStuartAlfa.style.display = 'none';
    hideStuartMaserati.style.display = 'none';
    if (cityMQ.matches) {
      stuartSelectionRedBar.style.left = '520px';
      stuartScroll.style.left = '-450px';
      stuartSelectionRedBar.style.width = '250px';
    }
  }
  function stuartAlfaSelected() {
    stuartSelectionRedBar.style.width = '250px';
    stuartSelectionRedBar.style.left = '780px';

    hideStuartAll.style.display = 'none';
    hideStuartAudi.style.display = 'none';
    hideStuartInfiniti.style.display = 'none';
    hideStuartAlfa.style.display = 'inline-block';
    hideStuartMaserati.style.display = 'none';
    if (cityMQ.matches) {
      stuartSelectionRedBar.style.left = '780px';
      stuartScroll.style.left = '-700px';
      stuartSelectionRedBar.style.width = '250px';
    }
  }
  function stuartMaseratiSelected() {
    stuartSelectionRedBar.style.width = '250px';
    stuartSelectionRedBar.style.left = '1040px';

    hideStuartAll.style.display = 'none';
    hideStuartAudi.style.display = 'none';
    hideStuartInfiniti.style.display = 'none';
    hideStuartAlfa.style.display = 'none';
    hideStuartMaserati.style.display = 'inline-block';
    if (cityMQ.matches) {
      stuartSelectionRedBar.style.left = '1040px';
      stuartScroll.style.left = '-960px';
      stuartSelectionRedBar.style.width = '250px';
    }
  }

  //jackson dealers functions
  function jacksonAllSelected() {
    jacksonSelectionRedBar.style.width = '250px';
    jacksonSelectionRedBar.style.left = '0px';

    hideJacksonAll.style.display = 'inline-block';
    hideJacksonBentley.style.display = 'none';
    hideJacksonMaserati.style.display = 'none';
    hideJacksonAlfa.style.display = 'none';

    if (cityMQ.matches) {
      jacksonSelectionRedBar.style.left = '0px';
      jacksonScroll.style.left = '0px';
      jacksonSelectionRedBar.style.width = '250px';
    }
  }
  function jacksonBentleySelected() {
    jacksonSelectionRedBar.style.width = '250px';
    jacksonSelectionRedBar.style.left = '260px';

    hideJacksonAll.style.display = 'none';
    hideJacksonBentley.style.display = 'inline-block';
    hideJacksonMaserati.style.display = 'none';
    hideJacksonAlfa.style.display = 'none';
    if (cityMQ.matches) {
      jacksonSelectionRedBar.style.left = '260px';
      jacksonScroll.style.left = '-200px';
      jacksonSelectionRedBar.style.width = '250px';
    }
  }
  function jacksonMaseratiSelected() {
    jacksonSelectionRedBar.style.width = '250px';
    jacksonSelectionRedBar.style.left = '520px';

    hideJacksonAll.style.display = 'none';
    hideJacksonBentley.style.display = 'none';
    hideJacksonMaserati.style.display = 'inline-block';
    hideJacksonAlfa.style.display = 'none';
    if (cityMQ.matches) {
      jacksonSelectionRedBar.style.left = '520px';
      jacksonScroll.style.left = '-450px';
      jacksonSelectionRedBar.style.width = '250px';
    }
  }
  function jacksonAlfaSelected() {
    jacksonSelectionRedBar.style.width = '250px';
    jacksonSelectionRedBar.style.left = '780px';

    hideJacksonAll.style.display = 'none';
    hideJacksonBentley.style.display = 'none';
    hideJacksonMaserati.style.display = 'none';
    hideJacksonAlfa.style.display = 'inline-block';
    if (cityMQ.matches) {
      jacksonSelectionRedBar.style.left = '780px';
      jacksonScroll.style.left = '-700px';
      jacksonSelectionRedBar.style.width = '250px';
    }
  }

  //chicago dealers functions
  function chicagoAllSelected() {
    chicagoSelectionRedBar.style.width = '250px';
    chicagoSelectionRedBar.style.left = '0px';

    hideChicagoAll.style.display = 'inline-block';
    hideChicagoHonda.style.display = 'none';
    hideChicagoVolks.style.display = 'none';
    if (cityMQ.matches) {
      chicagoSelectionRedBar.style.left = '0px';
      chicagoScroll.style.left = '0px';
      chicagoSelectionRedBar.style.width = '250px';
    }
  }
  function chicagoHondaSelected() {
    chicagoSelectionRedBar.style.width = '250px';
    chicagoSelectionRedBar.style.left = '260px';

    hideChicagoAll.style.display = 'none';
    hideChicagoHonda.style.display = 'inline-block';
    hideChicagoVolks.style.display = 'none';
    if (cityMQ.matches) {
      chicagoSelectionRedBar.style.left = '260px';
      chicagoScroll.style.left = '-200px';
      chicagoSelectionRedBar.style.width = '250px';
    }
  }
  function chicagoVolksSelected() {
    chicagoSelectionRedBar.style.width = '250px';
    chicagoSelectionRedBar.style.left = '520px';

    hideChicagoAll.style.display = 'none';
    hideChicagoHonda.style.display = 'none';
    hideChicagoVolks.style.display = 'inline-block';
    if (cityMQ.matches) {
      chicagoSelectionRedBar.style.left = '520px';
      chicagoScroll.style.left = '-450px';
      chicagoSelectionRedBar.style.width = '250px';
    }
  }

  //edison dealers functions
  function edisonAllSelected() {
    edisonSelectionRedBar.style.width = '250px';
    edisonSelectionRedBar.style.left = '0px';

    hideEdisonAll.style.display = 'inline-block';
    hideEdisonFerrari.style.display = 'none';
    hideEdisonBentley.style.display = 'none';
    hideEdisonMaserati.style.display = 'none';
    if (cityMQ.matches) {
      edisonSelectionRedBar.style.left = '0px';
      edisonScroll.style.left = '0px';
      edisonSelectionRedBar.style.width = '250px';
    }
  }
  function edisonFerrariSelected() {
    edisonSelectionRedBar.style.width = '250px';
    edisonSelectionRedBar.style.left = '260px';

    hideEdisonAll.style.display = 'none';
    hideEdisonFerrari.style.display = 'inline-block';
    hideEdisonBentley.style.display = 'none';
    hideEdisonMaserati.style.display = 'none';

    if (cityMQ.matches) {
      edisonSelectionRedBar.style.left = '260px';
      edisonScroll.style.left = '-200px';
      edisonSelectionRedBar.style.width = '250px';
    }
  }
  function edisonBentleySelected() {
    edisonSelectionRedBar.style.width = '250px';
    edisonSelectionRedBar.style.left = '520px';

    hideEdisonAll.style.display = 'none';
    hideEdisonFerrari.style.display = 'none';
    hideEdisonBentley.style.display = 'inline-block';
    hideEdisonMaserati.style.display = 'none';
    if (cityMQ.matches) {
      edisonSelectionRedBar.style.left = '520px';
      edisonScroll.style.left = '-450px';
      edisonSelectionRedBar.style.width = '250px';
    }
  }
  function edisonMaseratiSelected() {
    edisonSelectionRedBar.style.width = '250px';
    edisonSelectionRedBar.style.left = '780px';

    hideEdisonAll.style.display = 'none';
    hideEdisonFerrari.style.display = 'none';
    hideEdisonBentley.style.display = 'none';
    hideEdisonMaserati.style.display = 'inline-block';
    if (cityMQ.matches) {
      edisonSelectionRedBar.style.left = '780px';
      edisonScroll.style.left = '-700px';
      edisonSelectionRedBar.style.width = '250px';
    }
  }
  var selectedState = 'miami';
  var tabCount = 6;
  // - - - - - Events
  cityMiami.addEventListener('click', () => {
    miamiSelected();
    slideCount = 1;
  });

  cityStuart.addEventListener('click', () => {
    stuartSelected();
    slideCount = 2;
  });

  cityJackson.addEventListener('click', () => {
    jacksonSelected();
    slideCount = 3;
  });

  cityChicago.addEventListener('click', () => {
    chicagoSelected();
    slideCount = 4;
  });

  cityEdison.addEventListener('click', () => {
    edisonSelected();
    slideCount = 5;
  });

  //miami dealers
  miamiAll.addEventListener('click', () => {
    miamiAllSelected();
    tabSlideCount = 1;
  });
  miamiGmc.addEventListener('click', () => {
    miamiGmcSelected();
    tabSlideCount = 2;
  });
  miamiCadillac.addEventListener('click', () => {
    miamiCadillacSelected();
    tabSlideCount = 3;
  });
  miamiHonda.addEventListener('click', () => {
    miamiHondaSelected();
    tabSlideCount = 4;
  });
  miamiMazda.addEventListener('click', () => {
    miamiMazdaSelected();
    tabSlideCount = 5;
  });
  miamiBrickell.addEventListener('click', () => {
    miamiBrickellSelected();
    tabSlideCount = 6;
  });

  //stuart dealers
  stuartAll.addEventListener('click', () => {
    stuartAllSelected();
    tabSlideCount = 1;
  });
  stuartAudi.addEventListener('click', () => {
    stuartAudiSelected();
    tabSlideCount = 2;
  });
  stuartInfiniti.addEventListener('click', () => {
    stuartInfinitiSelected();
    tabSlideCount = 3;
  });
  stuartAlfa.addEventListener('click', () => {
    stuartAlfaSelected();
    tabSlideCount = 4;
  });
  stuartMaserati.addEventListener('click', () => {
    stuartMaseratiSelected();
    tabSlideCount = 5;
  });

  //Jackson dealers
  jacksonAll.addEventListener('click', () => {
    jacksonAllSelected();
    tabSlideCount = 1;
  });
  jacksonBentley.addEventListener('click', () => {
    jacksonBentleySelected();
    tabSlideCount = 2;
  });
  jacksonMaserati.addEventListener('click', () => {
    jacksonMaseratiSelected();
    tabSlideCount = 3;
  });
  jacksonAlfa.addEventListener('click', () => {
    jacksonAlfaSelected();
    tabSlideCount = 4;
  });

  //chicago dealers
  chicagoAll.addEventListener('click', () => {
    chicagoAllSelected();
    tabSlideCount = 1;
  });
  chicagoHonda.addEventListener('click', () => {
    chicagoHondaSelected();
    tabSlideCount = 2;
  });
  chicagoVolks.addEventListener('click', () => {
    chicagoVolksSelected();
    tabSlideCount = 3;
  });

  //edison dealers
  edisonAll.addEventListener('click', () => {
    edisonAllSelected();
    tabSlideCount = 1;
  });
  edisonFerrari.addEventListener('click', () => {
    edisonFerrariSelected();
    tabSlideCount = 2;
  });
  edisonBentley.addEventListener('click', () => {
    edisonBentleySelected();
    tabSlideCount = 3;
  });
  edisonMaserati.addEventListener('click', () => {
    edisonMaseratiSelected();
    tabSlideCount = 4;
  });

  var slideCount = 1;

  let touchstartX = 0;
  let touchendX = 0;

  let tabtouchstartX = 0;
  let tabtouchendX = 0;

  const slider = document.getElementById('careerPageMapSelectionScroller');
  const tabSlider = document.getElementById('careerPageTabs');

  function handleGesture() {
    if (touchendX > touchstartX) {
      if (slideCount <= 1) {
        return;
      }
      slideCount--;
    }
    if (touchendX < touchstartX) {
      if (slideCount >= 5) {
        return;
      }
      slideCount++;
    }
    switch (slideCount) {
      case 1:
        miamiSelected();
        selectedState = 'miami';
        tabCount = 6;
        tabSlideCount = 1;
        miamiAllSelected();
        break;
      case 2:
        stuartSelected();
        selectedState = 'stuart';
        tabCount = 5;
        tabSlideCount = 1;
        stuartAllSelected();
        break;
      case 3:
        jacksonSelected();
        selectedState = 'jackson';
        tabCount = 4;
        tabSlideCount = 1;
        jacksonAllSelected();
        break;
      case 4:
        chicagoSelected();
        selectedState = 'chicago';
        tabCount = 3;
        tabSlideCount = 1;
        chicagoAllSelected();
        break;
      case 5:
        edisonSelected();
        selectedState = 'edison';
        tabCount = 4;
        tabSlideCount = 1;
        edisonAllSelected();
        break;
    }
  }

  slider.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    debounce(handleGesture, 100);
  });

  tabSlider.addEventListener('touchstart', (e) => {
    tabtouchstartX = e.changedTouches[0].screenX;
  });

  tabSlider.addEventListener('touchend', (e) => {
    tabtouchendX = e.changedTouches[0].screenX;
    debounce(tabHandleGesture, 100);
  });

  function debounce(method, delay) {
    let cancelScroll;
    clearTimeout(cancelScroll);
    cancelScroll = setTimeout(function () {
      method();
    }, delay);
  }

  var tabSlideCount = 1;

  function tabHandleGesture() {
    if (tabtouchendX > tabtouchstartX) {
      if (tabSlideCount <= 1) {
        return;
      }
      tabSlideCount--;
    }
    if (tabtouchendX < tabtouchstartX) {
      if (tabSlideCount >= tabCount) {
        return;
      }
      tabSlideCount++;
    }

    switch (selectedState) {
      case 'miami':
        switch (tabSlideCount) {
          case 1:
            miamiAllSelected();
            break;
          case 2:
            miamiGmcSelected();
            break;
          case 3:
            miamiCadillacSelected();
            break;
          case 4:
            miamiHondaSelected();
            break;
          case 5:
            miamiMazdaSelected();
            break;
          case 6:
            miamiBrickellSelected();
            break;
        }
        break;
      case 'stuart':
        switch (tabSlideCount) {
          case 1:
            stuartAllSelected();
            break;
          case 2:
            stuartAudiSelected();
            break;
          case 3:
            stuartInfinitiSelected();
            break;
          case 4:
            stuartAlfaSelected();
            break;
          case 5:
            stuartMaseratiSelected();
            break;
        }
        break;
      case 'jackson':
        switch (tabSlideCount) {
          case 1:
            jacksonAllSelected();
            break;
          case 2:
            jacksonBentleySelected();
            break;
          case 3:
            jacksonMaseratiSelected();
            break;
          case 4:
            jacksonAlfaSelected();
            break;
        }
        break;
      case 'chicago':
        switch (tabSlideCount) {
          case 1:
            chicagoAllSelected();
            break;
          case 2:
            chicagoHondaSelected();
            break;
          case 3:
            chicagoVolksSelected();
            break;
        }
        break;
      case 'edison':
        switch (tabSlideCount) {
          case 1:
            edisonAllSelected();
            break;
          case 2:
            edisonFerrariSelected();
            break;
          case 3:
            edisonBentleySelected();
            break;
          case 4:
            edisonMaseratiSelected();
            break;
        }
        break;
    }
  }
});

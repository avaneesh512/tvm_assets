window.onload = function(){


const homeMap = document;

const homePageMapSelectionRedBar = homeMap.getElementById('homePageMapSelectionRedBar');
const homePageMapSelectionScroller = homeMap.getElementById('homePageMapSelectionScroller');

const cityMiami = homeMap.getElementById('cityMiami');
const cityStuart = homeMap.getElementById('cityStuart');
const cityJackson = homeMap.getElementById('cityJackson');
const cityChicago = homeMap.getElementById('cityChicago');
const cityEdison = homeMap.getElementById('cityEdison');

const hideMiami = homeMap.getElementById('hideMiami');
const hideStuart = homeMap.getElementById('hideStuart');
const hideJackson = homeMap.getElementById('hideJackson');
const hideChicago = homeMap.getElementById('hideChicago');
const hideEdison = homeMap.getElementById('hideEdison');

let cityMQ = window.matchMedia("(max-width: 1050px)");

// - - - - - Functions:
function miamiSelected() {
    homePageMapSelectionRedBar.style.width = "111px";
    homePageMapSelectionRedBar.style.left = "0px";

    hideMiami.style.display = "inline-block";
    hideStuart.style.display = "none";
    hideJackson.style.display = "none";
    hideChicago.style.display = "none";
    hideEdison.style.display = "none";
    
    if (cityMQ.matches) {
        homePageMapSelectionRedBar.style.left = "0px";
        homePageMapSelectionScroller.style.left = "0px";
        homePageMapSelectionRedBar.style.width = "94px";
    }
}

function stuartSelected() {
    homePageMapSelectionRedBar.style.width = "113px";
    homePageMapSelectionRedBar.style.left = "150px";

    hideMiami.style.display = "none";
    hideStuart.style.display = "inline-block";
    hideJackson.style.display = "none";
    hideChicago.style.display = "none";
    hideEdison.style.display = "none";
    
    if (cityMQ.matches) {
        homePageMapSelectionRedBar.style.left = "150px";
        homePageMapSelectionScroller.style.left = "0px";
        homePageMapSelectionRedBar.style.width = "96px";
    }
}

function jacksonSelected() {
    homePageMapSelectionRedBar.style.width = "187px";
    homePageMapSelectionRedBar.style.left = "300px";

    hideMiami.style.display = "none";
    hideStuart.style.display = "none";
    hideJackson.style.display = "inline-block";
    hideChicago.style.display = "none";
    hideEdison.style.display = "none";
    
    if (cityMQ.matches) {
        homePageMapSelectionRedBar.style.left = "150px";
        homePageMapSelectionScroller.style.left = "-150px";
        homePageMapSelectionRedBar.style.width = "155px";
    }

}

function chicagoSelected() {
    homePageMapSelectionRedBar.style.width = "130px"; 
    homePageMapSelectionRedBar.style.left = "530px";

    hideMiami.style.display = "none";
    hideStuart.style.display = "none";
    hideJackson.style.display = "none";
    hideChicago.style.display = "inline-block";
    hideEdison.style.display = "none";
    
    if (cityMQ.matches) {
        homePageMapSelectionRedBar.style.left = "150px";
        homePageMapSelectionScroller.style.left = "-380px";
        homePageMapSelectionRedBar.style.width = "108px";
    }

}

function edisonSelected() {
    homePageMapSelectionRedBar.style.width = "124px";
    homePageMapSelectionRedBar.style.left = "700px";

    hideMiami.style.display = "none";
    hideStuart.style.display = "none";
    hideJackson.style.display = "none";
    hideChicago.style.display = "none";
    hideEdison.style.display = "inline-block";
    
    if (cityMQ.matches) {
        homePageMapSelectionRedBar.style.left = "150px";
        homePageMapSelectionScroller.style.left = "-550px";
        homePageMapSelectionRedBar.style.width = "103px";
    }

}

// - - - - - Events
cityMiami.addEventListener('click', () => {
    miamiSelected();
});

cityStuart.addEventListener('click', () => {
    stuartSelected()
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
}

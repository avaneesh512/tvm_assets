window.addEventListener('DOMContentLoaded', (event) => {

// - - - - - Variables
let D = document;

const prof01 = D.getElementById('prof01');
const prof02 = D.getElementById('prof02');
const prof03 = D.getElementById('prof03');
const prof04 = D.getElementById('prof04');
const prof05 = D.getElementById('prof05');

const profileName01 = D.getElementById('profileName01');
const profileName02 = D.getElementById('profileName02');
const profileName03 = D.getElementById('profileName03');
const profileName04 = D.getElementById('profileName04');
const profileName05 = D.getElementById('profileName05');

const profileText01 = D.getElementById('profileText01');
const profileText02 = D.getElementById('profileText02');
const profileText03 = D.getElementById('profileText03');
const profileText04 = D.getElementById('profileText04');
const profileText05 = D.getElementById('profileText05');

const executivesProfileCont = D.getElementById('executivesProfileCont');

let execMQ = window.matchMedia("(max-width: 1400px)");
let execMQsmall = window.matchMedia("(max-width: 450px)");

const executivesRedBar = D.getElementById('executivesRedBar');

// - - - - - Functions:
function profile01selected() {
    executivesRedBar.style.left = "0px";

    profileName01.style.color = "#000000";
    profileName02.style.color = "#999999";
    profileName03.style.color = "#999999";
    profileName04.style.color = "#999999";
    profileName05.style.color = "#999999";
    
    profileText01.style.display = "inline-block";
    profileText02.style.display = "none";
    profileText03.style.display = "none";
    profileText04.style.display = "none";
    profileText05.style.display = "none";
    
    if (execMQ.matches) {
        executivesProfileCont.style.left = "0px";
    }
    
    if (execMQsmall.matches) {
        executivesProfileCont.style.left = "0px";
    }
}

function profile02selected() {
    executivesRedBar.style.left = "270px";

    profileName01.style.color = "#999999";
    profileName02.style.color = "#000000";
    profileName03.style.color = "#999999";
    profileName04.style.color = "#999999";
    profileName05.style.color = "#999999";
    
    profileText01.style.display = "none";
    profileText02.style.display = "inline-block";
    profileText03.style.display = "none";
    profileText04.style.display = "none";
    profileText05.style.display = "none";
    
    if (execMQ.matches) {
        executivesProfileCont.style.left = "-150px";
    }
    
    if (execMQsmall.matches) {
        executivesRedBar.style.left = "205px";
        executivesProfileCont.style.left = "-150px";
    }
}

function profile03selected() {
    executivesRedBar.style.left = "540px";

    profileName01.style.color = "#999999";
    profileName02.style.color = "#999999";
    profileName03.style.color = "#000000";
    profileName04.style.color = "#999999";
    profileName05.style.color = "#999999";
    
    profileText01.style.display = "none";
    profileText02.style.display = "none";
    profileText03.style.display = "inline-block";
    profileText04.style.display = "none";
    profileText05.style.display = "none";
    
    if (execMQ.matches) {
        executivesProfileCont.style.left = "-420px";
    }
    
    if (execMQsmall.matches) {
        executivesRedBar.style.left = "410px";
        executivesProfileCont.style.left = "-355px";
    }
}

function profile04selected() {
    executivesRedBar.style.left = "810px";

    profileName01.style.color = "#999999";
    profileName02.style.color = "#999999";
    profileName03.style.color = "#999999";
    profileName04.style.color = "#000000";
    profileName05.style.color = "#999999";
    
    profileText01.style.display = "none";
    profileText02.style.display = "none";
    profileText03.style.display = "none";
    profileText04.style.display = "inline-block";
    profileText05.style.display = "none";
    
    if (execMQ.matches) {
        executivesProfileCont.style.left = "-690px";
    }
    
    if (execMQsmall.matches) {
        executivesRedBar.style.left = "615px";
        executivesProfileCont.style.left = "-560px";
    }
}

function profile05selected() {
    executivesRedBar.style.left = "1080px";

    profileName01.style.color = "#999999";
    profileName02.style.color = "#999999";
    profileName03.style.color = "#999999";
    profileName04.style.color = "#999999";
    profileName05.style.color = "#000000";
    
    profileText01.style.display = "none";
    profileText02.style.display = "none";
    profileText03.style.display = "none";
    profileText04.style.display = "none";
    profileText05.style.display = "inline-block";
    
    if (execMQ.matches) {
        executivesProfileCont.style.left = "-960px";
    }
    
    if (execMQsmall.matches) {
        executivesRedBar.style.left = "820px";
        executivesProfileCont.style.left = "-765px";
    }
}

// - - - - - Events:

prof01.addEventListener('click', () => {
    profile01selected();
});

prof02.addEventListener('click', () => {
    profile02selected();
});


prof03.addEventListener('click', () => {
    profile03selected();
});


prof04.addEventListener('click', () => {
    profile04selected();
});


prof05.addEventListener('click', () => {
    profile05selected();
});

// - - - - - Red More button Variables:

const readMoreButton01 = D.getElementById('readMoreButton01');
const readMoreButton02 = D.getElementById('readMoreButton02');

const readMoreArrowCont01 = D.getElementById('readMoreArrowCont01');
const readMoreArrowCont02 = D.getElementById('readMoreArrowCont02');

const readMoreText01 = D.getElementById('readMoreText01');
const readMoreText02 = D.getElementById('readMoreText02');

const readMore01 = D.getElementById('readMore01');
const readMore02 = D.getElementById('readMore02');

let readMoreIsOpen01 = false;
let readMoreIsOpen02 = false;


let redMoreMQ = window.matchMedia("(max-width: 750px)");

// - - - - - Red More button functions:

readMoreButton01.addEventListener('click', () => {

    if (readMoreIsOpen01 == false) {
        readMoreIsOpen01 = true;
        readMoreText01.innerHTML = 'See Less';
        readMore01.style.display = "inline";
        readMoreArrowCont01.style.transform = "rotate(135deg)";
        readMoreArrowCont01.style.top =  "5px";
        if (redMoreMQ.matches) {
            readMoreArrowCont01.style.top =  "5px";
        }
    }
    else if (readMoreIsOpen01 == true) {
        readMoreIsOpen01 = false;
        readMoreText01.innerHTML = 'See More';
        readMore01.style.display = "none";
        readMoreArrowCont01.style.transform = "rotate(-45deg)";
        readMoreArrowCont01.style.top =  "2px";
        if (redMoreMQ.matches) {
            readMoreArrowCont01.style.top =  "1px";
        }
    }        
});

readMoreButton02.addEventListener('click', () => {
    if (readMoreIsOpen02 == false) {
        readMoreIsOpen02 = true;
        readMoreText02.innerHTML = 'See Less';
        readMore02.style.display = "inline";
        readMoreArrowCont02.style.transform = "rotate(135deg)";
        readMoreArrowCont02.style.top =  "5px";
        if (redMoreMQ.matches) {
            readMoreArrowCont02.style.top =  "5px";
        }
    }
    else if (readMoreIsOpen02 == true) {
        readMoreIsOpen02 = false;
        readMoreText02.innerHTML = 'See More';
        readMore02.style.display = "none";
        readMoreArrowCont02.style.transform = "rotate(-45deg)";
        readMoreArrowCont02.style.top =  "2px";
        if (redMoreMQ.matches) {
            readMoreArrowCont02.style.top =  "1px";
        }
    }        
});


});

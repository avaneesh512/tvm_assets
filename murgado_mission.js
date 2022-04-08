window.addEventListener('DOMContentLoaded', (event) => {
// - - - - - Variables
let D = document;

const missionDot01 = D.getElementById('missionDot01');
const missionDot02 = D.getElementById('missionDot02');
const missionDot03 = D.getElementById('missionDot03');
const missionDot04 = D.getElementById('missionDot04');
const missionDot05 = D.getElementById('missionDot05');
const missionDot06 = D.getElementById('missionDot06');
const missionDot07 = D.getElementById('missionDot07');
const missionDot08 = D.getElementById('missionDot08');
const missionDot09 = D.getElementById('missionDot09');
const missionDot10 = D.getElementById('missionDot10');

const missionLeftArrow = D.getElementById('missionLeftArrow');
const missionRightArrow = D.getElementById('missionRightArrow');

const missionCarouselScroll = D.getElementById('missionCarouselScroll');

let missionMQ = window.matchMedia("(max-width: 1000px)");
let missionMQsmall = window.matchMedia("(max-width: 600px)");

let missionCarouselPos = 1;

// - - - - - Functions:
function missionCarouselPos01() {
    missionCarouselPos = 1;
    missionCarouselScroll.style.left = "0";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "0";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "0";
    }

    missionLeftArrow.style.backgroundColor = "#cccccc";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#2A3886";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos02() {
    missionCarouselPos = 2;
    missionCarouselScroll.style.left = "-817px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-520px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-270px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#2A3886";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos03() {
    missionCarouselPos = 3;
    missionCarouselScroll.style.left = "-1634px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-1040px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-540px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#2A3886";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos04() {
    missionCarouselPos = 4;
    missionCarouselScroll.style.left = "-2451px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-1560px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-810px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#2A3886";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos05() {
    missionCarouselPos = 5;
    missionCarouselScroll.style.left = "-3268px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-2080px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-1080px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#2A3886";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos06() {
    missionCarouselPos = 6;
    missionCarouselScroll.style.left = "-4085px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-2600px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-1350px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#2A3886";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos07() {
    missionCarouselPos = 7;
    missionCarouselScroll.style.left = "-4902px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-3120px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-1620px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#2A3886";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos08() {
    missionCarouselPos = 8;
    missionCarouselScroll.style.left = "-5719px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-3640px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-1890px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#2A3886";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos09() {
    missionCarouselPos = 9;
    missionCarouselScroll.style.left = "-6536px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-4160px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-2160px";
    }
    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#2A3886";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#2A3886";
    missionDot10.style.backgroundColor = "#ffffff";    
}

function missionCarouselPos10() {
    missionCarouselPos = 10;
    missionCarouselScroll.style.left = "-7353px";
        
    if (missionMQ.matches) {
        missionCarouselScroll.style.left = "-4680px";
    }
    
    if (missionMQsmall.matches) {
        missionCarouselScroll.style.left = "-2430px";
    }

    missionLeftArrow.style.backgroundColor = "#2A3886";
    missionRightArrow.style.backgroundColor = "#cccccc";

    missionDot01.style.backgroundColor = "#ffffff";
    missionDot02.style.backgroundColor = "#ffffff";
    missionDot03.style.backgroundColor = "#ffffff";
    missionDot04.style.backgroundColor = "#ffffff";
    missionDot05.style.backgroundColor = "#ffffff";
    missionDot06.style.backgroundColor = "#ffffff";
    missionDot07.style.backgroundColor = "#ffffff";
    missionDot08.style.backgroundColor = "#ffffff";
    missionDot09.style.backgroundColor = "#ffffff";
    missionDot10.style.backgroundColor = "#2A3886";    
}

// - - - - - Events:
missionRightArrow.addEventListener('click', () => {
    if (missionCarouselPos === 1) {
        missionCarouselPos02();
    }
    else if (missionCarouselPos === 2) {
        missionCarouselPos03();
    }
    else if (missionCarouselPos === 3) {
        missionCarouselPos04();
    }
    else if (missionCarouselPos === 4) {
        missionCarouselPos05();
    }
    else if (missionCarouselPos === 5) {
        missionCarouselPos06();
    }
    else if (missionCarouselPos === 6) {
        missionCarouselPos07();
    }
    else if (missionCarouselPos === 7) {
        missionCarouselPos08();
    }
    else if (missionCarouselPos === 8) {
        missionCarouselPos09();
    }
    else if (missionCarouselPos === 9) {
        missionCarouselPos10();
    }
});

missionLeftArrow.addEventListener('click', () => {
    if (missionCarouselPos === 10) {
        missionCarouselPos09();
    }
    else if (missionCarouselPos === 9) {
        missionCarouselPos08();
    }
    else if (missionCarouselPos === 8) {
        missionCarouselPos07();
    }
    else if (missionCarouselPos === 7) {
        missionCarouselPos06();
    }
    else if (missionCarouselPos === 6) {
        missionCarouselPos05();
    }
    else if (missionCarouselPos === 5) {
        missionCarouselPos04();
    }
    else if (missionCarouselPos === 4) {
        missionCarouselPos03();
    }
    else if (missionCarouselPos === 3) {
        missionCarouselPos02();
    }
    else if (missionCarouselPos === 2) {
        missionCarouselPos01();
    }
});

missionDot01.addEventListener('click', () => {
    missionCarouselPos01();
});

missionDot02.addEventListener('click', () => {
    missionCarouselPos02();
});

missionDot03.addEventListener('click', () => {
    missionCarouselPos03();
});

missionDot04.addEventListener('click', () => {
    missionCarouselPos04();
});

missionDot05.addEventListener('click', () => {
    missionCarouselPos05();
});

missionDot06.addEventListener('click', () => {
    missionCarouselPos06();
});

missionDot07.addEventListener('click', () => {
    missionCarouselPos07();
});

missionDot08.addEventListener('click', () => {
    missionCarouselPos08();
});

missionDot09.addEventListener('click', () => {
    missionCarouselPos09();
});

missionDot10.addEventListener('click', () => {
    missionCarouselPos10();
});



// SWIPE events: 

let touchstartX = 0
let touchendX = 0

function handleGesture() {

    if (touchendX < touchstartX) {
        if (missionCarouselPos === 1) {
            missionCarouselPos02();
        }
        else if (missionCarouselPos === 2) {
            missionCarouselPos03();
        }
        else if (missionCarouselPos === 3) {
            missionCarouselPos04();
        }
        else if (missionCarouselPos === 4) {
            missionCarouselPos05();
        }
        else if (missionCarouselPos === 5) {
            missionCarouselPos06();
        }
        else if (missionCarouselPos === 6) {
            missionCarouselPos07();
        }
        else if (missionCarouselPos === 7) {
            missionCarouselPos08();
        }
        else if (missionCarouselPos === 8) {
            missionCarouselPos09();
        }
        else if (missionCarouselPos === 9) {
            missionCarouselPos10();
        }
    }

    if (touchendX > touchstartX) {
        if (missionCarouselPos === 10) {
            missionCarouselPos09();
        }
        else if (missionCarouselPos === 9) {
            missionCarouselPos08();
        }
        else if (missionCarouselPos === 8) {
            missionCarouselPos07();
        }
        else if (missionCarouselPos === 7) {
            missionCarouselPos06();
        }
        else if (missionCarouselPos === 6) {
            missionCarouselPos05();
        }
        else if (missionCarouselPos === 5) {
            missionCarouselPos04();
        }
        else if (missionCarouselPos === 4) {
            missionCarouselPos03();
        }
        else if (missionCarouselPos === 3) {
            missionCarouselPos02();
        }
        else if (missionCarouselPos === 2) {
            missionCarouselPos01();
        }        
    }
}

missionCarouselScroll.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

missionCarouselScroll.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
})

murgadoTimelineIconMainContainer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

murgadoTimelineIconMainContainer.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
})
    });

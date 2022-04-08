window.addEventListener('DOMContentLoaded', (event) => {

// - - - - - Variables
let D = document;

let timelinePage = 1;

const murgadoTimelineIcon01 = D.getElementById('murgadoTimelineIcon01');
const murgadoTimelineIcon02 = D.getElementById('murgadoTimelineIcon02');
const murgadoTimelineIcon03 = D.getElementById('murgadoTimelineIcon03');
const murgadoTimelineIcon04 = D.getElementById('murgadoTimelineIcon04');
const murgadoTimelineIcon05 = D.getElementById('murgadoTimelineIcon05');
const murgadoTimelineIcon06 = D.getElementById('murgadoTimelineIcon06');
const murgadoTimelineIcon07 = D.getElementById('murgadoTimelineIcon07');
const murgadoTimelineIcon08 = D.getElementById('murgadoTimelineIcon08');

const bottomHeroTextCont01 = D.getElementById('bottomHeroTextCont01');
const bottomHeroTextCont02 = D.getElementById('bottomHeroTextCont02');
const bottomHeroTextCont03 = D.getElementById('bottomHeroTextCont03');
const bottomHeroTextCont04 = D.getElementById('bottomHeroTextCont04');
const bottomHeroTextCont05 = D.getElementById('bottomHeroTextCont05');
const bottomHeroTextCont06 = D.getElementById('bottomHeroTextCont06');
const bottomHeroTextCont07 = D.getElementById('bottomHeroTextCont07');
const bottomHeroTextCont08 = D.getElementById('bottomHeroTextCont08'); 

const murgadoHero01 = D.getElementById('murgadoHero01');
const murgadoHero02 = D.getElementById('murgadoHero02');
const murgadoHero03 = D.getElementById('murgadoHero03');
const murgadoHero04 = D.getElementById('murgadoHero04');
const murgadoHero05 = D.getElementById('murgadoHero05');
const murgadoHero06 = D.getElementById('murgadoHero06');
const murgadoHero07 = D.getElementById('murgadoHero07');
const murgadoHero08 = D.getElementById('murgadoHero08');

const circle01 = D.getElementById('circle01');
const circle02 = D.getElementById('circle02');
const circle03 = D.getElementById('circle03');
const circle04 = D.getElementById('circle04');
const circle05 = D.getElementById('circle05');
const circle06 = D.getElementById('circle06');
const circle07 = D.getElementById('circle07');
const circle08 = D.getElementById('circle08');

const murgadoTimelineIconCont = D.getElementById('murgadoTimelineIconCont');

const murgadoTimelineIconMainContainer = D.getElementById('murgadoTimelineIconMainContainer');

var timelineTablet = window.matchMedia("(max-width: 800px)");

// Timeline functions:
function timeline01() {
    timelinePage = 1;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="0";
    }

    bottomHeroTextCont01.style.display = "inline-block";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "1";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleClosed");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");

    circle01.classList.add("redCircleOpen");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline02() {
    timelinePage = 2;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-50px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "inline-block";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "1";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleClosed");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");

    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleOpen");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline03() {
    timelinePage = 3;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-150px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "inline-block";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "1";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleClosed");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");

    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleOpen");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline04() {
    timelinePage = 4;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-250px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "inline-block";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "4";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleClosed");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");

    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleOpen");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline05() {
    timelinePage = 5;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-350px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "inline-block";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "1";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleClosed");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");
    
    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleOpen");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline06() {
    timelinePage = 6;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-450px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "inline-block";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "1";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleClosed");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleOpen");        

    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleOpen");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleClosed");
}

function timeline07() {
    timelinePage = 7;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-500px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "inline-block";
    bottomHeroTextCont08.style.display = "none";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "1";
    murgadoHero08.style.opacity = "0";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleClosed");
    circle08.classList.remove("redCircleOpen");
    
    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleOpen");
    circle08.classList.add("redCircleClosed");
}

function timeline08() {
    timelinePage = 8;
    
    if (timelineTablet.matches) {
        murgadoTimelineIconCont.style.left ="-550px";
    }

    bottomHeroTextCont01.style.display = "none";
    bottomHeroTextCont02.style.display = "none";
    bottomHeroTextCont03.style.display = "none";
    bottomHeroTextCont04.style.display = "none";
    bottomHeroTextCont05.style.display = "none";
    bottomHeroTextCont06.style.display = "none";
    bottomHeroTextCont07.style.display = "none";
    bottomHeroTextCont08.style.display = "inline-block";

    murgadoHero01.style.opacity = "0";
    murgadoHero02.style.opacity = "0";
    murgadoHero03.style.opacity = "0";
    murgadoHero04.style.opacity = "0";
    murgadoHero05.style.opacity = "0";
    murgadoHero06.style.opacity = "0";
    murgadoHero07.style.opacity = "0";
    murgadoHero08.style.opacity = "1";

    circle01.classList.remove("redCircleOpen");
    circle02.classList.remove("redCircleOpen");
    circle03.classList.remove("redCircleOpen");
    circle04.classList.remove("redCircleOpen");
    circle05.classList.remove("redCircleOpen");
    circle06.classList.remove("redCircleOpen");
    circle07.classList.remove("redCircleOpen");
    circle08.classList.remove("redCircleClosed");        

    circle01.classList.add("redCircleClosed");
    circle02.classList.add("redCircleClosed");
    circle03.classList.add("redCircleClosed");
    circle04.classList.add("redCircleClosed");
    circle05.classList.add("redCircleClosed");
    circle06.classList.add("redCircleClosed");
    circle07.classList.add("redCircleClosed");
    circle08.classList.add("redCircleOpen");
}

murgadoTimelineIcon01.addEventListener('click', () => {
    timeline01();
});

murgadoTimelineIcon02.addEventListener('click', () => {
    timeline02();
})

murgadoTimelineIcon03.addEventListener('click', () => {
    timeline03();
})

murgadoTimelineIcon04.addEventListener('click', () => {
    timeline04();
})

murgadoTimelineIcon05.addEventListener('click', () => {
    timeline05();
})

murgadoTimelineIcon06.addEventListener('click', () => {
    timeline06();
})

murgadoTimelineIcon07.addEventListener('click', () => {
    timeline07();
})

murgadoTimelineIcon08.addEventListener('click', () => {
    timeline08();
})

// SWIPE events: 

const swipeLayer = D.getElementById('swipeLayer');

let touchstartX = 0
let touchendX = 0

function handleGesture() {

    if (touchendX < touchstartX) {
        if (timelinePage === 1) {
            timeline02();
        }
        else if (timelinePage === 2) {
            timeline03();
        }
        else if (timelinePage === 3) {
            timeline04();
        }
        else if (timelinePage === 4) {
            timeline05();
        }
        else if (timelinePage === 5) {
            timeline06();
        }
        else if (timelinePage === 6) {
            timeline07();
        }
        else if (timelinePage === 7) {
            timeline08();
        }
    }

    if (touchendX > touchstartX) {
        if (timelinePage === 8) {
            timeline07();
        }
        else if (timelinePage === 7) {
            timeline06();
        }
        else if (timelinePage === 6) {
            timeline05();
        }
        else if (timelinePage === 5) {
            timeline04();
        }
        else if (timelinePage === 4) {
            timeline03();
        }
        else if (timelinePage === 3) {
            timeline02();
        }
        else if (timelinePage === 2) {
            timeline01();
        }
        
    }
}

swipeLayer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

swipeLayer.addEventListener('touchend', e => {
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

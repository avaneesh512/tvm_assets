window.addEventListener('DOMContentLoaded', (event) => {


// - - - - - Variables:
let D = document;

const OEMSelectionRedBar = D.getElementById('OEMSelectionRedBar');
const OEMlogosLongCont = D.getElementById('OEMlogosLongCont');

const logos_bentley = D.getElementById('logos_bentley');
const logos_blm = D.getElementById('logos_blm');
const logos_buick = D.getElementById('logos_buick');
const logos_cadillac = D.getElementById('logos_cadillac');
const logos_ferrari = D.getElementById('logos_ferrari');
const logos_gmc = D.getElementById('logos_gmc');
const logos_honda = D.getElementById('logos_honda');
const logos_infiniti = D.getElementById('logos_infiniti');
const logos_maserati = D.getElementById('logos_maserati');
const logos_mazda = D.getElementById('logos_mazda');
const logos_vw = D.getElementById('logos_vw');
const logos_webuy = D.getElementById('logos_webuy');
const logos_alfa = D.getElementById('logos_alfa');
const logos_audi = D.getElementById('logos_audi');

const tabGroupAlfa = D.getElementById('tabGroupAlfa');
const tabGroupAudi = D.getElementById('tabGroupAudi');
const tabGroupBentley = D.getElementById('tabGroupBentley');
const tabGroupBuick = D.getElementById('tabGroupBuick');
const tabGroupCadillac = D.getElementById('tabGroupCadillac');
const tabGroupFerrari = D.getElementById('tabGroupFerrari');
const tabGroupGMC = D.getElementById('tabGroupGMC');
const tabGroupHonda = D.getElementById('tabGroupHonda');
const tabGroupInfiniti = D.getElementById('tabGroupInfiniti');
const tabGroupMaserati = D.getElementById('tabGroupMaserati');
const tabGroupMazda = D.getElementById('tabGroupMazda');
const tabGroupVW = D.getElementById('tabGroupVW');
const tabGroupBLM = D.getElementById('tabGroupBLM');
const tabGroupWeBuy = D.getElementById('tabGroupWeBuy');

let OEMMQ = window.matchMedia("(max-width: 1650px)");
let OEMMQsmall = window.matchMedia("(max-width: 600px)");

let logoIconPosition = 1;

// - - - - - Functions:
function alfaSelected() {
    logoIconPosition = 1;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupAlfa.style.display = "inline-block";

    OEMSelectionRedBar.style.left = "0px";
    OEMSelectionRedBar.style.width = "85px";
    
    if (OEMMQ.matches) {
        OEMlogosLongCont.style.left = "0px";
    }
    
    if (OEMMQsmall.matches) {
        OEMlogosLongCont.style.left = "0px";
    }
}

function audiSelected() {
    logoIconPosition = 2;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupAudi.style.display = "inline-block";

    OEMSelectionRedBar.style.left = "115px";
    OEMSelectionRedBar.style.width = "83px";
    
    if (OEMMQ.matches) {
        OEMlogosLongCont.style.left = "0px";
    }
    
    if (OEMMQsmall.matches) {
        OEMlogosLongCont.style.left = "0px";
    }
}    

function bentleySelected() {
    logoIconPosition = 3;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupBentley.style.display = "inline-block";

    OEMSelectionRedBar.style.left = "228px";
    OEMSelectionRedBar.style.width = "88px";
    
    if (OEMMQ.matches) {
        OEMlogosLongCont.style.left = "0px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "115px";
        OEMlogosLongCont.style.left = "-115px";
    }
}

function buickSelected() {
    logoIconPosition = 4;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupBuick.style.display = "inline-block";

    OEMSelectionRedBar.style.left = "346px";
    OEMSelectionRedBar.style.width = "89px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "233px";
        OEMlogosLongCont.style.left = "-115px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "125px";
        OEMlogosLongCont.style.left = "-223px";
    }
}

function cadillacSelected() {
    logoIconPosition = 5;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupCadillac.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "473px";
    OEMSelectionRedBar.style.width = "65px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "246px";
        OEMlogosLongCont.style.left = "-228px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "128px";
        OEMlogosLongCont.style.left = "-346px";
    }
}

function ferrariSelected() {
    logoIconPosition = 6;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupFerrari.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "578px";
    OEMSelectionRedBar.style.width = "87px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "232px";
        OEMlogosLongCont.style.left = "-346px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "106px";
        OEMlogosLongCont.style.left = "-473px";
    }
}

function gmcSelected() {
    logoIconPosition = 7;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupGMC.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "695px";
    OEMSelectionRedBar.style.width = "89px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "223px";
        OEMlogosLongCont.style.left = "-473px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "118px";
        OEMlogosLongCont.style.left = "-578px";
    }
}

function hondaSelected() {   
    logoIconPosition = 8; 
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupHonda.style.display = "inline-block";
        
    OEMSelectionRedBar.style.left = "821px";
    OEMSelectionRedBar.style.width = "70px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "242px";
        OEMlogosLongCont.style.left = "-578px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "126px";
        OEMlogosLongCont.style.left = "-695px";
    }
}

function infinitiSelected() {
    logoIconPosition = 9;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupInfiniti.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "931px";
    OEMSelectionRedBar.style.width = "84px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "236px";
        OEMlogosLongCont.style.left = "-695px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "108px";
        OEMlogosLongCont.style.left = "-821px";
    }
}

function maseratiSelected() {
    logoIconPosition = 10;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupMaserati.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "1045px";
    OEMSelectionRedBar.style.width = "87px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "224px";
        OEMlogosLongCont.style.left = "-821px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "115px";
        OEMlogosLongCont.style.left = "-931px";
    }
}

function mazdaSelected() {
    logoIconPosition = 11;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupMazda.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "1177px";
    OEMSelectionRedBar.style.width = "59px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "246px";
        OEMlogosLongCont.style.left = "-931px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "132px";
        OEMlogosLongCont.style.left = "-1045px";
    }
}

function vwSelected() {
    logoIconPosition = 12;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupVW.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "1291px";
    OEMSelectionRedBar.style.width = "57px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "247px";
        OEMlogosLongCont.style.left = "-1045px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "114px";
        OEMlogosLongCont.style.left = "-1177px";
    }
}

function blmSelected() {
    logoIconPosition = 13;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupBLM.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "1393px";
    OEMSelectionRedBar.style.width = "87px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "216px";
        OEMlogosLongCont.style.left = "-1177px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "101px";
        OEMlogosLongCont.style.left = "-1291px";
    }
}

function webuySelected() {
    logoIconPosition = 14;
    D.querySelectorAll('.tabGroups').forEach(function(el) {
        el.style.display = 'none';
    });
    tabGroupWeBuy.style.display = "inline-block";
    
    OEMSelectionRedBar.style.left = "1510px";
    OEMSelectionRedBar.style.width = "88px";
    
    if (OEMMQ.matches) {
        OEMSelectionRedBar.style.left = "220px";
        OEMlogosLongCont.style.left = "-1291px";
    }
    
    if (OEMMQsmall.matches) {
        OEMSelectionRedBar.style.left = "117px";
        OEMlogosLongCont.style.left = "-1393px";
    }
}

// - - - - - Events:
logos_alfa.addEventListener('click', () => {
    alfaSelected();
});

logos_audi.addEventListener('click', () => {
    audiSelected();
});

logos_bentley.addEventListener('click', () => {
    bentleySelected();
});

logos_buick.addEventListener('click', () => {
    buickSelected();
});

logos_cadillac.addEventListener('click', () => {
    cadillacSelected();
});

logos_ferrari.addEventListener('click', () => {
    ferrariSelected();
});

logos_gmc.addEventListener('click', () => {
    gmcSelected();
});

logos_honda.addEventListener('click', () => {
    hondaSelected();
});

logos_infiniti.addEventListener('click', () => {
    infinitiSelected();
});

logos_maserati.addEventListener('click', () => {
    maseratiSelected();
});

logos_mazda.addEventListener('click', () => {
    mazdaSelected();
});

logos_vw.addEventListener('click', () => {
    vwSelected();
});

logos_blm.addEventListener('click', () => {
    blmSelected();
});

logos_webuy.addEventListener('click', () => {
    webuySelected();
});

// - - - - - SWIPE events: 

let touchstartX = 0
let touchendX = 0

function handleGesture() {

    if (touchendX < touchstartX) { 
        if (OEMMQ.matches) {            
            if (logoIconPosition === 1) {
                audiSelected();
            }
            else if (logoIconPosition === 2) {
                bentleySelected();
            }
            else if (logoIconPosition === 3) {
                buickSelected();
            }
            else if (logoIconPosition === 4) {
                cadillacSelected();
            }
            else if (logoIconPosition === 5) {
                ferrariSelected();
            }
            else if (logoIconPosition === 6) {
                gmcSelected();
            }
            else if (logoIconPosition === 7) {
                hondaSelected();
            }
            else if (logoIconPosition === 8) {
                infinitiSelected();
            }
            else if (logoIconPosition === 9) {
                maseratiSelected();
            }
            else if (logoIconPosition === 10) {
                mazdaSelected();
            }
            else if (logoIconPosition === 11) {
                vwSelected();
            }
            else if (logoIconPosition === 12) {
                blmSelected();
            }
            else if (logoIconPosition === 13) {
                webuySelected();
            }
        }

    }

    if (touchendX > touchstartX) {
        if (logoIconPosition === 14) {
            blmSelected();
        }
        else if (logoIconPosition === 13) {
            vwSelected();
        }
        else if (logoIconPosition === 12) {
            mazdaSelected();
        }
        else if (logoIconPosition === 11) {
            maseratiSelected();
        }
        else if (logoIconPosition === 10) {
            infinitiSelected();
        }
        else if (logoIconPosition === 9) {
            hondaSelected();
        }
        else if (logoIconPosition === 8) {
            gmcSelected();
        }
        else if (logoIconPosition === 7) {
            ferrariSelected();
        }
        else if (logoIconPosition === 6) {
            cadillacSelected();
        }
        else if (logoIconPosition === 5) {
            buickSelected();
        }
        else if (logoIconPosition === 4) {
            bentleySelected();
        }
        else if (logoIconPosition === 3) {
            audiSelected();
        }
        else if (logoIconPosition === 2) {
            alfaSelected();
        }
    }
}

OEMlogosLongCont.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

OEMlogosLongCont.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
})

});

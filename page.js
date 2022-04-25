window.addEventListener('DOMContentLoaded', (event) => {
  const observer = new MutationObserver((mutations, obs) => {
    const sectionId = document.getElementById('testimonialslider');
    if (sectionId) {
      parseJs();
      obs.disconnect();
      return;
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });

  function parseJs() {
    const D = document;

    const testimonial01 = D.getElementById('testimonial01');
    const testimonial02 = D.getElementById('testimonial02');
    const testimonial03 = D.getElementById('testimonial03');
    const testimonial04 = D.getElementById('testimonial04');
    const testimonial05 = D.getElementById('testimonial05');
    const testimonial06 = D.getElementById('testimonial06');
    const testimonial07 = D.getElementById('testimonial07');
    const testimonial08 = D.getElementById('testimonial08');
    const testimonial09 = D.getElementById('testimonial09');
    const testimonial10 = D.getElementById('testimonial10');

    const testinomialDot01 = D.getElementById('testinomialDot01');
    const testinomialDot02 = D.getElementById('testinomialDot02');
    const testinomialDot03 = D.getElementById('testinomialDot03');
    const testinomialDot04 = D.getElementById('testinomialDot04');
    const testinomialDot05 = D.getElementById('testinomialDot05');
    const testinomialDot06 = D.getElementById('testinomialDot06');
    const testinomialDot07 = D.getElementById('testinomialDot07');
    const testinomialDot08 = D.getElementById('testinomialDot08');
    const testinomialDot09 = D.getElementById('testinomialDot09');
    const testinomialDot10 = D.getElementById('testinomialDot10');

    const testimonialCont = D.getElementById('testimonialCont');

    const testimonialLeftArrow = D.getElementById('testimonialLeftArrow');
    const testimonialRightArrow = D.getElementById('testimonialRightArrow');

    const testimonialBottomLeftArrow = D.getElementById('testimonialBottomLeftArrow');
    const testimonialBottomRightArrow = D.getElementById('testimonialBottomRightArrow');

    let testimonialPosition = 1;

    function testimonialPos01() {
      testimonialPosition = 1;

      testimonialLeftArrow.style.backgroundColor = '#CCCCCC';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#CCCCCC';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = '#2A3886';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'inline-block';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos02() {
      testimonialPosition = 2;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = '#2A3886';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'inline-block';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos03() {
      testimonialPosition = 3;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = '#2A3886';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'inline-block';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos04() {
      testimonialPosition = 4;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = '#2A3886';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'inline-block';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos05() {
      testimonialPosition = 5;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = '#2A3886';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'inline-block';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos06() {
      testimonialPosition = 6;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = '#2A3886';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'inline-block';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos07() {
      testimonialPosition = 7;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = '#2A3886';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'inline-block';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos08() {
      testimonialPosition = 8;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = '#2A3886';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'inline-block';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'none';
    }

    function testimonialPos09() {
      testimonialPosition = 9;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#2A3886';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#2A3886';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = '#2A3886';
      testinomialDot10.style.backgroundColor = 'transparent';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'inline-block';
      testimonial10.style.display = 'none';
    }

    function testimonialPos10() {
      testimonialPosition = 10;

      testimonialLeftArrow.style.backgroundColor = '#2A3886';
      testimonialRightArrow.style.backgroundColor = '#CCCCCC';

      testimonialBottomLeftArrow.style.backgroundColor = '#2A3886';
      testimonialBottomRightArrow.style.backgroundColor = '#CCCCCC';

      testinomialDot01.style.backgroundColor = 'transparent';
      testinomialDot02.style.backgroundColor = 'transparent';
      testinomialDot03.style.backgroundColor = 'transparent';
      testinomialDot04.style.backgroundColor = 'transparent';
      testinomialDot05.style.backgroundColor = 'transparent';
      testinomialDot06.style.backgroundColor = 'transparent';
      testinomialDot07.style.backgroundColor = 'transparent';
      testinomialDot08.style.backgroundColor = 'transparent';
      testinomialDot09.style.backgroundColor = 'transparent';
      testinomialDot10.style.backgroundColor = '#2A3886';

      testimonial01.style.display = 'none';
      testimonial02.style.display = 'none';
      testimonial03.style.display = 'none';
      testimonial04.style.display = 'none';
      testimonial05.style.display = 'none';
      testimonial06.style.display = 'none';
      testimonial07.style.display = 'none';
      testimonial08.style.display = 'none';
      testimonial09.style.display = 'none';
      testimonial10.style.display = 'inline-block';
    }

    testimonialRightArrow.addEventListener('click', () => {
      if (testimonialPosition === 1) {
        testimonialPos02();
      } else if (testimonialPosition === 2) {
        testimonialPos03();
      } else if (testimonialPosition === 3) {
        testimonialPos04();
      } else if (testimonialPosition === 4) {
        testimonialPos05();
      } else if (testimonialPosition === 5) {
        testimonialPos06();
      } else if (testimonialPosition === 6) {
        testimonialPos07();
      } else if (testimonialPosition === 7) {
        testimonialPos08();
      } else if (testimonialPosition === 8) {
        testimonialPos09();
      } else if (testimonialPosition === 9) {
        testimonialPos10();
      }
    });

    testimonialLeftArrow.addEventListener('click', () => {
      if (testimonialPosition === 10) {
        testimonialPos09();
      } else if (testimonialPosition === 9) {
        testimonialPos08();
      } else if (testimonialPosition === 8) {
        testimonialPos07();
      } else if (testimonialPosition === 7) {
        testimonialPos06();
      } else if (testimonialPosition === 6) {
        testimonialPos05();
      } else if (testimonialPosition === 5) {
        testimonialPos04();
      } else if (testimonialPosition === 4) {
        testimonialPos03();
      } else if (testimonialPosition === 3) {
        testimonialPos02();
      } else if (testimonialPosition === 2) {
        testimonialPos01();
      }
    });

    testimonialBottomRightArrow.addEventListener('click', () => {
      if (testimonialPosition === 1) {
        testimonialPos02();
      } else if (testimonialPosition === 2) {
        testimonialPos03();
      } else if (testimonialPosition === 3) {
        testimonialPos04();
      } else if (testimonialPosition === 4) {
        testimonialPos05();
      } else if (testimonialPosition === 5) {
        testimonialPos06();
      } else if (testimonialPosition === 6) {
        testimonialPos07();
      } else if (testimonialPosition === 7) {
        testimonialPos08();
      } else if (testimonialPosition === 8) {
        testimonialPos09();
      } else if (testimonialPosition === 9) {
        testimonialPos10();
      }
    });

    testimonialBottomLeftArrow.addEventListener('click', () => {
      if (testimonialPosition === 10) {
        testimonialPos09();
      } else if (testimonialPosition === 9) {
        testimonialPos08();
      } else if (testimonialPosition === 8) {
        testimonialPos07();
      } else if (testimonialPosition === 7) {
        testimonialPos06();
      } else if (testimonialPosition === 6) {
        testimonialPos05();
      } else if (testimonialPosition === 5) {
        testimonialPos04();
      } else if (testimonialPosition === 4) {
        testimonialPos03();
      } else if (testimonialPosition === 3) {
        testimonialPos02();
      } else if (testimonialPosition === 2) {
        testimonialPos01();
      }
    });

    // SWIPE events:

    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
      if (touchendX < touchstartX) {
        if (testimonialPosition === 1) {
          testimonialPos02();
        } else if (testimonialPosition === 2) {
          testimonialPos03();
        } else if (testimonialPosition === 3) {
          testimonialPos04();
        } else if (testimonialPosition === 4) {
          testimonialPos05();
        } else if (testimonialPosition === 5) {
          testimonialPos06();
        } else if (testimonialPosition === 6) {
          testimonialPos07();
        } else if (testimonialPosition === 7) {
          testimonialPos08();
        } else if (testimonialPosition === 8) {
          testimonialPos09();
        } else if (testimonialPosition === 9) {
          testimonialPos10();
        }
      }

      if (touchendX > touchstartX) {
        if (testimonialPosition === 10) {
          testimonialPos09();
        } else if (testimonialPosition === 9) {
          testimonialPos08();
        } else if (testimonialPosition === 8) {
          testimonialPos07();
        } else if (testimonialPosition === 7) {
          testimonialPos06();
        } else if (testimonialPosition === 6) {
          testimonialPos05();
        } else if (testimonialPosition === 5) {
          testimonialPos04();
        } else if (testimonialPosition === 4) {
          testimonialPos03();
        } else if (testimonialPosition === 3) {
          testimonialPos02();
        } else if (testimonialPosition === 2) {
          testimonialPos01();
        }
      }
    }

    testimonialCont.addEventListener('touchstart', (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    testimonialCont.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX;
      debounce(100);
    });

    function debounce(delay) {
      let cancelScroll;
      clearTimeout(cancelScroll);
      cancelScroll = setTimeout(function () {
        handleGesture();
      }, delay);
    }

    testinomialDot01.addEventListener('click', () => {
      testimonialPos01();
    });

    testinomialDot02.addEventListener('click', () => {
      testimonialPos02();
    });

    testinomialDot03.addEventListener('click', () => {
      testimonialPos03();
    });

    testinomialDot04.addEventListener('click', () => {
      testimonialPos04();
    });

    testinomialDot05.addEventListener('click', () => {
      testimonialPos05();
    });

    testinomialDot06.addEventListener('click', () => {
      testimonialPos06();
    });

    testinomialDot07.addEventListener('click', () => {
      testimonialPos07();
    });

    testinomialDot08.addEventListener('click', () => {
      testimonialPos08();
    });

    testinomialDot09.addEventListener('click', () => {
      testimonialPos09();
    });

    testinomialDot10.addEventListener('click', () => {
      testimonialPos10();
    });
  }
});

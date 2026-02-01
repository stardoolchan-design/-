const revealElements = document.querySelectorAll('.reveal');
const bgMusic = document.getElementById('bg-music');
const snowLayer = document.querySelector('.snow-layer');
const planetField = document.querySelector('.planet-field');
const body = document.body;
const javaMission = document.getElementById('java-mission');
const javaMissionBtn = document.getElementById('java-mission-btn');
const javaTip = document.getElementById('java-tip');
const javaTipBtn = document.getElementById('java-tip-btn');
const javaQuestion = document.getElementById('java-question');
const javaOptions = document.getElementById('java-options');
const javaFeedback = document.getElementById('java-feedback');
const javaQuizBtn = document.getElementById('java-quiz-btn');
const scoreValue = document.getElementById('score-value');
const codingLang = document.getElementById('coding-lang');
const codingCounter = document.getElementById('coding-counter');
const codingQuestion = document.getElementById('coding-question');
const codingOptions = document.getElementById('coding-options');
const codingFeedback = document.getElementById('coding-feedback');
const codingReset = document.getElementById('coding-reset');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

if (bgMusic) {
  bgMusic.volume = 0.4;
  bgMusic.loop = true;
  bgMusic.addEventListener('ended', () => {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(() => {});
  });
  const enableAudio = () => {
    bgMusic.muted = false;
    bgMusic.play().catch(() => {});
    window.removeEventListener('pointerdown', enableAudio);
    window.removeEventListener('keydown', enableAudio);
  };
  bgMusic.play().catch(() => {});
  window.addEventListener('pointerdown', enableAudio);
  window.addEventListener('keydown', enableAudio);
}

const SNOWFLAKE_COUNT = 40;
const DAY_NIGHT_INTERVAL = 25 * 1000;

const createSnowflakes = () => {
  if (!snowLayer) return;
  snowLayer.innerHTML = '';
  for (let i = 0; i < SNOWFLAKE_COUNT; i += 1) {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 6;
    const delay = Math.random() * 6;
    const size = 4 + Math.random() * 4;
    flake.style.left = `${left}vw`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `${delay}s`;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    snowLayer.appendChild(flake);
  }
};

const clearSnowflakes = () => {
  if (snowLayer) {
    snowLayer.innerHTML = '';
  }
};

const planets = [];

const buildPlanets = () => {
  if (!planetField) return;
  const planetData = [
    { size: 220, top: '12vh', left: '6vw', hue: 0 },
    { size: 160, top: '28vh', left: '70vw', hue: 40 },
    { size: 120, top: '60vh', left: '12vw', hue: 200 },
    { size: 90, top: '48vh', left: '82vw', hue: 280 }
  ];

  planetField.innerHTML = '';
  planetData.forEach((data) => {
    const planet = document.createElement('div');
    planet.className = 'planet';
    planet.style.width = `${data.size}px`;
    planet.style.height = `${data.size}px`;
    planet.style.top = data.top;
    planet.style.left = data.left;
    planet.style.filter = `hue-rotate(${data.hue}deg)`;
    planetField.appendChild(planet);
    planets.push(planet);
  });
};

const setMode = (isNight) => {
  body.classList.toggle('is-night', isNight);
  body.classList.toggle('is-day', !isNight);
  planets.forEach((planet) => {
    planet.style.opacity = isNight ? '0.35' : '0.08';
    planet.style.transform = isNight ? 'scale(1.05)' : 'scale(1)';
  });
  if (isNight) {
    createSnowflakes();
  } else {
    clearSnowflakes();
  }
};

buildPlanets();

let nightMode = false;
setMode(nightMode);

setInterval(() => {
  nightMode = !nightMode;
  setMode(nightMode);
}, DAY_NIGHT_INTERVAL);

const javaMissions = [
  '배열의 길이를 구하는 JS 함수와 Python 함수를 비교해 보세요.',
  '리스트/배열에 값을 추가하는 방법을 JS와 Python으로 써 보세요.',
  '문자열에서 모음 개수를 세는 함수를 JS와 Python으로 구현해 보세요.',
  '반복문으로 1부터 50까지 홀수만 출력해 보세요.',
  '딕셔너리/객체에서 키 목록을 가져오는 코드를 작성해 보세요.'
];

const javaTips = [
  'JS에서는 ===로 값과 타입을 함께 비교합니다.',
  'Python 리스트는 append()로 요소를 추가합니다.',
  'JS 배열 길이는 length, Python은 len()입니다.',
  'JS 이벤트는 addEventListener()로 등록합니다.',
  'Python은 def 키워드로 함수를 정의합니다.',
  'JS 콘솔 출력은 console.log()입니다.'
];

const javaQuizzes = [
  {
    question: 'JavaScript 배열의 길이를 구할 때 사용하는 속성은?',
    options: ['length', 'size()', 'count'],
    answer: 0,
    explain: '배열 길이는 length로 확인합니다.'
  },
  {
    question: 'Python 리스트에 요소를 추가할 때 쓰는 메서드는?',
    options: ['add()', 'append()', 'push()'],
    answer: 1,
    explain: '리스트는 append()로 요소를 추가합니다.'
  },
  {
    question: 'JavaScript에서 문자열을 숫자로 바꾸는 함수는?',
    options: ['Number()', 'toString()', 'concat()'],
    answer: 0,
    explain: 'Number() 또는 parseInt()로 변환할 수 있습니다.'
  },
  {
    question: 'Python에서 조건이 참일 때만 실행하는 키워드는?',
    options: ['if', 'for', 'def'],
    answer: 0,
    explain: 'if 문으로 조건을 확인합니다.'
  },
  {
    question: 'JavaScript에서 함수를 선언하는 키워드는?',
    options: ['function', 'var', 'return'],
    answer: 0,
    explain: 'function 키워드로 함수를 선언합니다.'
  },
  {
    question: 'Python에서 문자열 길이를 구하는 함수는?',
    options: ['size()', 'len()', 'length()'],
    answer: 1,
    explain: 'len() 함수로 문자열 길이를 구합니다.'
  },
  {
    question: 'JavaScript에서 콘솔에 출력할 때 쓰는 함수는?',
    options: ['print()', 'log()', 'console.log()'],
    answer: 2,
    explain: 'console.log()로 출력합니다.'
  },
  {
    question: 'Python 반복문에서 범위를 만드는 함수는?',
    options: ['range()', 'loop()', 'repeat()'],
    answer: 0,
    explain: 'range()로 반복 범위를 만듭니다.'
  },
  {
    question: 'JavaScript에서 객체의 키 목록을 배열로 가져오는 메서드는?',
    options: ['Object.keys()', 'Object.values()', 'Object.entries()'],
    answer: 0,
    explain: 'Object.keys()가 키 목록을 반환합니다.'
  },
  {
    question: 'Python 딕셔너리에서 값만 가져오는 메서드는?',
    options: ['values()', 'keys()', 'items()'],
    answer: 0,
    explain: 'values()는 값 목록을 반환합니다.'
  },
  {
    question: 'JavaScript에서 이벤트를 등록할 때 사용하는 메서드는?',
    options: ['addEventListener()', 'addHandler()', 'attach()'],
    answer: 0,
    explain: 'addEventListener()로 이벤트를 등록합니다.'
  },
  {
    question: 'Python에서 함수를 정의할 때 쓰는 키워드는?',
    options: ['func', 'def', 'lambda'],
    answer: 1,
    explain: 'def 키워드로 함수를 정의합니다.'
  },
  {
    question: 'JavaScript에서 참/거짓을 나타내는 자료형은?',
    options: ['Boolean', 'Number', 'String'],
    answer: 0,
    explain: 'Boolean 타입이 참/거짓을 나타냅니다.'
  },
  {
    question: 'Python 리스트를 정렬하는 메서드는?',
    options: ['sort()', 'order()', 'arrange()'],
    answer: 0,
    explain: 'sort() 메서드로 리스트를 정렬합니다.'
  },
  {
    question: 'JavaScript strict equality 비교 연산자는?',
    options: ['==', '===', '!='],
    answer: 1,
    explain: '===는 값과 타입을 모두 비교합니다.'
  }
];

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const updateJavaMission = () => {
  if (javaMission) {
    javaMission.textContent = pickRandom(javaMissions);
  }
};

const updateJavaTip = () => {
  if (javaTip) {
    javaTip.textContent = pickRandom(javaTips);
  }
};

const renderJavaQuiz = () => {
  if (!javaQuestion || !javaOptions || !javaFeedback) return;
  const quiz = pickRandom(javaQuizzes);
  javaQuestion.textContent = quiz.question;
  javaOptions.innerHTML = '';
  javaFeedback.textContent = '';

  quiz.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => {
      const buttons = javaOptions.querySelectorAll('button');
      buttons.forEach((btn, btnIndex) => {
        btn.disabled = true;
        btn.classList.toggle('correct', btnIndex === quiz.answer);
        if (btnIndex === index && btnIndex !== quiz.answer) {
          btn.classList.add('wrong');
        }
      });
      if (index === quiz.answer) {
        addScore(10);
      }
      javaFeedback.textContent =
        index === quiz.answer ? '정답입니다! ' + quiz.explain : '아쉬워요. ' + quiz.explain;
    });
    javaOptions.appendChild(button);
  });
};

updateJavaMission();
updateJavaTip();
renderJavaQuiz();

if (javaMissionBtn) {
  javaMissionBtn.addEventListener('click', updateJavaMission);
}

if (javaTipBtn) {
  javaTipBtn.addEventListener('click', updateJavaTip);
}

if (javaQuizBtn) {
  javaQuizBtn.addEventListener('click', renderJavaQuiz);
}

const codingQuestions = [
  {
    lang: 'JavaScript',
    question: '배열의 길이를 구할 때 사용하는 속성은?',
    options: ['length', 'size()', 'count'],
    answer: 0,
    explain: '배열 길이는 length로 확인합니다.'
  },
  {
    lang: 'Python',
    question: '리스트에 요소를 추가할 때 쓰는 메서드는?',
    options: ['add()', 'append()', 'push()'],
    answer: 1,
    explain: '리스트는 append()로 요소를 추가합니다.'
  },
  {
    lang: 'JavaScript',
    question: '문자열을 숫자로 바꾸는 함수는?',
    options: ['Number()', 'toString()', 'concat()'],
    answer: 0,
    explain: 'Number() 또는 parseInt()로 변환할 수 있습니다.'
  },
  {
    lang: 'Python',
    question: '조건이 참일 때만 코드를 실행하는 키워드는?',
    options: ['if', 'for', 'def'],
    answer: 0,
    explain: 'if 문으로 조건을 확인합니다.'
  },
  {
    lang: 'JavaScript',
    question: '함수를 선언하는 키워드는?',
    options: ['function', 'var', 'return'],
    answer: 0,
    explain: 'function 키워드로 함수를 선언합니다.'
  },
  {
    lang: 'Python',
    question: '문자열 길이를 구하는 함수는?',
    options: ['size()', 'len()', 'length()'],
    answer: 1,
    explain: 'len() 함수로 문자열 길이를 구합니다.'
  },
  {
    lang: 'JavaScript',
    question: '콘솔에 출력할 때 쓰는 함수는?',
    options: ['print()', 'log()', 'console.log()'],
    answer: 2,
    explain: 'console.log()로 출력합니다.'
  },
  {
    lang: 'Python',
    question: '반복문에서 범위를 만드는 함수는?',
    options: ['range()', 'loop()', 'repeat()'],
    answer: 0,
    explain: 'range()로 반복 범위를 만듭니다.'
  },
  {
    lang: 'JavaScript',
    question: '객체의 키 목록을 배열로 가져오는 메서드는?',
    options: ['Object.keys()', 'Object.values()', 'Object.entries()'],
    answer: 0,
    explain: 'Object.keys()가 키 목록을 반환합니다.'
  },
  {
    lang: 'Python',
    question: '딕셔너리에서 값만 가져오는 메서드는?',
    options: ['values()', 'keys()', 'items()'],
    answer: 0,
    explain: 'values()는 값 목록을 반환합니다.'
  },
  {
    lang: 'JavaScript',
    question: '이벤트를 등록할 때 사용하는 메서드는?',
    options: ['addEventListener()', 'addHandler()', 'attach()'],
    answer: 0,
    explain: 'addEventListener()로 이벤트를 등록합니다.'
  },
  {
    lang: 'Python',
    question: '함수를 정의할 때 쓰는 키워드는?',
    options: ['func', 'def', 'lambda'],
    answer: 1,
    explain: 'def 키워드로 함수를 정의합니다.'
  },
  {
    lang: 'JavaScript',
    question: '참/거짓을 나타내는 자료형은?',
    options: ['Boolean', 'Number', 'String'],
    answer: 0,
    explain: 'Boolean 타입이 참/거짓을 나타냅니다.'
  },
  {
    lang: 'Python',
    question: '리스트를 정렬하는 메서드는?',
    options: ['sort()', 'order()', 'arrange()'],
    answer: 0,
    explain: 'sort() 메서드로 리스트를 정렬합니다.'
  },
  {
    lang: 'JavaScript',
    question: 'strict equality 비교 연산자는?',
    options: ['==', '===', '!='],
    answer: 1,
    explain: '===는 값과 타입을 모두 비교합니다.'
  }
];

let remainingCoding = [];
let codingScore = 0;
let codingCorrect = 0;
let codingLocked = false;
let currentCoding = null;

const addScore = (points) => {
  codingScore += points;
  updateScoreHud();
};

const updateScoreHud = () => {
  const scoreEl = scoreValue || document.getElementById('score-value');
  if (scoreEl) {
    scoreEl.textContent = `${codingScore}`;
  }
  if (codingCounter) {
    codingCounter.textContent = `${codingCorrect} / ${codingQuestions.length}`;
  }
};

const renderCodingQuestion = () => {
  if (!codingQuestion || !codingOptions || !codingFeedback || !codingLang) return;
  updateScoreHud();
  if (remainingCoding.length === 0) {
    codingQuestion.textContent = '모든 문제를 맞혔어요! 축하합니다.';
    codingOptions.innerHTML = '';
    codingFeedback.textContent = `최종 점수: ${codingScore}점`;
    codingLang.textContent = 'CLEAR';
    codingLocked = true;
    return;
  }

  const nextIndex = Math.floor(Math.random() * remainingCoding.length);
  currentCoding = remainingCoding.splice(nextIndex, 1)[0];
  codingQuestion.textContent = currentCoding.question;
  codingLang.textContent = currentCoding.lang;
  codingOptions.innerHTML = '';
  codingFeedback.textContent = '';
  codingLocked = false;

  currentCoding.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => {
      if (codingLocked) return;
      if (index === currentCoding.answer) {
        codingLocked = true;
        codingCorrect += 1;
        addScore(10);
        button.classList.add('correct');
        const buttons = codingOptions.querySelectorAll('button');
        buttons.forEach((btn) => {
          btn.disabled = true;
        });
        codingFeedback.textContent = `정답! ${currentCoding.explain} (점수: ${codingScore})`;
        setTimeout(() => {
          renderCodingQuestion();
        }, 900);
      } else {
        button.classList.add('wrong');
        button.disabled = true;
        codingFeedback.textContent = `오답이에요. ${currentCoding.explain}`;
      }
    });
    codingOptions.appendChild(button);
  });
};

const resetCodingGame = () => {
  remainingCoding = [...codingQuestions];
  codingScore = 0;
  codingCorrect = 0;
  updateScoreHud();
  renderCodingQuestion();
};

resetCodingGame();

if (codingReset) {
  codingReset.addEventListener('click', resetCodingGame);
}

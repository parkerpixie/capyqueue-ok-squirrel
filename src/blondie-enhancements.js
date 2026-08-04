const BLONDIE_ASSET_ROOT = 'https://raw.githubusercontent.com/parkerpixie/capyqueue-ok-squirrel/main/public/assets/ok-squirl';

const blondieAsset = (name) => `${BLONDIE_ASSET_ROOT}/${name}`;

function openGuide() {
  document.querySelector('.header-help')?.click();
}

function startBlondieBreathing() {
  const section = upgradeBreathingSection();
  if (!section) return;
  section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  window.setTimeout(() => section.blondieStart?.(), 350);
}

function mountBlondieIntro() {
  if (document.querySelector('.blondie-intro')) return;

  const welcome = document.querySelector('.today-page .welcome-section');
  if (!welcome) return;

  const section = document.createElement('section');
  section.className = 'blondie-intro';
  section.setAttribute('aria-labelledby', 'blondie-intro-title');
  section.innerHTML = `
    <div class="blondie-intro-copy">
      <p class="eyebrow">MEET BLONDIE</p>
      <h2 id="blondie-intro-title">Your calm guide for squirrelly moments.</h2>
      <p>Blondie is here to help you pause, notice what is happening, and find one manageable next step. No perfect calm required.</p>
      <div class="button-row stacked-mobile">
        <button class="button button-primary blondie-intro-breathe" type="button">Take a breath with Blondie</button>
        <button class="button button-secondary blondie-intro-guide" type="button">How to use the app</button>
      </div>
    </div>
    <button class="blondie-intro-art" type="button" aria-label="Start the breathing exercise with Blondie">
      <img src="${blondieAsset('01-blondie-wave.png')}" alt="Blondie, the friendly blonde squirrel guide, waving hello" referrerpolicy="no-referrer">
      <span>Tap Blondie to breathe</span>
    </button>
  `;

  section.querySelector('.blondie-intro-breathe')?.addEventListener('click', startBlondieBreathing);
  section.querySelector('.blondie-intro-art')?.addEventListener('click', startBlondieBreathing);
  section.querySelector('.blondie-intro-guide')?.addEventListener('click', openGuide);

  welcome.insertAdjacentElement('afterend', section);
}

function upgradeBreathingSection() {
  const section = document.querySelector('.breathing-home');
  if (!section) return null;
  if (section.dataset.blondieUpgraded === 'true') return section;

  section.dataset.blondieUpgraded = 'true';

  const heading = section.querySelector('#breathing-title');
  const description = section.querySelector('.breathing-copy p:not(.eyebrow)');
  if (heading) heading.textContent = 'Breathe with Blondie.';
  if (description) {
    description.textContent = 'Follow Blondie through three gentle breaths. You will count in for four, hold for two, and breathe out for six.';
  }

  const originalStart = section.querySelector('.breathing-start');
  const originalStop = section.querySelector('.breathing-stop');
  if (!originalStart || !originalStop) return section;

  const startButton = originalStart.cloneNode(true);
  const stopButton = originalStop.cloneNode(true);
  originalStart.replaceWith(startButton);
  originalStop.replaceWith(stopButton);

  startButton.textContent = 'Breathe with me';
  stopButton.textContent = 'Stop for now';

  const stage = section.querySelector('.breathing-stage');
  const orbWrap = section.querySelector('.breathing-orb-wrap');
  const phaseLabel = section.querySelector('.breathing-phase');
  const countLabel = section.querySelector('.breathing-count');

  if (!stage || !orbWrap || !phaseLabel || !countLabel) return section;

  orbWrap.innerHTML = `
    <button class="blondie-breathe-button" type="button" aria-label="Start breathing with Blondie">
      <img src="${blondieAsset('02-blondie-meditate.png')}" alt="Blondie sitting calmly with her eyes closed" referrerpolicy="no-referrer">
      <span class="breathing-number" aria-hidden="true">Tap</span>
    </button>
  `;

  const mascotButton = orbWrap.querySelector('.blondie-breathe-button');
  const numberLabel = orbWrap.querySelector('.breathing-number');

  let timers = [];
  let running = false;

  const schedule = (callback, delay) => {
    timers.push(window.setTimeout(callback, delay));
  };

  const clearTimers = () => {
    timers.forEach(window.clearTimeout);
    timers = [];
  };

  const clearPhaseClasses = () => {
    stage.classList.remove('is-breathing', 'phase-inhale', 'phase-hold', 'phase-exhale');
  };

  const updateControls = () => {
    startButton.hidden = running;
    stopButton.hidden = !running;
    mascotButton?.setAttribute(
      'aria-label',
      running ? 'Stop the breathing exercise' : 'Start breathing with Blondie'
    );
  };

  const stop = (message = 'Come back whenever you need a pause', completed = false) => {
    clearTimers();
    running = false;
    clearPhaseClasses();
    phaseLabel.textContent = message;
    numberLabel.textContent = completed ? '✓' : 'Tap';
    countLabel.textContent = completed
      ? 'Three gentle breaths complete'
      : 'Even one slower exhale counts';
    startButton.textContent = completed ? 'Breathe again' : 'Breathe with me';
    updateControls();
  };

  const setCount = (phase, label, current, total, cycle) => {
    clearPhaseClasses();
    stage.classList.add('is-breathing', `phase-${phase}`);
    phaseLabel.textContent = label;
    numberLabel.textContent = String(current);
    countLabel.textContent = `Breath ${cycle} of 3 · ${current} of ${total}`;
  };

  const runPhase = (phase, label, total, cycle, next) => {
    if (!running) return;
    setCount(phase, label, 1, total, cycle);

    for (let count = 2; count <= total; count += 1) {
      schedule(() => {
        if (running) setCount(phase, label, count, total, cycle);
      }, (count - 1) * 1000);
    }

    schedule(() => {
      if (running) next();
    }, total * 1000);
  };

  const runCycle = (cycle) => {
    runPhase('inhale', 'Breathe in', 4, cycle, () => {
      runPhase('hold', 'Hold gently', 2, cycle, () => {
        runPhase('exhale', 'Breathe out', 6, cycle, () => {
          if (cycle < 3) runCycle(cycle + 1);
          else stop('You made a little more room', true);
        });
      });
    });
  };

  const start = () => {
    if (running) return;
    clearTimers();
    running = true;
    updateControls();
    runCycle(1);
  };

  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', () => stop());
  mascotButton?.addEventListener('click', () => {
    if (running) stop();
    else start();
  });

  section.blondieStart = start;
  section.blondieStop = stop;
  updateControls();
  return section;
}

function placeBlondieElsewhere() {
  const reminder = document.querySelector('.reminder-squirrel');
  const reminderImage = reminder?.querySelector('img');
  if (reminderImage && reminderImage.dataset.blondiePortrait !== 'true') {
    reminderImage.src = blondieAsset('04-blondie-avatar.png');
    reminderImage.alt = 'Blondie the squirrel';
    reminderImage.referrerPolicy = 'no-referrer';
    reminderImage.dataset.blondiePortrait = 'true';
  }

  const guideIntro = document.querySelector('.guide-intro');
  if (guideIntro && !guideIntro.querySelector('.blondie-guide-art')) {
    const image = document.createElement('img');
    image.className = 'blondie-guide-art';
    image.src = blondieAsset('03-blondie-thoughtful.png');
    image.alt = 'Blondie listening thoughtfully';
    image.referrerPolicy = 'no-referrer';
    guideIntro.appendChild(image);
  }
}

function applyBlondie() {
  mountBlondieIntro();
  upgradeBreathingSection();
  placeBlondieElsewhere();
}

let blondieQueued = false;
const queueBlondie = () => {
  if (blondieQueued) return;
  blondieQueued = true;
  window.requestAnimationFrame(() => {
    blondieQueued = false;
    applyBlondie();
  });
};

window.addEventListener('DOMContentLoaded', queueBlondie);
window.addEventListener('load', queueBlondie);
new MutationObserver(queueBlondie).observe(document.documentElement, { childList: true, subtree: true });

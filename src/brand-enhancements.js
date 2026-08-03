const ASSET_ROOT = '/public/assets/ok-squirl';

const asset = (name) => `${ASSET_ROOT}/${name}`;

function replaceText(root = document.body) {
  const replacements = new Map([
    ['OK, Squirrel!', 'OK Squirl'],
    ['How to use OK, Squirrel!', 'How to use OK Squirl'],
    ['Install OK, Squirrel!', 'Install OK Squirl'],
    ['OK, squirrel. What kind of moment are we having?', 'Okay, squirrel. What kind of moment are we having?'],
    ['OK, squirrel. Does this need to leave the nest right now?', 'Okay, squirrel. Does this need to leave the nest right now?'],
    ['Skip straight to Emergency Reset', 'Take me to Steady Now'],
    ['Emergency Reset', 'Steady Now'],
    ['Open Emergency Reset', 'Open Steady Now'],
    ['Close Emergency Reset', 'Close Steady Now'],
    ['EMERGENCY RESET', '60-SECOND RESET']
  ]);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return;
    let value = node.nodeValue;
    replacements.forEach((next, current) => {
      value = value.replaceAll(current, next);
    });
    if (value !== node.nodeValue) node.nodeValue = value;
  });

  document.querySelectorAll('[aria-label]').forEach((element) => {
    const currentLabel = element.getAttribute('aria-label') || '';
    let nextLabel = currentLabel;
    replacements.forEach((next, current) => {
      nextLabel = nextLabel.replaceAll(current, next);
    });
    if (nextLabel !== currentLabel) element.setAttribute('aria-label', nextLabel);
  });
}

function decorateHeader() {
  const icon = document.querySelector('.brand-icon');
  const iconSource = asset('ok-squirl-mark-icon-only.png');
  if (icon) {
    if (!icon.src.endsWith(iconSource)) icon.src = iconSource;
    if (icon.alt) icon.alt = '';
  }

  const brand = document.querySelector('.brand-button');
  if (brand) {
    const strong = brand.querySelector('strong');
    const small = brand.querySelector('small');
    if (strong && strong.textContent !== 'OK Squirl') strong.textContent = 'OK Squirl';
    if (small && small.textContent !== 'A CapyQueue Company') small.textContent = 'A CapyQueue Company';
  }
}

function decorateExistingIcons() {
  const reminder = document.querySelector('.reminder-squirrel');
  if (reminder && !reminder.querySelector('img')) {
    reminder.innerHTML = `<img src="${asset('ok-squirl-mark-icon-only.png')}" alt="Blondie the squirrel">`;
  }

  const finish = document.querySelector('.finish-icon');
  if (finish && !finish.querySelector('img')) {
    finish.innerHTML = `<img src="${asset('ok-squirl-icon-check-in.svg')}" alt="">`;
  }

  const toolIcons = document.querySelectorAll('.tool-icon');
  toolIcons.forEach((toolIcon) => {
    if (!toolIcon.querySelector('img')) {
      toolIcon.innerHTML = `<img src="${asset('ok-squirl-icon-breathe.svg')}" alt="">`;
    }
  });

  const navButtons = [...document.querySelectorAll('.bottom-nav button')];
  const navIcons = [
    'ok-squirl-icon-home.svg',
    'ok-squirl-icon-breathe.svg',
    'ok-squirl-icon-journal.svg'
  ];
  navButtons.forEach((button, index) => {
    const span = button.querySelector('span');
    if (span && navIcons[index] && !span.querySelector('img')) {
      span.innerHTML = `<img src="${asset(navIcons[index])}" alt="">`;
    }
  });
}

function createBreathingSection() {
  const section = document.createElement('section');
  section.className = 'breathing-home';
  section.setAttribute('aria-labelledby', 'breathing-title');
  section.innerHTML = `
    <div class="breathing-copy">
      <p class="eyebrow">A SMALL PAUSE WITH BLONDIE</p>
      <h2 id="breathing-title">Let your nervous system catch up.</h2>
      <p>Nothing needs to be solved while you do this. Follow the circle for three slow breaths, or stay for only one.</p>
      <button class="button breathing-start" type="button">Breathe with me</button>
      <button class="breathing-stop" type="button" hidden>Stop for now</button>
    </div>
    <div class="breathing-stage" aria-live="polite">
      <div class="breathing-orb-wrap">
        <div class="breathing-orb">
          <img src="${asset('ok-squirl-mark-icon-only.png')}" alt="">
        </div>
      </div>
      <strong class="breathing-phase">Ready when you are</strong>
      <span class="breathing-count">Three gentle breaths</span>
    </div>
  `;

  const startButton = section.querySelector('.breathing-start');
  const stopButton = section.querySelector('.breathing-stop');
  const phaseLabel = section.querySelector('.breathing-phase');
  const countLabel = section.querySelector('.breathing-count');
  const stage = section.querySelector('.breathing-stage');

  let timers = [];
  let running = false;

  const clearTimers = () => {
    timers.forEach(window.clearTimeout);
    timers = [];
  };

  const stop = (message = 'Come back whenever you need a pause') => {
    clearTimers();
    running = false;
    stage.classList.remove('is-breathing', 'phase-inhale', 'phase-hold', 'phase-exhale');
    phaseLabel.textContent = message;
    countLabel.textContent = 'Even one slower exhale counts';
    startButton.hidden = false;
    startButton.textContent = 'Breathe again';
    stopButton.hidden = true;
  };

  const schedule = (callback, delay) => {
    timers.push(window.setTimeout(callback, delay));
  };

  const setPhase = (phase, label, detail) => {
    stage.classList.remove('phase-inhale', 'phase-hold', 'phase-exhale');
    stage.classList.add(`phase-${phase}`);
    phaseLabel.textContent = label;
    countLabel.textContent = detail;
  };

  const runCycle = (cycle) => {
    if (!running) return;
    setPhase('inhale', 'Breathe in', `Breath ${cycle} of 3 · four slow counts`);
    schedule(() => setPhase('hold', 'Hold gently', 'No straining · just a small pause'), 4000);
    schedule(() => setPhase('exhale', 'Breathe out', 'Long and easy · six slow counts'), 6000);
    schedule(() => {
      if (cycle < 3) runCycle(cycle + 1);
      else stop('You made a little more room');
    }, 12000);
  };

  startButton.addEventListener('click', () => {
    if (running) return;
    running = true;
    startButton.hidden = true;
    stopButton.hidden = false;
    stage.classList.add('is-breathing');
    runCycle(1);
  });

  stopButton.addEventListener('click', () => stop());
  return section;
}

function mountBreathingSection() {
  if (document.querySelector('.breathing-home')) return;
  const welcome = document.querySelector('.today-page .welcome-section');
  if (!welcome) return;
  welcome.insertAdjacentElement('afterend', createBreathingSection());
}

function mountFooter() {
  if (document.querySelector('.brand-footer')) return;
  const shell = document.querySelector('.app-shell');
  const nav = document.querySelector('.bottom-nav');
  if (!shell || !nav) return;

  const footer = document.createElement('footer');
  footer.className = 'brand-footer';
  footer.innerHTML = `
    <img src="${asset('ok-squirl-logo-horizontal.png')}" alt="OK Squirl. A calm corner for squirrelly moments.">
    <p>A calm corner for squirrelly moments.</p>
    <small>A CapyQueue Company</small>
  `;
  shell.insertBefore(footer, nav);
}

function applyBrand() {
  replaceText();
  decorateHeader();
  decorateExistingIcons();
  mountBreathingSection();
  mountFooter();
}

let queued = false;
const queueApply = () => {
  if (queued) return;
  queued = true;
  window.requestAnimationFrame(() => {
    queued = false;
    applyBrand();
  });
};

window.addEventListener('DOMContentLoaded', queueApply);
window.addEventListener('load', queueApply);
new MutationObserver(queueApply).observe(document.documentElement, { childList: true, subtree: true });

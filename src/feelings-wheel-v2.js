const WHEEL_DATA = {
  Angry: {
    icon: '🔥',
    signal: 'Something may feel blocked, unfair, disrespectful, threatening, or important enough that your system wants action.',
    urge: 'push, confront, defend, prove, withdraw, or set a boundary',
    branches: {
      Irritated: { cue: 'Low-to-medium heat. Something is getting under your skin.', words: ['annoyed', 'agitated', 'impatient', 'frustrated', 'bothered', 'exasperated'] },
      Resentful: { cue: 'The feeling has history. Something may seem unfair, unbalanced, or unresolved.', words: ['bitter', 'unappreciated', 'used', 'dismissed', 'fed up', 'taken for granted'] },
      Hurt: { cue: 'Anger may be protecting a more vulnerable injury underneath it.', words: ['betrayed', 'disrespected', 'rejected', 'unseen', 'invalidated', 'wounded'] },
      Hostile: { cue: 'The system is mobilized hard. The urge to attack or punish may be loud.', words: ['furious', 'enraged', 'vengeful', 'contemptuous', 'seething', 'combative'] },
      Jealous: { cue: 'Something valued may feel threatened, scarce, or at risk of being lost.', words: ['envious', 'possessive', 'competitive', 'threatened', 'insecure', 'left behind'] }
    }
  },
  Afraid: {
    icon: '⚡',
    signal: 'Your nervous system may be scanning for danger, uncertainty, loss of control, rejection, or what could go wrong next.',
    urge: 'avoid, escape, freeze, prepare, seek reassurance, or regain control',
    branches: {
      Anxious: { cue: 'The threat is not fully here, but your brain is already trying to solve it.', words: ['uneasy', 'worried', 'nervous', 'restless', 'apprehensive', 'spiraling'] },
      Overwhelmed: { cue: 'There may be too much input, too many demands, or not enough capacity right now.', words: ['flooded', 'overloaded', 'frazzled', 'stressed', 'scattered', 'unable to cope'] },
      Threatened: { cue: 'Something feels unsafe, exposing, intimidating, or too close.', words: ['unsafe', 'vulnerable', 'exposed', 'on edge', 'intimidated', 'guarded'] },
      Panicked: { cue: 'Your alarm system is at full volume and may be outrunning your ability to think clearly.', words: ['terrified', 'frantic', 'trapped', 'dread', 'desperate', 'out of control'] },
      Uncertain: { cue: 'The unknown itself may be the hardest part.', words: ['confused', 'hesitant', 'suspicious', 'insecure', 'unsure', 'unprepared'] }
    }
  },
  Sad: {
    icon: '🌧️',
    signal: 'Something may be missing, lost, disappointing, disconnected, or different from what you hoped for.',
    urge: 'withdraw, slow down, cry, isolate, give up, or seek comfort and connection',
    branches: {
      Lonely: { cue: 'You may be missing closeness, belonging, understanding, or being seen.', words: ['isolated', 'abandoned', 'disconnected', 'unseen', 'excluded', 'forgotten'] },
      Hurt: { cue: 'Something landed painfully, especially in a relationship or expectation that mattered.', words: ['rejected', 'heartbroken', 'wounded', 'let down', 'unwanted', 'disappointed'] },
      Grief: { cue: 'There is a real loss, ending, or change your system is trying to absorb.', words: ['bereft', 'mourning', 'aching', 'heavy', 'longing', 'devastated'] },
      Low: { cue: 'Energy and hope may be running thin.', words: ['empty', 'hopeless', 'discouraged', 'defeated', 'numb', 'drained'] },
      Tender: { cue: 'You may be emotionally open, raw, or easily affected right now.', words: ['fragile', 'sensitive', 'wistful', 'melancholy', 'vulnerable', 'tearful'] }
    }
  },
  'Shame / Guilt': {
    icon: '🫥',
    signal: 'Your attention may be turning toward yourself, your behavior, your values, or fear of how you are being seen by other people.',
    urge: 'hide, apologize, confess, repair, shrink, self-attack, or disappear',
    branches: {
      Ashamed: { cue: 'The story may sound like “something is wrong with me,” not simply “I did something I regret.”', words: ['unworthy', 'defective', 'exposed', 'small', 'worthless', 'disgraced'] },
      Guilty: { cue: 'Your behavior may feel out of alignment with your values or responsibilities.', words: ['remorseful', 'regretful', 'responsible', 'sorry', 'contrite', 'accountable'] },
      Embarrassed: { cue: 'You may feel painfully visible or worried about social judgment.', words: ['awkward', 'self-conscious', 'humiliated', 'mortified', 'flustered', 'foolish'] },
      'Self-critical': { cue: 'Your internal evaluator has grabbed the microphone.', words: ['inadequate', 'failure', 'not enough', 'disappointed in myself', 'self-blaming', 'harsh with myself'] },
      Exposed: { cue: 'Something private, imperfect, or vulnerable may feel too visible.', words: ['judged', 'scrutinized', 'found out', 'misunderstood', 'revealed', 'unprotected'] }
    }
  },
  Joy: {
    icon: '✨',
    signal: 'Something is nourishing, connecting, working, relieving, meaningful, or worth savoring. Positive states are data too.',
    urge: 'approach, share, celebrate, play, create, connect, or keep going',
    branches: {
      Content: { cue: 'Nothing needs to be chased right this second.', words: ['peaceful', 'satisfied', 'comfortable', 'settled', 'at ease', 'grounded'] },
      Connected: { cue: 'You feel some degree of belonging, closeness, trust, or being understood.', words: ['loved', 'seen', 'accepted', 'close', 'supported', 'understood'] },
      Energized: { cue: 'There is usable positive energy in the system.', words: ['excited', 'playful', 'inspired', 'alive', 'motivated', 'curious'] },
      Proud: { cue: 'You are noticing effort, growth, competence, or something you value in yourself.', words: ['capable', 'accomplished', 'confident', 'grateful', 'strong', 'validated'] },
      Relieved: { cue: 'Pressure dropped, uncertainty resolved, or something difficult passed.', words: ['lighter', 'reassured', 'safe', 'unburdened', 'hopeful', 'free'] }
    }
  },
  Disgust: {
    icon: '🌿',
    signal: 'Something may feel contaminating, violating, morally wrong, deeply incompatible, or simply like you need distance.',
    urge: 'move away, reject, clean up, criticize, shut down, or protect a boundary',
    branches: {
      Repelled: { cue: 'Your body is giving a strong “away from that” signal.', words: ['grossed out', 'sickened', 'revolted', 'repulsed', 'nauseated', 'appalled'] },
      Violated: { cue: 'A physical, emotional, relational, or values boundary may feel crossed.', words: ['invaded', 'contaminated', 'crossed', 'unsafe', 'disrespected', 'used'] },
      Averse: { cue: 'You want distance even if the feeling is less intense than revulsion.', words: ['put off', 'uncomfortable', 'resistant', 'avoidant', 'reluctant', 'turned off'] },
      Contempt: { cue: 'Disgust is aimed at a person, behavior, or idea and may be blending with anger.', words: ['scornful', 'disdainful', 'judgmental', 'dismissive', 'superior', 'derisive'] },
      Disillusioned: { cue: 'Something you respected or believed in may no longer fit what you see.', words: ['disenchanted', 'disappointed', 'cynical', 'let down', 'disbelieving', 'alienated'] }
    }
  }
};

const FAMILY_ORDER = Object.keys(WHEEL_DATA);
const HISTORY_KEY = 'ok-squirl-feelings-history-v1';
const NAV_ICON = '/assets/ok-squirl/ok-squirl-icon-check-in.svg';
const DBT_ICON = '/assets/ok-squirl/ok-squirl-icon-insights.svg';

let wheelState = { family: '', branch: '', precise: '', intensity: 5, note: '', context: '' };
let rotation = 0;
let dragging = false;
let dragAngle = 0;
let lastMoveTime = 0;
let angularVelocity = 0;
let movedDuringPointer = false;
let suppressNextClick = false;
let motionFrame = 0;
let calendarDate = new Date();
calendarDate.setDate(1);

function mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function escapeHtml(value = '') {
  const element = document.createElement('div');
  element.textContent = value;
  return element.innerHTML;
}

function familyClass(family = '') {
  return `family-${family.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function history() {
  try {
    const value = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

function currentPreviewIndex() {
  const step = 360 / FAMILY_ORDER.length;
  return mod(Math.round(-rotation / step), FAMILY_ORDER.length);
}

function currentPreviewFamily() {
  return FAMILY_ORDER[currentPreviewIndex()];
}

function feelingsPageMarkup() {
  return `<div id="feelings-page" class="feelings-page" hidden>
    <section class="feelings-hero">
      <div>
        <p class="eyebrow">FEELINGS</p>
        <h1>Notice the signal. Name it more precisely.</h1>
        <p>Spin with your finger or tap a feeling. The center changes as the wheel moves, then the wheel settles on the closest match when you let go.</p>
      </div>
      <div class="feelings-view-switch" aria-label="Feelings views">
        <button type="button" class="active" data-feelings-view="checkin">Check-in</button>
        <button type="button" data-feelings-view="calendar">Mood Calendar</button>
      </div>
    </section>

    <div data-feelings-panel="checkin">
      ${wheelMarkup()}
      <section class="feelings-last-card" aria-live="polite">
        <div>
          <p class="eyebrow">LAST CHECK-IN</p>
          <strong data-feelings-last>No check-ins saved yet.</strong>
        </div>
        <button type="button" class="feelings-calendar-shortcut" data-open-mood-calendar>See patterns over time</button>
      </section>
    </div>

    <div data-feelings-panel="calendar" hidden>
      <section class="feelings-calendar-shell">
        <div class="feelings-calendar-heading">
          <div>
            <p class="eyebrow">MOOD CALENDAR</p>
            <h2>Patterns, not grades.</h2>
            <p>Your saved check-ins stay in this browser. The point is to notice what repeats, what shifts, and what seems to help.</p>
          </div>
        </div>
        <div class="feelings-month-summary" data-month-summary></div>
        <div class="feelings-calendar-nav">
          <button type="button" data-calendar-prev aria-label="Previous month">‹</button>
          <strong data-calendar-label></strong>
          <button type="button" data-calendar-next aria-label="Next month">›</button>
        </div>
        <div class="feelings-calendar-weekdays" aria-hidden="true"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
        <div class="feelings-calendar" data-feelings-calendar></div>
        <div class="feelings-day-detail" data-feelings-day-detail><p>Tap a day to see its check-ins.</p></div>
      </section>
    </div>
  </div>`;
}

function wheelMarkup() {
  return `<section class="feelings-wheel-shell" id="feelings-wheel-shell" aria-labelledby="feelings-wheel-title">
    <div class="feelings-wheel-copy">
      <p class="eyebrow">CHECK IN WITH YOURSELF</p>
      <h2 id="feelings-wheel-title">Start with the big feeling.</h2>
      <p>You do not need the perfect word. Spin or tap, let the wheel lock in, then narrow it down until something feels close enough to be useful.</p>
    </div>

    <div class="feelings-wheel" id="feelingsWheel" tabindex="0" role="group" aria-label="Spin the feelings wheel or tap a feeling">
      <div class="wheel-disc" id="feelingsWheelDisc" aria-hidden="true"></div>
      <div class="wheel-pointer" aria-hidden="true"><span></span></div>
      <div class="wheel-family-ring" id="feelingsFamilyRing">
        ${FAMILY_ORDER.map((family) => `<button class="wheel-family ${familyClass(family)}" data-wheel-family="${family}" type="button"><span>${WHEEL_DATA[family].icon}</span><strong>${family}</strong></button>`).join('')}
      </div>
      <div class="wheel-center" aria-live="polite">
        <span class="wheel-center-icon" data-wheel-center-icon>↻</span>
        <strong data-wheel-center-label>Spin or tap</strong>
        <small data-wheel-center-note>then let go</small>
      </div>
    </div>

    <p class="feelings-wheel-hint">Drag anywhere on the wheel. On a phone, use one finger. You can also tap any big feeling.</p>
    <div class="wheel-drilldown" aria-live="polite">${renderDrilldown()}</div>
  </section>`;
}

function renderDrilldown() {
  if (!wheelState.family) {
    return `<div class="wheel-prompt">
      <strong>Start broad.</strong>
      <p>The wheel will settle on one emotional family. From there we can get much more specific.</p>
    </div>`;
  }

  const family = WHEEL_DATA[wheelState.family];
  const branchButtons = Object.entries(family.branches).map(([branch, info]) => `
    <button type="button" class="wheel-branch ${wheelState.branch === branch ? 'selected' : ''}" data-wheel-branch="${branch}">
      <strong>${branch}</strong><small>${info.cue}</small>
    </button>`).join('');

  const branch = wheelState.branch ? family.branches[wheelState.branch] : null;
  const preciseButtons = branch ? branch.words.map((word) => `
    <button class="wheel-precise-chip ${wheelState.precise === word ? 'selected' : ''}" data-wheel-precise="${word}" type="button">${word}</button>`).join('') : '';

  return `<div class="wheel-selection-head">
      <button type="button" class="wheel-back" data-wheel-reset>↻ Spin again</button>
      <div class="wheel-family-lock ${familyClass(wheelState.family)}"><span>${family.icon}</span><strong>${wheelState.family}</strong><small>locked in</small></div>
    </div>
    <div class="wheel-stage">
      <p class="eyebrow">NARROW IT DOWN</p>
      <h3>What kind of ${wheelState.family.toLowerCase()} is this?</h3>
      <div class="wheel-branches">${branchButtons}</div>
    </div>
    ${branch ? `<div class="wheel-stage wheel-stage-precise">
      <p class="eyebrow">GET PRECISE</p>
      <h3>${wheelState.branch}: which word lands closest?</h3>
      <p class="wheel-stage-cue">${branch.cue}</p>
      <div class="wheel-precise">${preciseButtons}</div>
    </div>` : ''}
    ${wheelState.precise ? renderCheckinCard(family) : ''}`;
}

function renderCheckinCard(family) {
  return `<div class="feeling-checkin-card">
    <div class="feeling-selection-summary ${familyClass(wheelState.family)}">
      <span>${family.icon}</span>
      <div><small>${wheelState.family} → ${wheelState.branch}</small><strong>${wheelState.precise}</strong></div>
    </div>
    <div class="feeling-insight">
      <strong>What this feeling can signal</strong>
      <p>${family.signal}</p>
      <span><b>Common action urge:</b> ${family.urge}.</span>
    </div>
    <div class="feeling-intensity-row">
      <label for="feelingsIntensity"><strong>How intense is it right now?</strong><span>1 = barely there · 10 = running the whole nervous system</span></label>
      <output data-intensity-output>${wheelState.intensity}</output>
    </div>
    <input id="feelingsIntensity" class="feelings-intensity" type="range" min="1" max="10" value="${wheelState.intensity}" />
    <div class="feeling-context-grid">
      <label><span>Context <small>optional</small></span>
        <select data-checkin-context>
          <option value="">Choose one</option>
          ${['Home','Work','In the car','Out / errands','Social / with people','Alone','Therapy / appointment','Other'].map((item) => `<option ${wheelState.context === item ? 'selected' : ''}>${item}</option>`).join('')}
        </select>
      </label>
      <label><span>What is happening? <small>optional</small></span>
        <textarea data-checkin-note maxlength="280" placeholder="A sentence is enough. This stays in this browser.">${escapeHtml(wheelState.note)}</textarea>
      </label>
    </div>
    <div class="feeling-checkin-actions">
      <button type="button" class="button button-primary" data-save-feeling>Save this check-in</button>
      <button type="button" class="button button-secondary" data-open-mood-calendar>Open Mood Calendar</button>
    </div>
    <p class="feeling-save-status" data-feeling-save-status aria-live="polite"></p>
  </div>`;
}

function mountPage() {
  const main = document.querySelector('.main-content');
  if (!main || document.getElementById('feelings-page')) return;
  main.insertAdjacentHTML('beforeend', feelingsPageMarkup());
  updateWheelVisual(false);
  updateLastCheckin();
}

function mountNav() {
  const nav = document.querySelector('.bottom-nav');
  if (!nav) return;

  const dbtTab = nav.querySelector('[data-dbt-tab]');
  if (dbtTab) {
    const label = dbtTab.querySelector('small');
    if (label && label.textContent !== 'DBT Tools') label.textContent = 'DBT Tools';
    const span = dbtTab.querySelector('span');
    if (span && !span.querySelector('img')) span.innerHTML = `<img src="${DBT_ICON}" alt="">`;
  }

  if (!nav.querySelector('[data-feelings-tab]')) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.feelingsTab = 'true';
    button.innerHTML = `<span aria-hidden="true"><img src="${NAV_ICON}" alt=""></span><small>Feelings</small>`;
    if (dbtTab) dbtTab.before(button);
    else nav.append(button);
  }

  bindNav();
}

function bindNav() {
  const nav = document.querySelector('.bottom-nav');
  if (!nav) return;
  const feelingsTab = nav.querySelector('[data-feelings-tab]');
  if (feelingsTab && !feelingsTab.dataset.feelingsBound) {
    feelingsTab.dataset.feelingsBound = '1';
    feelingsTab.addEventListener('click', showFeelings);
  }

  nav.querySelectorAll('button:not([data-feelings-tab])').forEach((button) => {
    if (button.dataset.feelingsExitBound) return;
    button.dataset.feelingsExitBound = '1';
    button.addEventListener('click', () => hideFeelings(!button.hasAttribute('data-dbt-tab')));
  });
}

function showFeelings() {
  const page = document.getElementById('feelings-page');
  const main = document.querySelector('.main-content');
  if (!page || !main) return;

  [...main.children].forEach((child) => {
    if (child === page) {
      child.hidden = false;
      child.style.display = '';
    } else {
      child.style.display = 'none';
      if (child.id === 'dbt-lab' || child.id === 'dbt-detail') child.hidden = true;
    }
  });

  document.querySelectorAll('.bottom-nav button').forEach((button) => button.classList.remove('active'));
  document.querySelector('[data-feelings-tab]')?.classList.add('active');
  updateWheelVisual(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideFeelings(restoreReact = true) {
  const page = document.getElementById('feelings-page');
  if (page) {
    page.hidden = true;
    page.style.display = 'none';
  }
  document.querySelector('[data-feelings-tab]')?.classList.remove('active');

  if (restoreReact) {
    [...(document.querySelector('.main-content')?.children || [])].forEach((child) => {
      if (!['feelings-page', 'dbt-lab', 'dbt-detail'].includes(child.id)) child.style.display = '';
    });
  }
}

function pointerAngle(event, element) {
  const rect = element.getBoundingClientRect();
  return Math.atan2(event.clientY - rect.top - rect.height / 2, event.clientX - rect.left - rect.width / 2) * 180 / Math.PI;
}

function normalizeDelta(delta) {
  if (delta > 180) return delta - 360;
  if (delta < -180) return delta + 360;
  return delta;
}

function updateWheelVisual(preview = true) {
  const wheel = document.getElementById('feelingsWheel');
  const disc = document.getElementById('feelingsWheelDisc');
  if (!wheel || !disc) return;

  const step = 360 / FAMILY_ORDER.length;
  const radius = wheel.clientWidth * 0.365;
  const buttons = wheel.querySelectorAll('[data-wheel-family]');
  buttons.forEach((button, index) => {
    const angle = (-90 + index * step + rotation) * Math.PI / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    button.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
  disc.style.transform = `rotate(${rotation}deg)`;

  const family = currentPreviewFamily();
  buttons.forEach((button) => button.classList.toggle('is-preview', button.dataset.wheelFamily === family));
  if (preview || wheelState.family) {
    const data = WHEEL_DATA[family];
    const centerIcon = wheel.querySelector('[data-wheel-center-icon]');
    const centerLabel = wheel.querySelector('[data-wheel-center-label]');
    const centerNote = wheel.querySelector('[data-wheel-center-note]');
    if (centerIcon) centerIcon.textContent = data.icon;
    if (centerLabel) centerLabel.textContent = family;
    if (centerNote) centerNote.textContent = dragging ? 'keep moving' : 'closest match';
  }
}

function stopMotion() {
  if (motionFrame) cancelAnimationFrame(motionFrame);
  motionFrame = 0;
}

function animateRotation(target, duration = 320, onDone) {
  stopMotion();
  const start = rotation;
  const distance = target - start;
  const started = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    rotation = start + distance * eased;
    updateWheelVisual(true);
    if (progress < 1) motionFrame = requestAnimationFrame(tick);
    else {
      motionFrame = 0;
      onDone?.();
    }
  };
  motionFrame = requestAnimationFrame(tick);
}

function commitCurrentFamily() {
  const family = currentPreviewFamily();
  wheelState = { ...wheelState, family, branch: '', precise: '', note: '', context: '' };
  document.querySelectorAll('[data-wheel-family]').forEach((button) => button.classList.toggle('selected', button.dataset.wheelFamily === family));
  renderDrilldownIntoPage();
}

function snapCurrent() {
  const step = 360 / FAMILY_ORDER.length;
  const target = Math.round(rotation / step) * step;
  animateRotation(target, 280, commitCurrentFamily);
}

function snapToFamily(family) {
  const index = FAMILY_ORDER.indexOf(family);
  if (index < 0) return;
  const step = 360 / FAMILY_ORDER.length;
  const base = -index * step;
  const turns = Math.round((rotation - base) / 360);
  const target = base + turns * 360;
  animateRotation(target, 340, commitCurrentFamily);
}

function startInertia() {
  stopMotion();
  let velocity = Math.max(-0.9, Math.min(0.9, angularVelocity));
  let previous = performance.now();
  const tick = (now) => {
    const deltaTime = Math.min(32, now - previous || 16);
    previous = now;
    rotation += velocity * deltaTime;
    velocity *= Math.pow(0.93, deltaTime / 16);
    updateWheelVisual(true);
    if (Math.abs(velocity) > 0.015) motionFrame = requestAnimationFrame(tick);
    else {
      motionFrame = 0;
      snapCurrent();
    }
  };
  motionFrame = requestAnimationFrame(tick);
}

function bindWheelMotion() {
  const wheel = document.getElementById('feelingsWheel');
  if (!wheel || wheel.dataset.motionBound) return;
  wheel.dataset.motionBound = '1';

  wheel.addEventListener('pointerdown', (event) => {
    stopMotion();
    dragging = true;
    movedDuringPointer = false;
    angularVelocity = 0;
    dragAngle = pointerAngle(event, wheel);
    lastMoveTime = performance.now();
    wheel.classList.add('is-dragging');
    wheel.setPointerCapture?.(event.pointerId);
  });

  wheel.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const now = performance.now();
    const angle = pointerAngle(event, wheel);
    const delta = normalizeDelta(angle - dragAngle);
    const elapsed = Math.max(8, now - lastMoveTime);
    if (Math.abs(delta) > 0.15) movedDuringPointer = true;
    rotation += delta;
    angularVelocity = delta / elapsed;
    dragAngle = angle;
    lastMoveTime = now;
    updateWheelVisual(true);
  });

  const finishPointer = () => {
    if (!dragging) return;
    dragging = false;
    wheel.classList.remove('is-dragging');
    if (movedDuringPointer) {
      suppressNextClick = true;
      startInertia();
    } else if (!document.activeElement?.matches?.('[data-wheel-family]')) {
      snapCurrent();
    }
  };
  wheel.addEventListener('pointerup', finishPointer);
  wheel.addEventListener('pointercancel', finishPointer);

  wheel.addEventListener('click', (event) => {
    const button = event.target.closest('[data-wheel-family]');
    if (!button) return;
    if (suppressNextClick) {
      suppressNextClick = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    snapToFamily(button.dataset.wheelFamily);
  });

  wheel.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const step = 360 / FAMILY_ORDER.length;
    rotation += event.key === 'ArrowRight' ? -step : step;
    snapCurrent();
  });
}

function renderDrilldownIntoPage() {
  const root = document.querySelector('#feelings-wheel-shell .wheel-drilldown');
  if (!root) return;
  root.innerHTML = renderDrilldown();
}

function saveCheckin() {
  if (!wheelState.family || !wheelState.branch || !wheelState.precise) return;
  const intensity = Number(document.querySelector('.feelings-intensity')?.value || wheelState.intensity || 5);
  const note = document.querySelector('[data-checkin-note]')?.value.trim() || '';
  const context = document.querySelector('[data-checkin-context]')?.value || '';
  wheelState.intensity = intensity;
  wheelState.note = note;
  wheelState.context = context;

  const items = history();
  items.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    timestamp: new Date().toISOString(),
    family: wheelState.family,
    branch: wheelState.branch,
    emotion: wheelState.precise,
    intensity,
    context,
    note
  });
  saveHistory(items);
  updateLastCheckin();
  renderCalendar();
  const status = document.querySelector('[data-feeling-save-status]');
  if (status) status.textContent = `Saved: ${wheelState.precise}, intensity ${intensity}/10.`;
}

function updateLastCheckin() {
  const items = history();
  const item = items[items.length - 1];
  document.querySelectorAll('[data-feelings-last]').forEach((element) => {
    if (!item) {
      element.textContent = 'No check-ins saved yet.';
      return;
    }
    const date = new Date(item.timestamp);
    element.textContent = `${item.emotion} · ${item.intensity}/10 · ${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  });
}

function setFeelingsView(view) {
  document.querySelectorAll('[data-feelings-view]').forEach((button) => button.classList.toggle('active', button.dataset.feelingsView === view));
  document.querySelectorAll('[data-feelings-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.feelingsPanel !== view;
  });
  if (view === 'calendar') renderCalendar();
}

function renderMonthSummary(monthItems) {
  const root = document.querySelector('[data-month-summary]');
  if (!root) return;
  if (!monthItems.length) {
    root.innerHTML = `<div><strong>0</strong><span>check-ins this month</span></div><p>Nothing saved here yet. A calendar with blank days is still a calendar, not a personal failure report.</p>`;
    return;
  }

  const counts = monthItems.reduce((acc, item) => {
    acc[item.family] = (acc[item.family] || 0) + 1;
    return acc;
  }, {});
  const mostFrequent = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
  const average = (monthItems.reduce((sum, item) => sum + Number(item.intensity || 0), 0) / monthItems.length).toFixed(1);
  root.innerHTML = `<div><strong>${monthItems.length}</strong><span>check-ins</span></div><div><strong>${escapeHtml(mostFrequent)}</strong><span>most frequent family</span></div><div><strong>${average}</strong><span>average intensity</span></div>`;
}

function renderCalendar() {
  const root = document.querySelector('[data-feelings-calendar]');
  const label = document.querySelector('[data-calendar-label]');
  if (!root || !label) return;

  root.innerHTML = '';
  label.textContent = calendarDate.toLocaleDateString([], { month: 'long', year: 'numeric' });
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const items = history();
  const monthItems = items.filter((item) => {
    const date = new Date(item.timestamp);
    return date.getFullYear() === year && date.getMonth() === month;
  });
  renderMonthSummary(monthItems);

  for (let index = 0; index < firstDay; index += 1) {
    const blank = document.createElement('span');
    blank.className = 'feelings-calendar-blank';
    root.append(blank);
  }

  for (let day = 1; day <= days; day += 1) {
    const matches = monthItems.filter((item) => new Date(item.timestamp).getDate() === day);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `feelings-calendar-day ${matches.length ? 'has-checkin' : ''}`;
    const dots = matches.slice(0, 4).map((item) => `<i class="${familyClass(item.family)}" title="${escapeHtml(item.family)}"></i>`).join('');
    button.innerHTML = `<strong>${day}</strong><span>${dots}${matches.length > 4 ? `<b>+${matches.length - 4}</b>` : ''}</span>`;
    button.addEventListener('click', () => showCalendarDay(new Date(year, month, day), matches));
    root.append(button);
  }
}

function showCalendarDay(date, items) {
  const root = document.querySelector('[data-feelings-day-detail]');
  if (!root) return;
  root.innerHTML = `<h3>${date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
    ${items.length ? items.map((item) => `<article class="${familyClass(item.family)}">
      <div><span>${WHEEL_DATA[item.family]?.icon || '•'}</span><div><small>${escapeHtml(item.family)} → ${escapeHtml(item.branch)}</small><strong>${escapeHtml(item.emotion)}</strong></div><b>${Number(item.intensity || 0)}/10</b></div>
      <p>${new Date(item.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}${item.context ? ` · ${escapeHtml(item.context)}` : ''}</p>
      ${item.note ? `<blockquote>${escapeHtml(item.note)}</blockquote>` : ''}
    </article>`).join('') : '<p>No check-ins saved this day.</p>'}`;
}

function bindPageControls() {
  const page = document.getElementById('feelings-page');
  if (!page || page.dataset.controlsBound) return;
  page.dataset.controlsBound = '1';

  page.addEventListener('click', (event) => {
    const branch = event.target.closest('[data-wheel-branch]');
    if (branch) {
      wheelState.branch = branch.dataset.wheelBranch;
      wheelState.precise = '';
      renderDrilldownIntoPage();
      return;
    }

    const precise = event.target.closest('[data-wheel-precise]');
    if (precise) {
      wheelState.precise = precise.dataset.wheelPrecise;
      renderDrilldownIntoPage();
      window.setTimeout(() => document.querySelector('.feeling-checkin-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 40);
      return;
    }

    if (event.target.closest('[data-wheel-reset]')) {
      wheelState = { family: '', branch: '', precise: '', intensity: 5, note: '', context: '' };
      document.querySelectorAll('[data-wheel-family]').forEach((button) => button.classList.remove('selected'));
      renderDrilldownIntoPage();
      return;
    }

    if (event.target.closest('[data-save-feeling]')) {
      saveCheckin();
      return;
    }

    const viewButton = event.target.closest('[data-feelings-view]');
    if (viewButton) {
      setFeelingsView(viewButton.dataset.feelingsView);
      return;
    }

    if (event.target.closest('[data-open-mood-calendar]')) {
      setFeelingsView('calendar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (event.target.closest('[data-calendar-prev]')) {
      calendarDate.setMonth(calendarDate.getMonth() - 1);
      renderCalendar();
      return;
    }

    if (event.target.closest('[data-calendar-next]')) {
      calendarDate.setMonth(calendarDate.getMonth() + 1);
      renderCalendar();
    }
  });

  page.addEventListener('input', (event) => {
    if (event.target.matches('.feelings-intensity')) {
      wheelState.intensity = Number(event.target.value);
      const output = page.querySelector('[data-intensity-output]');
      if (output) output.textContent = wheelState.intensity;
    }
    if (event.target.matches('[data-checkin-note]')) wheelState.note = event.target.value;
    if (event.target.matches('[data-checkin-context]')) wheelState.context = event.target.value;
  });
}

function bootFeelings() {
  mountPage();
  mountNav();
  bindPageControls();
  bindWheelMotion();
  updateLastCheckin();
}

let bootQueued = false;
function queueBoot() {
  if (bootQueued) return;
  bootQueued = true;
  requestAnimationFrame(() => {
    bootQueued = false;
    bootFeelings();
  });
}

window.addEventListener('DOMContentLoaded', () => setTimeout(queueBoot, 80));
window.addEventListener('load', queueBoot);
new MutationObserver(queueBoot).observe(document.documentElement, { childList: true, subtree: true });

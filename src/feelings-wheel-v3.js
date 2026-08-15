const FEELINGS_V3 = {
  Angry: {
    icon: '🔥',
    signal: 'Something may feel blocked, unfair, disrespectful, threatening, or important enough that your system wants action.',
    urge: 'push, confront, defend, prove, withdraw, retaliate, or set a boundary',
    branches: {
      Irritated: { cue: 'Low-to-medium heat. Something is getting under your skin.', words: ['annoyed', 'agitated', 'impatient', 'frustrated', 'bothered', 'exasperated'] },
      Resentful: { cue: 'The feeling has history. Something may seem unfair, unbalanced, or unresolved.', words: ['bitter', 'unappreciated', 'used', 'taken for granted', 'fed up', 'grudging'] },
      Furious: { cue: 'Your system is mobilized hard and the urge to act may be loud.', words: ['enraged', 'seething', 'combative', 'explosive', 'outraged', 'vengeful'] },
      Jealous: { cue: 'Something valued may feel threatened, scarce, or at risk of being lost.', words: ['envious', 'threatened', 'possessive', 'competitive', 'left behind', 'insecure'] }
    }
  },
  Anxious: {
    icon: '⚡',
    signal: 'Your brain may be scanning ahead for uncertainty, rejection, loss of control, or what could go wrong next.',
    urge: 'avoid, overthink, prepare, seek reassurance, check again, or regain control',
    branches: {
      Worried: { cue: 'Your attention keeps moving toward a possible future problem.', words: ['uneasy', 'apprehensive', 'nervous', 'preoccupied', 'concerned', 'tense'] },
      Spiraling: { cue: 'Thoughts are gaining speed faster than useful information is arriving.', words: ['racing', 'looping', 'catastrophizing', 'obsessing', 'unable to settle', 'hyper-alert'] },
      Uncertain: { cue: 'The unknown itself may be the hardest part.', words: ['confused', 'hesitant', 'doubtful', 'suspicious', 'unprepared', 'unsure'] },
      Panicky: { cue: 'Your alarm system is at full volume and thinking clearly may be harder.', words: ['frantic', 'desperate', 'trapped', 'terrified', 'out of control', 'breathless'] }
    }
  },
  Overwhelmed: {
    icon: '🌪️',
    signal: 'There may be more input, demand, responsibility, or decision-making than your current capacity can comfortably hold.',
    urge: 'freeze, flee, drop everything, snap, shut down, or try to solve every problem at once',
    branches: {
      Overloaded: { cue: 'There is simply too much coming in.', words: ['flooded', 'overstimulated', 'maxed out', 'saturated', 'buried', 'too much'] },
      Pressured: { cue: 'Demands feel urgent, heavy, or impossible to satisfy all at once.', words: ['rushed', 'cornered', 'stretched thin', 'under pressure', 'over-responsible', 'demanded of'] },
      Scattered: { cue: 'Your attention is being pulled in too many directions.', words: ['distracted', 'unfocused', 'chaotic', 'disorganized', 'pulled apart', 'mentally noisy'] },
      Stuck: { cue: 'You may know something needs to happen while still being unable to move toward it.', words: ['frozen', 'paralyzed', 'blocked', 'helpless', 'unable to start', 'unable to choose'] }
    }
  },
  Scared: {
    icon: '🫨',
    signal: 'Something feels threatening, unsafe, exposing, unpredictable, or powerful enough that your system wants protection.',
    urge: 'escape, freeze, hide, protect yourself, appease, or stay on guard',
    branches: {
      Threatened: { cue: 'Something feels close enough to danger that your body is bracing.', words: ['unsafe', 'intimidated', 'guarded', 'on edge', 'exposed', 'vulnerable'] },
      Dread: { cue: 'Fear is pointing forward toward something you do not want to face.', words: ['foreboding', 'fearful', 'bracing', 'expecting the worst', 'afraid of what is next', 'doomed'] },
      Startled: { cue: 'Something hit your nervous system fast.', words: ['shocked', 'alarmed', 'rattled', 'jumpy', 'shaken', 'surprised'] },
      Powerless: { cue: 'The situation may feel bigger than your ability to influence it.', words: ['small', 'helpless', 'timid', 'fragile', 'dependent', 'overmatched'] }
    }
  },
  Sad: {
    icon: '🌧️',
    signal: 'Something may be missing, lost, disappointing, disconnected, or different from what you hoped for.',
    urge: 'withdraw, slow down, cry, isolate, give up, or seek comfort and connection',
    branches: {
      Low: { cue: 'Energy and hope may be running thin.', words: ['discouraged', 'down', 'blue', 'hopeless', 'heavy', 'depleted'] },
      Grieving: { cue: 'There is a real loss, ending, or change your system is trying to absorb.', words: ['bereft', 'mourning', 'aching', 'longing', 'devastated', 'sorrowful'] },
      Disappointed: { cue: 'Reality did not meet an expectation that mattered.', words: ['let down', 'disillusioned', 'regretful', 'defeated', 'wistful', 'discouraged'] },
      Tender: { cue: 'You may be emotionally open, raw, or easily affected right now.', words: ['tearful', 'sensitive', 'melancholy', 'fragile', 'raw', 'vulnerable'] }
    }
  },
  Hurt: {
    icon: '💔',
    signal: 'Something may have landed as rejection, betrayal, dismissal, disrespect, or loss in a relationship or expectation that mattered.',
    urge: 'withdraw, protect yourself, demand repair, explain yourself, lash out, or seek reassurance',
    branches: {
      Rejected: { cue: 'You may feel unwanted, not chosen, or pushed away.', words: ['unwanted', 'excluded', 'dismissed', 'overlooked', 'abandoned', 'not chosen'] },
      Betrayed: { cue: 'Trust or an expectation of care may feel broken.', words: ['deceived', 'let down', 'used', 'violated', 'fooled', 'mistrustful'] },
      Invalidated: { cue: 'Your experience may feel minimized, misunderstood, or treated as if it does not count.', words: ['unheard', 'unseen', 'misunderstood', 'minimized', 'disrespected', 'brushed off'] },
      Heartbroken: { cue: 'The pain is large and tied to something or someone that mattered deeply.', words: ['crushed', 'devastated', 'wounded', 'grieving', 'aching', 'shattered'] }
    }
  },
  Lonely: {
    icon: '🌙',
    signal: 'You may be missing belonging, closeness, reciprocity, understanding, or the feeling of being known by another person.',
    urge: 'withdraw, reach out, cling, scroll, seek reassurance, or tell yourself nobody cares',
    branches: {
      Isolated: { cue: 'There is distance between you and the people or places that usually provide connection.', words: ['alone', 'cut off', 'disconnected', 'apart', 'withdrawn', 'stranded'] },
      Unseen: { cue: 'You may be physically around people and still feel emotionally invisible.', words: ['invisible', 'forgotten', 'overlooked', 'unknown', 'unimportant', 'unnoticed'] },
      Excluded: { cue: 'Belonging feels interrupted or denied.', words: ['left out', 'not invited', 'unwanted', 'peripheral', 'rejected', 'outside'] },
      Longing: { cue: 'Your system wants more closeness than it has right now.', words: ['homesick', 'distant', 'missing someone', 'starved for connection', 'needing closeness', 'yearning'] }
    }
  },
  Ashamed: {
    icon: '🫥',
    signal: 'Your attention may be turning toward yourself, your behavior, your values, or fear of how you are being seen by other people.',
    urge: 'hide, apologize, confess, repair, shrink, self-attack, or disappear',
    branches: {
      Embarrassed: { cue: 'You may feel painfully visible or worried about social judgment.', words: ['awkward', 'self-conscious', 'humiliated', 'mortified', 'foolish', 'flustered'] },
      Guilty: { cue: 'Your behavior may feel out of alignment with your values or responsibilities.', words: ['remorseful', 'regretful', 'sorry', 'responsible', 'accountable', 'contrite'] },
      'Self-critical': { cue: 'Your internal evaluator has grabbed the microphone.', words: ['inadequate', 'not enough', 'a failure', 'defective', 'disappointed in myself', 'harsh with myself'] },
      Exposed: { cue: 'Something private, imperfect, or vulnerable may feel too visible.', words: ['judged', 'scrutinized', 'found out', 'revealed', 'vulnerable', 'misunderstood'] }
    }
  },
  Numb: {
    icon: '🌫️',
    signal: 'Your system may be protecting itself by turning the emotional volume down, disconnecting, or moving into autopilot.',
    urge: 'check out, avoid, distract, sleep, scroll, suppress, or go through the motions',
    branches: {
      'Shut down': { cue: 'Your system may have hit the off switch after too much activation.', words: ['blank', 'frozen', 'checked out', 'disconnected', 'flat', 'unavailable'] },
      Detached: { cue: 'You feel separate from what is happening, even if you can intellectually describe it.', words: ['distant', 'unreal', 'far away', 'removed', 'emotionally absent', 'separate'] },
      Empty: { cue: 'There may be an absence of feeling, meaning, or energy rather than a loud emotion.', words: ['hollow', 'vacant', 'nothing', 'depleted', 'meaningless', 'bored'] },
      Avoiding: { cue: 'Part of you may be working hard not to contact the feeling yet.', words: ['distracted', 'escaping', 'procrastinating', 'hiding', 'suppressing', 'going through motions'] }
    }
  },
  Tired: {
    icon: '🪫',
    signal: 'Low capacity can change the volume of every other feeling. Sometimes the nervous system is not failing; it is out of fuel.',
    urge: 'stop, withdraw, lower demands, rest, avoid, or become irritable because everything costs more',
    branches: {
      Sleepy: { cue: 'Your body is asking for actual sleep or recovery.', words: ['drowsy', 'sluggish', 'groggy', 'heavy-eyed', 'foggy', 'slow'] },
      Drained: { cue: 'You have spent more energy than you currently have available.', words: ['depleted', 'exhausted', 'spent', 'worn out', 'low battery', 'wiped out'] },
      'Burned out': { cue: 'Long-running demands may have turned exhaustion into detachment or resentment.', words: ['overextended', 'cynical', 'done', 'resentful', 'unmotivated', 'fried'] },
      Weary: { cue: 'You may be tired not only physically, but tired of carrying the same thing.', words: ['tired of trying', 'discouraged', 'fatigued', 'burdened', 'worn down', 'needing rest'] }
    }
  },
  Calm: {
    icon: '🌿',
    signal: 'Your nervous system has enough room right now for steadiness, safety, relief, or simple okay-ness. This is useful data too.',
    urge: 'stay present, rest, connect, reflect, or keep doing what is supporting this state',
    branches: {
      Grounded: { cue: 'You feel present enough to inhabit the moment rather than race ahead of it.', words: ['steady', 'centered', 'present', 'balanced', 'settled', 'anchored'] },
      Safe: { cue: 'Your system is not actively scanning for threat.', words: ['secure', 'protected', 'trusting', 'comfortable', 'unthreatened', 'at ease'] },
      Relieved: { cue: 'Pressure dropped, uncertainty resolved, or something difficult passed.', words: ['lighter', 'reassured', 'unburdened', 'released', 'hopeful', 'okay again'] },
      Content: { cue: 'Nothing urgently needs to be different in this moment.', words: ['satisfied', 'peaceful', 'comfortable', 'enough', 'restful', 'quietly happy'] }
    }
  },
  Happy: {
    icon: '✨',
    signal: 'Something is nourishing, connecting, working, meaningful, exciting, or worth savoring. Positive states deserve the same attention as hard ones.',
    urge: 'approach, share, celebrate, play, create, connect, or keep going',
    branches: {
      Joyful: { cue: 'There is warmth, pleasure, amusement, or delight in the system.', words: ['delighted', 'cheerful', 'playful', 'amused', 'bright', 'pleased'] },
      Connected: { cue: 'You feel some degree of belonging, closeness, trust, or being understood.', words: ['loved', 'seen', 'supported', 'close', 'accepted', 'understood'] },
      Proud: { cue: 'You are noticing effort, growth, competence, or something you value in yourself.', words: ['accomplished', 'capable', 'confident', 'validated', 'strong', 'competent'] },
      Energized: { cue: 'There is usable positive energy in the system.', words: ['excited', 'inspired', 'curious', 'motivated', 'hopeful', 'alive'] }
    }
  }
};

const FEELINGS_V3_ORDER = Object.keys(FEELINGS_V3);
const FEELINGS_V3_HISTORY_KEY = 'ok-squirl-feelings-history-v1';
const FEELINGS_V3_NAV_ICON = '/public/assets/ok-squirl/ok-squirl-icon-check-in.svg';
const FEELINGS_V3_DBT_ICON = '/public/assets/ok-squirl/ok-squirl-icon-insights.svg';

let feelingsV3State = { family: '', branch: '', precise: '', intensity: 5, note: '', context: '' };
let feelingsV3Rotation = 0;
let feelingsV3Dragging = false;
let feelingsV3DragAngle = 0;
let feelingsV3LastMove = 0;
let feelingsV3Velocity = 0;
let feelingsV3Moved = false;
let feelingsV3SuppressClick = false;
let feelingsV3Frame = 0;
let feelingsV3CalendarDate = new Date();
feelingsV3CalendarDate.setDate(1);

function feelingsV3Mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function feelingsV3Escape(value = '') {
  const node = document.createElement('div');
  node.textContent = value;
  return node.innerHTML;
}

function feelingsV3Slug(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function feelingsV3History() {
  try {
    const items = JSON.parse(localStorage.getItem(FEELINGS_V3_HISTORY_KEY) || '[]');
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

function feelingsV3SaveHistory(items) {
  localStorage.setItem(FEELINGS_V3_HISTORY_KEY, JSON.stringify(items));
}

function feelingsV3CurrentIndex() {
  const step = 360 / FEELINGS_V3_ORDER.length;
  return feelingsV3Mod(Math.round(-feelingsV3Rotation / step), FEELINGS_V3_ORDER.length);
}

function feelingsV3CurrentFamily() {
  return FEELINGS_V3_ORDER[feelingsV3CurrentIndex()];
}

function feelingsV3PageMarkup() {
  return `<section class="feelings-v3-hero">
      <div>
        <p class="eyebrow">FEELINGS</p>
        <h1>What is going on in there?</h1>
        <p>Start with a word you would actually say. Spin the wheel with your finger, let it settle, then get more precise.</p>
      </div>
      <div class="feelings-v3-switch" aria-label="Feelings views">
        <button type="button" class="active" data-v3-view="checkin">Check-in</button>
        <button type="button" data-v3-view="calendar">Mood Calendar</button>
      </div>
    </section>

    <div data-v3-panel="checkin">
      ${feelingsV3WheelMarkup()}
      <section class="feelings-v3-last-card">
        <div><p class="eyebrow">LAST CHECK-IN</p><strong data-v3-last>No check-ins saved yet.</strong></div>
        <button type="button" data-v3-open-calendar>See patterns over time</button>
      </section>
    </div>

    <div data-v3-panel="calendar" hidden>
      <section class="feelings-v3-calendar-shell">
        <div class="feelings-v3-calendar-head">
          <p class="eyebrow">MOOD CALENDAR</p>
          <h2>Patterns, not grades.</h2>
          <p>Saved check-ins stay in this browser. Look for what repeats, what changes, and what seems to make hard days easier.</p>
        </div>
        <div class="feelings-v3-month-summary" data-v3-month-summary></div>
        <div class="feelings-v3-calendar-nav">
          <button type="button" data-v3-prev aria-label="Previous month">‹</button>
          <strong data-v3-month-label></strong>
          <button type="button" data-v3-next aria-label="Next month">›</button>
        </div>
        <div class="feelings-v3-weekdays" aria-hidden="true"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
        <div class="feelings-v3-calendar" data-v3-calendar></div>
        <div class="feelings-v3-day-detail" data-v3-day-detail><p>Tap a day to see its check-ins.</p></div>
      </section>
    </div>`;
}

function feelingsV3WheelMarkup() {
  return `<section class="feelings-v3-shell" aria-labelledby="feelings-v3-title">
      <div class="feelings-v3-copy">
        <p class="eyebrow">CHECK IN WITH YOURSELF</p>
        <h2 id="feelings-v3-title">Spin to the closest big feeling.</h2>
        <p>There are twelve starting points on the wheel. None is a diagnosis and none has to be perfect. The useful part comes next, when we narrow it down.</p>
      </div>
      <div class="feelings-v3-wheel" id="feelingsWheelV3" tabindex="0" role="group" aria-label="Spin the feelings wheel or tap a feeling">
        <div class="feelings-v3-disc" id="feelingsDiscV3" aria-hidden="true"></div>
        <div class="feelings-v3-pointer" aria-hidden="true"><span></span></div>
        <div class="feelings-v3-ring">
          ${FEELINGS_V3_ORDER.map((family) => `<button class="feelings-v3-family state-${feelingsV3Slug(family)}" data-v3-family="${family}" type="button"><span>${FEELINGS_V3[family].icon}</span><strong>${family}</strong></button>`).join('')}
        </div>
        <div class="feelings-v3-center" aria-live="polite">
          <span data-v3-center-icon>🔥</span>
          <strong data-v3-center-label>Angry</strong>
          <small data-v3-center-note>spin or tap</small>
        </div>
      </div>
      <p class="feelings-v3-hint"><b>Drag the wheel with one finger</b> · the word in the center changes while you move · let go and it locks in</p>
      <div class="feelings-v3-drilldown" data-v3-drilldown>${feelingsV3Drilldown()}</div>
    </section>`;
}

function feelingsV3Drilldown() {
  if (!feelingsV3State.family) {
    return `<div class="feelings-v3-prompt"><strong>Start broad.</strong><p>Spin until the center is close enough, then let go. You can also tap any word around the wheel.</p></div>`;
  }

  const family = FEELINGS_V3[feelingsV3State.family];
  const branchButtons = Object.entries(family.branches).map(([branch, info]) => `<button type="button" class="feelings-v3-branch ${feelingsV3State.branch === branch ? 'selected' : ''}" data-v3-branch="${branch}"><strong>${branch}</strong><small>${info.cue}</small></button>`).join('');
  const branch = feelingsV3State.branch ? family.branches[feelingsV3State.branch] : null;
  const preciseButtons = branch ? branch.words.map((word) => `<button type="button" class="feelings-v3-word ${feelingsV3State.precise === word ? 'selected' : ''}" data-v3-word="${word}">${word}</button>`).join('') : '';

  return `<div class="feelings-v3-lock-row">
      <button type="button" class="feelings-v3-spin-again" data-v3-reset>↻ Spin again</button>
      <div class="feelings-v3-lock state-${feelingsV3Slug(feelingsV3State.family)}"><span>${family.icon}</span><div><small>STARTING POINT</small><strong>${feelingsV3State.family}</strong></div></div>
    </div>
    <div class="feelings-v3-stage">
      <p class="eyebrow">GET CLOSER</p>
      <h3>What kind of ${feelingsV3State.family.toLowerCase()}?</h3>
      <div class="feelings-v3-branches">${branchButtons}</div>
    </div>
    ${branch ? `<div class="feelings-v3-stage feelings-v3-precise-stage"><p class="eyebrow">GET PRECISE</p><h3>${feelingsV3State.branch}: which word lands?</h3><p>${branch.cue}</p><div class="feelings-v3-words">${preciseButtons}</div></div>` : ''}
    ${feelingsV3State.precise ? feelingsV3CheckinCard(family) : ''}`;
}

function feelingsV3CheckinCard(family) {
  return `<div class="feelings-v3-checkin-card">
      <div class="feelings-v3-selection state-${feelingsV3Slug(feelingsV3State.family)}"><span>${family.icon}</span><div><small>${feelingsV3State.family} → ${feelingsV3State.branch}</small><strong>${feelingsV3Escape(feelingsV3State.precise)}</strong></div></div>
      <div class="feelings-v3-insight"><strong>What this can be telling you</strong><p>${family.signal}</p><span><b>Common action urge:</b> ${family.urge}.</span></div>
      <div class="feelings-v3-intensity-head"><label for="feelingsV3Intensity"><strong>How intense is it right now?</strong><span>1 = barely there · 10 = driving the whole nervous system</span></label><output data-v3-intensity-output>${feelingsV3State.intensity}</output></div>
      <input id="feelingsV3Intensity" class="feelings-v3-intensity" type="range" min="1" max="10" value="${feelingsV3State.intensity}">
      <div class="feelings-v3-context-grid">
        <label><span>Where / what context? <small>optional</small></span><select data-v3-context><option value="">Choose one</option>${['Home','Work','Relationship / family','Parenting','Social / with people','Errands / public','In the car','Alone','Therapy / appointment','Other'].map((item) => `<option ${feelingsV3State.context === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label>
        <label><span>What is happening? <small>optional</small></span><textarea data-v3-note maxlength="280" placeholder="A sentence is enough. This stays in this browser.">${feelingsV3Escape(feelingsV3State.note)}</textarea></label>
      </div>
      <div class="feelings-v3-actions"><button type="button" class="button button-primary" data-v3-save>Save this check-in</button><button type="button" class="button button-secondary" data-v3-dbt>Open DBT Tools</button></div>
      <p class="feelings-v3-save-status" data-v3-save-status aria-live="polite"></p>
    </div>`;
}

function feelingsV3FixNavIcons() {
  const feelingsButton = document.querySelector('[data-feelings-tab]');
  const dbtButton = document.querySelector('[data-dbt-tab]');

  const setIcon = (button, src, fallback) => {
    if (!button) return;
    const span = button.querySelector('span');
    if (!span) return;
    let img = span.querySelector('img');
    if (!img) {
      span.textContent = '';
      img = document.createElement('img');
      img.alt = '';
      span.append(img);
    }
    if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    img.onerror = () => {
      img.remove();
      span.textContent = fallback;
      span.classList.add('feelings-v3-icon-fallback');
    };
  };

  setIcon(feelingsButton, FEELINGS_V3_NAV_ICON, '◉');
  setIcon(dbtButton, FEELINGS_V3_DBT_ICON, '◇');
  const dbtLabel = dbtButton?.querySelector('small');
  if (dbtLabel) dbtLabel.textContent = 'DBT Tools';
}

function feelingsV3PointerAngle(event, element) {
  const rect = element.getBoundingClientRect();
  return Math.atan2(event.clientY - rect.top - rect.height / 2, event.clientX - rect.left - rect.width / 2) * 180 / Math.PI;
}

function feelingsV3Delta(delta) {
  if (delta > 180) return delta - 360;
  if (delta < -180) return delta + 360;
  return delta;
}

function feelingsV3UpdateWheel() {
  const wheel = document.getElementById('feelingsWheelV3');
  const disc = document.getElementById('feelingsDiscV3');
  if (!wheel || !disc) return;
  const step = 360 / FEELINGS_V3_ORDER.length;
  const radius = wheel.clientWidth * (wheel.clientWidth < 460 ? 0.395 : 0.405);
  const buttons = wheel.querySelectorAll('[data-v3-family]');

  buttons.forEach((button, index) => {
    const angle = (-90 + index * step + feelingsV3Rotation) * Math.PI / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    button.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
  disc.style.transform = `rotate(${feelingsV3Rotation}deg)`;

  const family = feelingsV3CurrentFamily();
  buttons.forEach((button) => button.classList.toggle('is-preview', button.dataset.v3Family === family));
  const data = FEELINGS_V3[family];
  const icon = wheel.querySelector('[data-v3-center-icon]');
  const label = wheel.querySelector('[data-v3-center-label]');
  const note = wheel.querySelector('[data-v3-center-note]');
  if (icon) icon.textContent = data.icon;
  if (label) label.textContent = family;
  if (note) note.textContent = feelingsV3Dragging ? 'keep moving' : feelingsV3State.family ? 'locked in' : 'spin or tap';
}

function feelingsV3StopMotion() {
  if (feelingsV3Frame) cancelAnimationFrame(feelingsV3Frame);
  feelingsV3Frame = 0;
}

function feelingsV3AnimateTo(target, duration = 300, done) {
  feelingsV3StopMotion();
  const start = feelingsV3Rotation;
  const distance = target - start;
  const started = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    feelingsV3Rotation = start + distance * eased;
    feelingsV3UpdateWheel();
    if (progress < 1) feelingsV3Frame = requestAnimationFrame(tick);
    else {
      feelingsV3Frame = 0;
      done?.();
    }
  };
  feelingsV3Frame = requestAnimationFrame(tick);
}

function feelingsV3Commit() {
  const family = feelingsV3CurrentFamily();
  feelingsV3State = { ...feelingsV3State, family, branch: '', precise: '', note: '', context: '', intensity: 5 };
  document.querySelectorAll('[data-v3-family]').forEach((button) => button.classList.toggle('selected', button.dataset.v3Family === family));
  feelingsV3RenderDrilldown();
  feelingsV3UpdateWheel();
}

function feelingsV3SnapCurrent() {
  const step = 360 / FEELINGS_V3_ORDER.length;
  const target = Math.round(feelingsV3Rotation / step) * step;
  feelingsV3AnimateTo(target, 260, feelingsV3Commit);
}

function feelingsV3SnapTo(family) {
  const index = FEELINGS_V3_ORDER.indexOf(family);
  if (index < 0) return;
  const step = 360 / FEELINGS_V3_ORDER.length;
  const base = -index * step;
  const turns = Math.round((feelingsV3Rotation - base) / 360);
  feelingsV3AnimateTo(base + turns * 360, 330, feelingsV3Commit);
}

function feelingsV3Inertia() {
  feelingsV3StopMotion();
  let velocity = Math.max(-1.15, Math.min(1.15, feelingsV3Velocity));
  let previous = performance.now();
  const tick = (now) => {
    const elapsed = Math.min(32, now - previous || 16);
    previous = now;
    feelingsV3Rotation += velocity * elapsed;
    velocity *= Math.pow(0.925, elapsed / 16);
    feelingsV3UpdateWheel();
    if (Math.abs(velocity) > 0.012) feelingsV3Frame = requestAnimationFrame(tick);
    else {
      feelingsV3Frame = 0;
      feelingsV3SnapCurrent();
    }
  };
  feelingsV3Frame = requestAnimationFrame(tick);
}

function feelingsV3BindWheel() {
  const wheel = document.getElementById('feelingsWheelV3');
  if (!wheel || wheel.dataset.v3MotionBound) return;
  wheel.dataset.v3MotionBound = '1';

  wheel.addEventListener('pointerdown', (event) => {
    feelingsV3StopMotion();
    feelingsV3Dragging = true;
    feelingsV3Moved = false;
    feelingsV3Velocity = 0;
    feelingsV3DragAngle = feelingsV3PointerAngle(event, wheel);
    feelingsV3LastMove = performance.now();
    wheel.classList.add('is-dragging');
    wheel.setPointerCapture?.(event.pointerId);
  });

  wheel.addEventListener('pointermove', (event) => {
    if (!feelingsV3Dragging) return;
    const now = performance.now();
    const angle = feelingsV3PointerAngle(event, wheel);
    const delta = feelingsV3Delta(angle - feelingsV3DragAngle);
    const elapsed = Math.max(8, now - feelingsV3LastMove);
    if (Math.abs(delta) > 0.12) feelingsV3Moved = true;
    feelingsV3Rotation += delta;
    feelingsV3Velocity = delta / elapsed;
    feelingsV3DragAngle = angle;
    feelingsV3LastMove = now;
    feelingsV3UpdateWheel();
  });

  const finish = () => {
    if (!feelingsV3Dragging) return;
    feelingsV3Dragging = false;
    wheel.classList.remove('is-dragging');
    if (feelingsV3Moved) {
      feelingsV3SuppressClick = true;
      feelingsV3Inertia();
    } else {
      feelingsV3SnapCurrent();
    }
  };

  wheel.addEventListener('pointerup', finish);
  wheel.addEventListener('pointercancel', finish);

  wheel.addEventListener('click', (event) => {
    const button = event.target.closest('[data-v3-family]');
    if (!button) return;
    if (feelingsV3SuppressClick) {
      feelingsV3SuppressClick = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    feelingsV3SnapTo(button.dataset.v3Family);
  });

  wheel.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const step = 360 / FEELINGS_V3_ORDER.length;
    feelingsV3Rotation += event.key === 'ArrowRight' ? -step : step;
    feelingsV3SnapCurrent();
  });
}

function feelingsV3RenderDrilldown() {
  const root = document.querySelector('[data-v3-drilldown]');
  if (root) root.innerHTML = feelingsV3Drilldown();
}

function feelingsV3SaveCheckin() {
  if (!feelingsV3State.family || !feelingsV3State.branch || !feelingsV3State.precise) return;
  const intensity = Number(document.querySelector('.feelings-v3-intensity')?.value || feelingsV3State.intensity || 5);
  const context = document.querySelector('[data-v3-context]')?.value || '';
  const note = document.querySelector('[data-v3-note]')?.value.trim() || '';
  feelingsV3State = { ...feelingsV3State, intensity, context, note };
  const items = feelingsV3History();
  items.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, timestamp: new Date().toISOString(), family: feelingsV3State.family, branch: feelingsV3State.branch, emotion: feelingsV3State.precise, intensity, context, note });
  feelingsV3SaveHistory(items);
  feelingsV3UpdateLast();
  feelingsV3RenderCalendar();
  const status = document.querySelector('[data-v3-save-status]');
  if (status) status.textContent = `Saved: ${feelingsV3State.precise}, ${intensity}/10.`;
}

function feelingsV3UpdateLast() {
  const items = feelingsV3History();
  const item = items[items.length - 1];
  document.querySelectorAll('[data-v3-last]').forEach((node) => {
    if (!item) {
      node.textContent = 'No check-ins saved yet.';
      return;
    }
    const date = new Date(item.timestamp);
    node.textContent = `${item.emotion} · ${item.intensity}/10 · ${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  });
}

function feelingsV3SetView(view) {
  document.querySelectorAll('[data-v3-view]').forEach((button) => button.classList.toggle('active', button.dataset.v3View === view));
  document.querySelectorAll('[data-v3-panel]').forEach((panel) => { panel.hidden = panel.dataset.v3Panel !== view; });
  if (view === 'calendar') feelingsV3RenderCalendar();
}

function feelingsV3RenderSummary(items) {
  const root = document.querySelector('[data-v3-month-summary]');
  if (!root) return;
  if (!items.length) {
    root.innerHTML = `<div><strong>0</strong><span>check-ins this month</span></div><p>No data yet. Blank days are information-free, not bad days.</p>`;
    return;
  }
  const counts = items.reduce((acc, item) => { acc[item.family] = (acc[item.family] || 0) + 1; return acc; }, {});
  const most = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
  const average = (items.reduce((sum, item) => sum + Number(item.intensity || 0), 0) / items.length).toFixed(1);
  root.innerHTML = `<div><strong>${items.length}</strong><span>check-ins</span></div><div><strong>${feelingsV3Escape(most)}</strong><span>most frequent starting point</span></div><div><strong>${average}</strong><span>average intensity</span></div>`;
}

function feelingsV3RenderCalendar() {
  const root = document.querySelector('[data-v3-calendar]');
  const label = document.querySelector('[data-v3-month-label]');
  if (!root || !label) return;
  root.innerHTML = '';
  label.textContent = feelingsV3CalendarDate.toLocaleDateString([], { month: 'long', year: 'numeric' });
  const year = feelingsV3CalendarDate.getFullYear();
  const month = feelingsV3CalendarDate.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const monthItems = feelingsV3History().filter((item) => { const date = new Date(item.timestamp); return date.getFullYear() === year && date.getMonth() === month; });
  feelingsV3RenderSummary(monthItems);

  for (let i = 0; i < first; i += 1) {
    const blank = document.createElement('span');
    blank.className = 'feelings-v3-calendar-blank';
    root.append(blank);
  }

  for (let day = 1; day <= days; day += 1) {
    const matches = monthItems.filter((item) => new Date(item.timestamp).getDate() === day);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `feelings-v3-day ${matches.length ? 'has-checkin' : ''}`;
    const dots = matches.slice(0, 4).map((item) => `<i class="state-${feelingsV3Slug(item.family)}" title="${feelingsV3Escape(item.family)}"></i>`).join('');
    button.innerHTML = `<strong>${day}</strong><span>${dots}${matches.length > 4 ? `<b>+${matches.length - 4}</b>` : ''}</span>`;
    button.addEventListener('click', () => feelingsV3ShowDay(new Date(year, month, day), matches));
    root.append(button);
  }
}

function feelingsV3ShowDay(date, items) {
  const root = document.querySelector('[data-v3-day-detail]');
  if (!root) return;
  root.innerHTML = `<h3>${date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</h3>${items.length ? items.map((item) => `<article class="state-${feelingsV3Slug(item.family)}"><div><span>${FEELINGS_V3[item.family]?.icon || '•'}</span><div><small>${feelingsV3Escape(item.family)} → ${feelingsV3Escape(item.branch || '')}</small><strong>${feelingsV3Escape(item.emotion || '')}</strong></div><b>${Number(item.intensity || 0)}/10</b></div><p>${new Date(item.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}${item.context ? ` · ${feelingsV3Escape(item.context)}` : ''}</p>${item.note ? `<blockquote>${feelingsV3Escape(item.note)}</blockquote>` : ''}</article>`).join('') : '<p>No check-ins saved this day.</p>'}`;
}

function feelingsV3BindPage() {
  const page = document.getElementById('feelings-page');
  if (!page || page.dataset.v3Bound) return;
  page.dataset.v3Bound = '1';

  page.addEventListener('click', (event) => {
    const branch = event.target.closest('[data-v3-branch]');
    if (branch) {
      feelingsV3State.branch = branch.dataset.v3Branch;
      feelingsV3State.precise = '';
      feelingsV3RenderDrilldown();
      return;
    }
    const word = event.target.closest('[data-v3-word]');
    if (word) {
      feelingsV3State.precise = word.dataset.v3Word;
      feelingsV3RenderDrilldown();
      window.setTimeout(() => document.querySelector('.feelings-v3-checkin-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 40);
      return;
    }
    if (event.target.closest('[data-v3-reset]')) {
      feelingsV3State = { family: '', branch: '', precise: '', intensity: 5, note: '', context: '' };
      document.querySelectorAll('[data-v3-family]').forEach((button) => button.classList.remove('selected'));
      feelingsV3RenderDrilldown();
      feelingsV3UpdateWheel();
      return;
    }
    if (event.target.closest('[data-v3-save]')) {
      feelingsV3SaveCheckin();
      return;
    }
    if (event.target.closest('[data-v3-dbt]')) {
      document.querySelector('[data-dbt-tab]')?.click();
      return;
    }
    const view = event.target.closest('[data-v3-view]');
    if (view) {
      feelingsV3SetView(view.dataset.v3View);
      return;
    }
    if (event.target.closest('[data-v3-open-calendar]')) {
      feelingsV3SetView('calendar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (event.target.closest('[data-v3-prev]')) {
      feelingsV3CalendarDate.setMonth(feelingsV3CalendarDate.getMonth() - 1);
      feelingsV3RenderCalendar();
      return;
    }
    if (event.target.closest('[data-v3-next]')) {
      feelingsV3CalendarDate.setMonth(feelingsV3CalendarDate.getMonth() + 1);
      feelingsV3RenderCalendar();
    }
  });

  page.addEventListener('input', (event) => {
    if (event.target.matches('.feelings-v3-intensity')) {
      feelingsV3State.intensity = Number(event.target.value);
      const output = page.querySelector('[data-v3-intensity-output]');
      if (output) output.textContent = feelingsV3State.intensity;
    }
    if (event.target.matches('[data-v3-context]')) feelingsV3State.context = event.target.value;
    if (event.target.matches('[data-v3-note]')) feelingsV3State.note = event.target.value;
  });
}

function feelingsV3Enhance() {
  feelingsV3FixNavIcons();
  const page = document.getElementById('feelings-page');
  if (!page || page.dataset.feelingsV3 === 'true') return;
  page.dataset.feelingsV3 = 'true';
  page.innerHTML = feelingsV3PageMarkup();
  feelingsV3BindPage();
  feelingsV3BindWheel();
  feelingsV3UpdateWheel();
  feelingsV3UpdateLast();
}

let feelingsV3Queued = false;
function feelingsV3Queue() {
  if (feelingsV3Queued) return;
  feelingsV3Queued = true;
  requestAnimationFrame(() => {
    feelingsV3Queued = false;
    feelingsV3Enhance();
  });
}

window.addEventListener('DOMContentLoaded', () => setTimeout(feelingsV3Queue, 120));
window.addEventListener('load', feelingsV3Queue);
new MutationObserver(feelingsV3Queue).observe(document.documentElement, { childList: true, subtree: true });

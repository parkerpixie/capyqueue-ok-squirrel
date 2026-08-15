const FAMILY_DATA = {
  Angry: {
    color: 'rust',
    urges: ['Attack or snap', 'Argue or prove my point', 'Send the message now', 'Withdraw with resentment', 'Punish or retaliate', 'Set a boundary'],
    opposite: 'Gently approach, soften your body and voice, or temporarily disengage without punishing. If the anger fits the facts, use effective problem solving or a clear boundary instead of Opposite Action.'
  },
  Afraid: {
    color: 'teal',
    urges: ['Avoid', 'Escape', 'Cancel', 'Freeze', 'Seek reassurance', 'Prepare or protect myself'],
    opposite: 'Approach what is safe, stay present, and do the next effective step instead of escaping. If there is a real threat, protect yourself rather than using Opposite Action.'
  },
  Sad: {
    color: 'blue',
    urges: ['Withdraw', 'Stay in bed', 'Give up', 'Isolate', 'Cry', 'Reach for support'],
    opposite: 'Activate gently: stand up, connect, move toward something meaningful, and do one thing that builds mastery or contact. If the sadness fits a real loss, allow grieving while still caring for yourself.'
  },
  'Shame / Guilt': {
    color: 'plum',
    urges: ['Hide', 'Avoid the person', 'Over-apologize', 'Punish myself', 'Confess everything', 'Repair something I did'],
    opposite: 'If you did not violate your values, make eye contact, stay visible, and do not apologize for existing. If you did violate your values, repair what you can and then stop repeatedly punishing yourself.'
  },
  Joy: {
    color: 'gold',
    urges: ['Share it', 'Celebrate', 'Move toward people', 'Take a risk', 'Savor it', 'I am not sure'],
    opposite: 'Joy generally does not need reducing. Notice whether the urge is effective, savor what is real, and stay grounded enough to choose rather than accelerate automatically.'
  },
  Disgust: {
    color: 'sage',
    urges: ['Move away', 'Reject', 'Shut down', 'Criticize', 'Protect a boundary', 'Clean or remove something'],
    opposite: 'If the disgust does not fit the facts, gently approach and observe without avoidance or contempt. If it signals a real boundary violation or danger, protect the boundary.'
  }
};

const ACTION_GUIDANCE = {
  stop: {
    icon: '✋',
    title: 'STOP first',
    copy: 'Your intensity is high enough that the first job is preventing the emotion from becoming the boss of your behavior.',
    why: 'Create a pause before you analyze, communicate, decide, quit, send, buy, confess, or confront.'
  },
  tip: {
    icon: '🌡️',
    title: 'TIPP before analysis',
    copy: 'At this level of activation, more thinking may simply produce faster thoughts. Regulate the body first.',
    why: 'Once the physiological surge drops, Check the Facts and Wise Mind become much more available.'
  },
  facts: {
    icon: '🔎',
    title: 'Check the Facts',
    copy: 'You are not yet sure whether the emotion fits reality. Separate observable facts from assumptions, predictions, interpretations, and mind-reading.',
    why: 'DBT changes the response depending on whether an emotion fits the facts. This is the fork in the road.'
  },
  opposite: {
    icon: '↗️',
    title: 'Opposite Action',
    copy: 'The emotion or its intensity does not fit the facts. Acting on the urge is likely to reinforce the emotion instead of solving the problem.',
    why: 'Opposite Action works when you do the opposite behavior all the way, including posture, expression, tone, and attention.'
  },
  accept: {
    icon: '🌊',
    title: 'Radical Acceptance',
    copy: 'The painful fact appears real, and it is not something you can change in this moment. The work is to stop adding suffering by demanding that reality be different before you can move.',
    why: 'Acceptance is not approval, forgiveness, passivity, or saying the situation is okay. It is acknowledging what is already true so you can respond effectively.'
  },
  wise: {
    icon: '🦉',
    title: 'Wise Mind + effective action',
    copy: 'The emotion appears to fit the facts and there may be something you can influence. The question becomes: what action respects both the emotion and the reality?',
    why: 'When emotion fits the facts, DBT does not ask you to erase it. Use it as information, then choose an effective response.'
  }
};

let state = {
  family: '',
  emotion: '',
  intensity: 5,
  urge: '',
  fits: '',
  changeable: ''
};

function getFamilyFromChip(chip) {
  const details = chip.closest('details');
  return details?.querySelector('summary strong')?.textContent?.trim() || '';
}

function recommendation() {
  if (state.intensity >= 9) return ['tip', 'stop'];
  if (state.intensity >= 8) return ['stop', 'tip'];
  if (!state.fits || state.fits === 'unsure') return ['facts'];
  if (state.fits === 'no') return ['opposite', 'facts'];
  if (state.changeable === 'no') return ['accept', 'wise'];
  if (state.changeable === 'yes') return ['wise'];
  return ['facts'];
}

function renderShell() {
  return `<section id="dbt-engine" class="dbt-engine" aria-live="polite">
    <div class="dbt-engine-head">
      <div>
        <p class="eyebrow">EMOTION → SKILL ENGINE</p>
        <h2>Do not just name the feeling. Run it through DBT.</h2>
        <p>Choose an emotion above and we will move through intensity, action urge, facts, and what is actually changeable.</p>
      </div>
      <span class="dbt-engine-meter">0 / 5</span>
    </div>
    <div class="dbt-engine-empty">
      <div class="dbt-engine-squirrel">🐿️</div>
      <strong>Start with the feelings map.</strong>
      <p>Tap the most precise emotion word you can find. Close enough is fine. Precision is useful, perfection is not.</p>
    </div>
  </section>`;
}

function mountEngine() {
  const wheel = document.querySelector('.dbt-wheel');
  if (!wheel || document.getElementById('dbt-engine')) return;
  wheel.insertAdjacentHTML('afterend', renderShell());
  bindEmotionChips();
}

function bindEmotionChips() {
  document.querySelectorAll('.dbt-emotion-chip').forEach((chip) => {
    if (chip.dataset.engineBound) return;
    chip.dataset.engineBound = '1';
    chip.addEventListener('click', () => {
      document.querySelectorAll('.dbt-emotion-chip').forEach((item) => item.classList.remove('selected'));
      chip.classList.add('selected');
      state = {
        family: getFamilyFromChip(chip),
        emotion: chip.textContent.trim(),
        intensity: 5,
        urge: '',
        fits: '',
        changeable: ''
      };
      renderEngine();
      document.getElementById('dbt-engine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function stepCount() {
  let count = state.emotion ? 1 : 0;
  if (state.intensity) count += 1;
  if (state.urge) count += 1;
  if (state.fits) count += 1;
  if (state.changeable || state.fits === 'no' || state.intensity >= 8) count += 1;
  return Math.min(count, 5);
}

function renderEngine() {
  const root = document.getElementById('dbt-engine');
  if (!root || !state.emotion) return;
  const family = FAMILY_DATA[state.family] || FAMILY_DATA.Angry;
  const intense = state.intensity >= 8;
  const readyForResult = intense || (state.urge && state.fits && (state.fits !== 'yes' || state.changeable));

  root.innerHTML = `<div class="dbt-engine-head">
      <div>
        <p class="eyebrow">EMOTION → SKILL ENGINE</p>
        <h2><span class="engine-emotion">${state.emotion}</span> is the signal. Now we choose the response.</h2>
        <p class="engine-family">${state.family}</p>
      </div>
      <span class="dbt-engine-meter">${stepCount()} / 5</span>
    </div>

    <div class="engine-step engine-step-intensity">
      <div class="engine-number">1</div>
      <div class="engine-content">
        <h3>How intense is it right now?</h3>
        <div class="intensity-readout"><strong>${state.intensity}</strong><span>/ 10</span></div>
        <input class="dbt-intensity" type="range" min="1" max="10" value="${state.intensity}" aria-label="Emotion intensity from 1 to 10" />
        <div class="intensity-labels"><span>present</span><span>driving the bus</span><span>red alert</span></div>
        ${intense ? '<div class="engine-alert">At 8 or above, DBT usually starts with crisis survival before detailed analysis. Your cortex can file its report after the fire alarm quiets down.</div>' : ''}
      </div>
    </div>

    <div class="engine-step">
      <div class="engine-number">2</div>
      <div class="engine-content">
        <h3>What is ${state.emotion} urging you to do?</h3>
        <p>Emotions come with action urges. Naming the urge is often more useful than debating whether you should have the feeling.</p>
        <div class="engine-options urge-options">
          ${family.urges.map((urge) => `<button class="engine-choice ${state.urge === urge ? 'selected' : ''}" data-urge="${urge}">${urge}</button>`).join('')}
        </div>
      </div>
    </div>

    ${state.urge ? `<div class="engine-step">
      <div class="engine-number">3</div>
      <div class="engine-content">
        <h3>Does the emotion fit the facts?</h3>
        <p>Not “is the feeling allowed?” It is allowed. Ask whether the type and intensity of the emotion match what can actually be verified.</p>
        <div class="engine-options three-up">
          <button class="engine-choice ${state.fits === 'yes' ? 'selected' : ''}" data-fits="yes"><strong>Yes</strong><small>The facts support it</small></button>
          <button class="engine-choice ${state.fits === 'no' ? 'selected' : ''}" data-fits="no"><strong>No</strong><small>The story or intensity is outrunning the facts</small></button>
          <button class="engine-choice ${state.fits === 'unsure' ? 'selected' : ''}" data-fits="unsure"><strong>Not sure</strong><small>I need to separate facts from assumptions</small></button>
        </div>
      </div>
    </div>` : ''}

    ${state.fits === 'yes' ? `<div class="engine-step">
      <div class="engine-number">4</div>
      <div class="engine-content">
        <h3>Can anything about the situation be changed right now?</h3>
        <p>This separates problem solving from acceptance. Sometimes both are needed, just for different parts of the problem.</p>
        <div class="engine-options two-up">
          <button class="engine-choice ${state.changeable === 'yes' ? 'selected' : ''}" data-change="yes"><strong>Yes</strong><small>I can influence some part of it</small></button>
          <button class="engine-choice ${state.changeable === 'no' ? 'selected' : ''}" data-change="no"><strong>No</strong><small>This fact is already here or outside my control</small></button>
        </div>
      </div>
    </div>` : ''}

    ${readyForResult ? renderRecommendation(family) : ''}`;

  bindEngineControls();
}

function renderRecommendation(family) {
  const ids = recommendation();
  const primary = ACTION_GUIDANCE[ids[0]];
  const secondary = ids[1] ? ACTION_GUIDANCE[ids[1]] : null;
  const oppositeNote = ids[0] === 'opposite' ? `<div class="opposite-specific"><strong>For ${state.emotion}:</strong><p>${family.opposite}</p></div>` : '';

  return `<div class="engine-result">
    <p class="eyebrow">DBT RECOMMENDATION</p>
    <div class="engine-result-main">
      <span class="result-icon">${primary.icon}</span>
      <div><h3>${primary.title}</h3><p>${primary.copy}</p></div>
    </div>
    <div class="result-why"><strong>Why this route</strong><p>${primary.why}</p></div>
    ${oppositeNote}
    <button class="engine-launch" data-launch-skill="${ids[0]}">Open the ${primary.title.replace(' first','').replace(' before analysis','')} walkthrough →</button>
    ${secondary ? `<button class="engine-secondary" data-launch-skill="${ids[1]}">Also useful: ${secondary.title}</button>` : ''}
    <button class="engine-reset" data-engine-reset>Run another emotion</button>
  </div>`;
}

function bindEngineControls() {
  const range = document.querySelector('.dbt-intensity');
  range?.addEventListener('input', (event) => {
    state.intensity = Number(event.target.value);
    renderEngine();
  });
  document.querySelectorAll('[data-urge]').forEach((button) => button.addEventListener('click', () => {
    state.urge = button.dataset.urge;
    state.fits = '';
    state.changeable = '';
    renderEngine();
  }));
  document.querySelectorAll('[data-fits]').forEach((button) => button.addEventListener('click', () => {
    state.fits = button.dataset.fits;
    state.changeable = '';
    renderEngine();
  }));
  document.querySelectorAll('[data-change]').forEach((button) => button.addEventListener('click', () => {
    state.changeable = button.dataset.change;
    renderEngine();
  }));
  document.querySelectorAll('[data-launch-skill]').forEach((button) => button.addEventListener('click', () => {
    const target = document.querySelector(`[data-skill="${button.dataset.launchSkill}"]`) || document.querySelector(`[data-open-skill="${button.dataset.launchSkill}"]`);
    target?.click();
  }));
  document.querySelector('[data-engine-reset]')?.addEventListener('click', () => {
    state = { family: '', emotion: '', intensity: 5, urge: '', fits: '', changeable: '' };
    document.querySelectorAll('.dbt-emotion-chip').forEach((item) => item.classList.remove('selected'));
    const root = document.getElementById('dbt-engine');
    if (root) root.outerHTML = renderShell();
    bindEmotionChips();
    document.querySelector('.dbt-wheel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function boot() {
  mountEngine();
  bindEmotionChips();
}

window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 40));
new MutationObserver(() => boot()).observe(document.documentElement, { childList: true, subtree: true });

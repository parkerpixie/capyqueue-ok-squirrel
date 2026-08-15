const WHEEL_DATA = {
  Angry: {
    icon: '🔥',
    branches: {
      Irritated: ['annoyed', 'agitated', 'impatient', 'frustrated'],
      Hurt: ['betrayed', 'disrespected', 'dismissed', 'resentful'],
      Hostile: ['furious', 'enraged', 'vengeful', 'contemptuous'],
      Jealous: ['envious', 'possessive', 'threatened', 'competitive']
    }
  },
  Afraid: {
    icon: '⚡',
    branches: {
      Anxious: ['uneasy', 'worried', 'nervous', 'overwhelmed'],
      Threatened: ['unsafe', 'vulnerable', 'exposed', 'on edge'],
      Panicked: ['terrified', 'frantic', 'trapped', 'dread'],
      Uncertain: ['confused', 'hesitant', 'suspicious', 'insecure']
    }
  },
  Sad: {
    icon: '🌧️',
    branches: {
      Lonely: ['isolated', 'abandoned', 'disconnected', 'unseen'],
      Hurt: ['rejected', 'heartbroken', 'wounded', 'disappointed'],
      Grief: ['bereft', 'mourning', 'aching', 'heavy'],
      Low: ['empty', 'hopeless', 'discouraged', 'defeated']
    }
  },
  'Shame / Guilt': {
    icon: '🫥',
    branches: {
      Ashamed: ['unworthy', 'defective', 'exposed', 'small'],
      Guilty: ['remorseful', 'regretful', 'responsible', 'sorry'],
      Embarrassed: ['awkward', 'self-conscious', 'humiliated', 'mortified'],
      SelfCritical: ['inadequate', 'failure', 'disappointed in myself', 'not enough']
    }
  },
  Joy: {
    icon: '✨',
    branches: {
      Content: ['peaceful', 'satisfied', 'comfortable', 'settled'],
      Connected: ['loved', 'seen', 'accepted', 'close'],
      Energized: ['excited', 'playful', 'inspired', 'alive'],
      Proud: ['capable', 'accomplished', 'confident', 'grateful']
    }
  },
  Disgust: {
    icon: '🌿',
    branches: {
      Repelled: ['grossed out', 'sickened', 'revolted', 'repulsed'],
      Violated: ['invaded', 'contaminated', 'crossed', 'unsafe'],
      Averse: ['put off', 'uncomfortable', 'resistant', 'avoidant'],
      Contempt: ['scornful', 'disdainful', 'judgmental', 'dismissive']
    }
  }
};

let wheelState = { family: '', branch: '' };

function titleCase(value) {
  return value === 'SelfCritical' ? 'Self-critical' : value;
}

function wheelMarkup() {
  return `<div class="feelings-wheel-shell" id="feelings-wheel-shell">
    <div class="feelings-wheel-copy">
      <p class="eyebrow">INTERACTIVE FEELINGS WHEEL</p>
      <h2>Start broad. Get precise. Then let DBT do something useful with it.</h2>
      <p>Tap the inner ring, choose the closer emotion in the middle ring, then select the word that actually lands.</p>
    </div>
    <div class="feelings-wheel" aria-label="Interactive feelings wheel">
      <div class="wheel-center"><span>What am I<br><strong>feeling?</strong></span></div>
      <div class="wheel-family-ring">
        ${Object.entries(WHEEL_DATA).map(([family, data], index) => `<button class="wheel-family wheel-pos-${index} ${wheelState.family === family ? 'selected' : ''}" data-wheel-family="${family}" type="button"><span>${data.icon}</span><strong>${family}</strong></button>`).join('')}
      </div>
    </div>
    <div class="wheel-drilldown" aria-live="polite">${renderDrilldown()}</div>
  </div>`;
}

function renderDrilldown() {
  if (!wheelState.family) {
    return `<div class="wheel-prompt"><strong>Pick the closest family.</strong><p>You are not signing a contract. Close enough gets us moving.</p></div>`;
  }
  const family = WHEEL_DATA[wheelState.family];
  const branchButtons = Object.keys(family.branches).map((branch) => `<button type="button" class="wheel-branch ${wheelState.branch === branch ? 'selected' : ''}" data-wheel-branch="${branch}">${titleCase(branch)}</button>`).join('');
  const precise = wheelState.branch ? family.branches[wheelState.branch] : [];
  return `<div class="wheel-selection-head"><button type="button" class="wheel-back" data-wheel-reset>← Start over</button><div><span>${family.icon}</span><strong>${wheelState.family}</strong></div></div>
    <div class="wheel-stage"><p class="eyebrow">MIDDLE RING</p><h3>What kind of ${wheelState.family.toLowerCase()}?</h3><div class="wheel-branches">${branchButtons}</div></div>
    ${wheelState.branch ? `<div class="wheel-stage wheel-stage-precise"><p class="eyebrow">OUTER RING</p><h3>Which word gets closest?</h3><details class="wheel-family-context" open><summary hidden><strong>${wheelState.family}</strong></summary><div class="wheel-precise">${precise.map((word) => `<button class="dbt-emotion-chip wheel-precise-chip" data-family="${wheelState.family}" data-wheel-precise="${word}" type="button">${word}</button>`).join('')}</div></details><p class="wheel-note">There is no prize for perfect labeling. The useful part is choosing a word precise enough to notice the action urge attached to it.</p></div>` : ''}`;
}

function bindWheel() {
  document.querySelectorAll('[data-wheel-family]').forEach((button) => {
    if (button.dataset.wheelBound) return;
    button.dataset.wheelBound = '1';
    button.addEventListener('click', () => {
      wheelState = { family: button.dataset.wheelFamily, branch: '' };
      rerenderWheel();
    });
  });
  document.querySelectorAll('[data-wheel-branch]').forEach((button) => {
    if (button.dataset.wheelBound) return;
    button.dataset.wheelBound = '1';
    button.addEventListener('click', () => {
      wheelState.branch = button.dataset.wheelBranch;
      rerenderWheel();
    });
  });
  document.querySelector('[data-wheel-reset]')?.addEventListener('click', () => {
    wheelState = { family: '', branch: '' };
    rerenderWheel();
  });
}

function rerenderWheel() {
  const root = document.getElementById('feelings-wheel-shell');
  if (!root) return;
  root.outerHTML = wheelMarkup();
  bindWheel();
  window.dispatchEvent(new CustomEvent('feelings-wheel-updated'));
}

function mountWheel() {
  const section = document.querySelector('.dbt-wheel');
  if (!section || document.getElementById('feelings-wheel-shell')) return;
  const oldMap = section.querySelector('.dbt-emotions');
  oldMap?.setAttribute('hidden', '');
  section.insertAdjacentHTML('beforeend', wheelMarkup());
  bindWheel();
  window.dispatchEvent(new CustomEvent('feelings-wheel-updated'));
}

function bootWheel() {
  mountWheel();
  bindWheel();
}

window.addEventListener('DOMContentLoaded', () => setTimeout(bootWheel, 60));
new MutationObserver(() => bootWheel()).observe(document.documentElement, { childList: true, subtree: true });

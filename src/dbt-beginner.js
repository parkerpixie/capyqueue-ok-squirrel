const BEGINNER_MODULES = [
  {
    id: 'mindfulness',
    icon: '🧘',
    number: '01',
    title: 'Mindfulness',
    plain: 'Notice what is happening before you react to it.',
    learn: 'DBT starts by helping you notice thoughts, emotions, urges and facts without immediately obeying them.',
    skills: ['Wise Mind'],
    launch: 'wise'
  },
  {
    id: 'distress',
    icon: '🛟',
    number: '02',
    title: 'Distress Tolerance',
    plain: 'Get through the moment without making it worse.',
    learn: 'These are crisis-survival skills. They are for high activation, painful realities and moments when solving the whole problem is not possible yet.',
    skills: ['STOP', 'TIPP', 'Radical Acceptance'],
    launch: 'stop'
  },
  {
    id: 'regulation',
    icon: '🌡️',
    number: '03',
    title: 'Emotion Regulation',
    plain: 'Understand the emotion, then decide whether to change it or listen to it.',
    learn: 'You will learn to check whether an emotion fits the facts, understand its action urge and choose a more effective response when needed.',
    skills: ['Check the Facts', 'Opposite Action'],
    launch: 'facts'
  },
  {
    id: 'people',
    icon: '💬',
    number: '04',
    title: 'Interpersonal Effectiveness',
    plain: 'Ask, say no, set boundaries and protect relationships without abandoning yourself.',
    learn: 'DBT separates getting what you need, keeping a relationship and keeping your self-respect so you can choose which goal matters most.',
    skills: ['DEAR MAN', 'GIVE', 'FAST'],
    launch: 'dearman'
  }
];

function beginnerMarkup() {
  return `<section class="dbt-beginner" data-dbt-beginner>
    <div class="dbt-beginner-intro">
      <div>
        <p class="eyebrow">DBT FOR BEGINNERS</p>
        <h2>You do not need to memorize DBT. Start with what you feel.</h2>
        <p>OK Squirl teaches the skill inside the moment you actually need it. Pick a feeling, notice the intensity and urge, check the facts, then let the app help you choose what comes next.</p>
      </div>
      <div class="dbt-beginner-route" aria-label="DBT beginner path">
        <span>FEEL</span><b>→</b><span>NOTICE</span><b>→</b><span>CHOOSE</span><b>→</b><span>PRACTICE</span>
      </div>
    </div>

    <div class="dbt-two-doors">
      <button type="button" data-dbt-jump="feelings">
        <span>🐿️</span>
        <div><small>I NEED HELP RIGHT NOW</small><strong>Start with my feeling</strong><p>Use the emotion-to-skill guide. No DBT vocabulary required.</p></div>
        <b>→</b>
      </button>
      <button type="button" data-dbt-jump="learn">
        <span>📚</span>
        <div><small>I WANT TO LEARN</small><strong>Teach me DBT from the beginning</strong><p>Explore the four DBT skill families in plain language.</p></div>
        <b>→</b>
      </button>
    </div>

    <div class="dbt-beginner-note">
      <strong>The one rule to remember:</strong>
      <p>The goal is not to stop having feelings. The goal is to understand what the feeling is signaling and gain enough choice to respond effectively.</p>
    </div>

    <div class="dbt-learning-path" data-dbt-learning-path>
      <div class="dbt-learning-head">
        <p class="eyebrow">THE FOUR PARTS OF DBT</p>
        <h2>Your beginner map</h2>
        <p>You can learn these in order, or jump straight to the family that matches what life is throwing at you.</p>
      </div>
      <div class="dbt-module-grid">
        ${BEGINNER_MODULES.map(module => `<article class="dbt-module-card" data-module="${module.id}">
          <div class="dbt-module-top"><span>${module.icon}</span><small>${module.number}</small></div>
          <h3>${module.title}</h3>
          <strong>${module.plain}</strong>
          <p>${module.learn}</p>
          <div class="dbt-module-skills">${module.skills.map(skill => `<span>${skill}</span>`).join('')}</div>
          <button type="button" data-beginner-skill="${module.launch}">Try a ${module.title} skill →</button>
        </article>`).join('')}
      </div>
    </div>

    <div class="dbt-how-choice">
      <p class="eyebrow">HOW OK SQUIRL CHOOSES A SKILL</p>
      <h2>Same feeling. Different answer.</h2>
      <p>DBT does not say “anger equals TIPP” or “sadness equals Opposite Action.” The recommendation changes based on intensity, action urge, whether the emotion fits the facts, and whether the situation can actually be changed.</p>
      <div class="dbt-example-grid">
        <div><b>🔥 9/10 + about to react</b><span>STOP / TIPP first</span></div>
        <div><b>🔎 Not sure the story is true</b><span>Check the Facts</span></div>
        <div><b>↗️ Emotion does not fit the facts</b><span>Opposite Action</span></div>
        <div><b>🌊 Painful fact cannot be changed</b><span>Radical Acceptance</span></div>
        <div><b>💬 A person needs to hear something</b><span>DEAR MAN / GIVE / FAST</span></div>
        <div><b>🦉 Emotion fits + action is possible</b><span>Wise Mind + effective action</span></div>
      </div>
    </div>
  </section>`;
}

function mountBeginner() {
  const lab = document.getElementById('dbt-lab');
  if (!lab || lab.querySelector('[data-dbt-beginner]')) return;

  const hero = lab.querySelector('.dbt-hero');
  if (!hero) return;
  hero.insertAdjacentHTML('afterend', beginnerMarkup());

  const tab = document.querySelector('[data-dbt-tab] small');
  if (tab) tab.textContent = 'Learn DBT';

  lab.querySelector('[data-dbt-jump="feelings"]')?.addEventListener('click', () => {
    lab.querySelector('.dbt-wheel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  lab.querySelector('[data-dbt-jump="learn"]')?.addEventListener('click', () => {
    lab.querySelector('[data-dbt-learning-path]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  lab.querySelectorAll('[data-beginner-skill]').forEach(button => {
    button.addEventListener('click', () => {
      const target = lab.querySelector(`[data-open-skill="${button.dataset.beginnerSkill}"]`) || lab.querySelector(`[data-skill="${button.dataset.beginnerSkill}"]`);
      target?.click();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => setTimeout(mountBeginner, 80));
new MutationObserver(() => mountBeginner()).observe(document.documentElement, { childList: true, subtree: true });

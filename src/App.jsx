import React, { useEffect, useMemo, useState } from 'react';
import {
  animalCards,
  bodySignals,
  needs,
  nextSteps,
  oracleCards,
  quotes,
  reminders,
  rescueStates
} from './content.js';

const TABS = {
  TODAY: 'today',
  RESCUE: 'rescue',
  GUIDE: 'guide'
};

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function dailyIndex(length, salt = '') {
  if (!length) return 0;
  return hashString(`${localDateKey()}-${salt}`) % length;
}

function dailyChoices(items, amount, salt) {
  const choices = [];
  let seed = hashString(`${localDateKey()}-${salt}`);
  while (choices.length < Math.min(amount, items.length)) {
    const index = seed % items.length;
    if (!choices.includes(items[index])) choices.push(items[index]);
    seed = Math.imul(seed + 1013904223, 1664525) >>> 0;
  }
  return choices;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning, squirrel.';
  if (hour < 18) return 'Good afternoon, squirrel.';
  return 'Good evening, squirrel.';
}

function imagePath(filename) {
  return encodeURI(`/${filename}`);
}

function useInstallPrompt() {
  const [installEvent, setInstallEvent] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsInstalled(Boolean(standalone));

    const capturePrompt = (event) => {
      event.preventDefault();
      setInstallEvent(event);
    };

    const markInstalled = () => {
      setIsInstalled(true);
      setInstallEvent(null);
    };

    window.addEventListener('beforeinstallprompt', capturePrompt);
    window.addEventListener('appinstalled', markInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', capturePrompt);
      window.removeEventListener('appinstalled', markInstalled);
    };
  }, []);

  const install = async () => {
    if (!installEvent) return false;
    installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
    return true;
  };

  return { canInstall: Boolean(installEvent), isInstalled, install };
}

function App() {
  const [activeTab, setActiveTab] = useState(TABS.TODAY);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showBeforeSend, setShowBeforeSend] = useState(false);
  const installPrompt = useInstallPrompt();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const goToRescue = () => setActiveTab(TABS.RESCUE);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <button className="brand-button" type="button" onClick={() => setActiveTab(TABS.TODAY)} aria-label="Go to Today">
          <img className="brand-icon" src="/icon.svg" alt="" />
          <span>
            <strong>OK, Squirrel!</strong>
            <small>by CapyQueue</small>
          </span>
        </button>
        <button className="header-help" type="button" onClick={() => setActiveTab(TABS.GUIDE)}>
          How it works
        </button>
      </header>

      <main id="main-content" className="main-content" tabIndex="-1">
        {activeTab === TABS.TODAY && (
          <TodayPage
            onRescue={goToRescue}
            onEmergency={() => setShowEmergency(true)}
          />
        )}
        {activeTab === TABS.RESCUE && (
          <RescuePage
            onEmergency={() => setShowEmergency(true)}
            onBeforeSend={() => setShowBeforeSend(true)}
          />
        )}
        {activeTab === TABS.GUIDE && <GuidePage installPrompt={installPrompt} />}
      </main>

      <BottomNavigation activeTab={activeTab} onChange={setActiveTab} />

      {showEmergency && <EmergencyReset onClose={() => setShowEmergency(false)} />}
      {showBeforeSend && <BeforeSend onClose={() => setShowBeforeSend(false)} />}
    </div>
  );
}

function TodayPage({ onRescue, onEmergency }) {
  const choices = useMemo(() => dailyChoices(oracleCards, 3, 'oracle'), []);
  const animal = animalCards[dailyIndex(animalCards.length, 'animal')];
  const quote = quotes[dailyIndex(quotes.length, 'quote')];
  const reminder = reminders[dailyIndex(reminders.length, 'reminder')];
  const storageKey = `ok-squirrel-oracle-${localDateKey()}`;
  const [selectedCardId, setSelectedCardId] = useState(() => localStorage.getItem(storageKey));
  const selectedCard = oracleCards.find((card) => card.id === selectedCardId);

  const chooseCard = (card) => {
    localStorage.setItem(storageKey, card.id);
    setSelectedCardId(card.id);
  };

  return (
    <div className="page today-page">
      <section className="welcome-section" aria-labelledby="today-title">
        <p className="eyebrow">TODAY</p>
        <h1 id="today-title">{getGreeting()}</h1>
        <p>What might help today?</p>
      </section>

      <section className="section-card oracle-section" aria-labelledby="oracle-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DAILY ORACLE</p>
            <h2 id="oracle-title">Pick a card to guide your day</h2>
          </div>
          <span className="daily-badge">Changes tomorrow</span>
        </div>

        {!selectedCard ? (
          <div className="oracle-deck" aria-label="Choose one of three oracle cards">
            {choices.map((card, index) => (
              <button
                className="oracle-card oracle-card-back"
                key={card.id}
                type="button"
                onClick={() => chooseCard(card)}
                aria-label={`Choose oracle card ${index + 1}`}
              >
                <span className="card-stars" aria-hidden="true">✦</span>
                <span className="card-question" aria-hidden="true">?</span>
                <span>Card {index + 1}</span>
              </button>
            ))}
          </div>
        ) : (
          <article className="oracle-reveal" aria-live="polite">
            <div className="oracle-symbol" aria-hidden="true">{selectedCard.symbol}</div>
            <div>
              <p className="eyebrow">YOUR CARD FOR TODAY</p>
              <h3>{selectedCard.title}</h3>
              <p className="oracle-message">{selectedCard.message}</p>
              <dl className="oracle-details">
                <div>
                  <dt>Consider</dt>
                  <dd>{selectedCard.reflection}</dd>
                </div>
                <div>
                  <dt>Try</dt>
                  <dd>{selectedCard.action}</dd>
                </div>
              </dl>
            </div>
          </article>
        )}
      </section>

      <section className="daily-section" aria-labelledby="queue-title">
        <div className="section-heading section-heading-outside">
          <div>
            <p className="eyebrow">TODAY’S QUEUE</p>
            <h2 id="queue-title">A little guidance, not a homework assignment</h2>
          </div>
          <span className="swipe-hint">Swipe or scroll →</span>
        </div>

        <div className="daily-carousel" aria-label="Daily guidance cards">
          <article className="daily-card animal-card">
            <div className="daily-card-label">ANIMAL GUIDE OF THE DAY</div>
            <img src={imagePath(animal.file)} alt={`${animal.name}: ${animal.affirmation}`} loading="eager" />
            <div className="daily-card-body">
              <h3>{animal.name}</h3>
              <p>{animal.affirmation}</p>
            </div>
          </article>

          <article className="daily-card quote-card">
            <div className="daily-card-label">QUOTE OF THE DAY</div>
            <blockquote>“{quote.text}”</blockquote>
            <cite>— {quote.author}</cite>
          </article>

          <article className="daily-card reminder-card">
            <div className="daily-card-label">A NOTE FROM THE QUEUE</div>
            <div className="reminder-squirrel" aria-hidden="true">🐿️</div>
            <p>{reminder}</p>
          </article>
        </div>
      </section>

      <section className="rescue-callout" aria-labelledby="rescue-callout-title">
        <p className="eyebrow">WHEN THE MOMENT GETS TOO BIG</p>
        <h2 id="rescue-callout-title">You do not have to solve your whole life right now.</h2>
        <p>Pause, understand what is happening, and find one helpful next step.</p>
        <div className="button-row stacked-mobile">
          <button className="button button-primary button-large" type="button" onClick={onRescue}>
            I need help right now
          </button>
          <button className="button button-secondary" type="button" onClick={onEmergency}>
            Skip straight to Emergency Reset
          </button>
        </div>
      </section>

      <p className="gentle-disclaimer">
        OK, Squirrel! offers educational grounding tools. It is not emergency care, diagnosis, or a replacement for professional support.
      </p>
    </div>
  );
}

function RescuePage({ onEmergency, onBeforeSend }) {
  const [step, setStep] = useState(0);
  const [selectedState, setSelectedState] = useState(null);
  const [signals, setSignals] = useState([]);
  const [selectedNeed, setSelectedNeed] = useState('');
  const [selectedNext, setSelectedNext] = useState('');
  const [outcome, setOutcome] = useState('');

  const restart = () => {
    setStep(0);
    setSelectedState(null);
    setSignals([]);
    setSelectedNeed('');
    setSelectedNext('');
    setOutcome('');
  };

  const toggleSignal = (signal) => {
    setSignals((current) => current.includes(signal) ? current.filter((item) => item !== signal) : [...current, signal]);
  };

  return (
    <div className="page rescue-page">
      <section className="rescue-header">
        <p className="eyebrow">RESCUE MODE</p>
        <h1>OK, squirrel. What kind of moment are we having?</h1>
        <p>You only need enough clarity for the next helpful thing.</p>
        <div className="button-row">
          <button className="button button-emergency" type="button" onClick={onEmergency}>Emergency Reset</button>
          <button className="button button-ghost" type="button" onClick={onBeforeSend}>Before You Send</button>
        </div>
      </section>

      <div className="progress-wrap" aria-label={`Rescue step ${Math.min(step + 1, 6)} of 6`}>
        <div className="progress-track">
          <span style={{ width: `${((Math.min(step, 5) + 1) / 6) * 100}%` }} />
        </div>
        <small>Step {Math.min(step + 1, 6)} of 6</small>
      </div>

      {step === 0 && (
        <section className="rescue-panel" aria-labelledby="state-title">
          <h2 id="state-title">Choose the closest match</h2>
          <p>It does not have to be perfect. “Close enough” is doing excellent work today.</p>
          <div className="choice-grid state-grid">
            {rescueStates.map((state) => (
              <button
                className="choice-card state-card"
                key={state.id}
                type="button"
                onClick={() => {
                  setSelectedState(state);
                  setStep(1);
                }}
              >
                <span className="choice-emoji" aria-hidden="true">{state.emoji}</span>
                <span>
                  <strong>{state.title}</strong>
                  <small>{state.description}</small>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 1 && (
        <section className="rescue-panel" aria-labelledby="body-title">
          <p className="eyebrow">YOU CHOSE: {selectedState?.title}</p>
          <h2 id="body-title">What is your body doing?</h2>
          <p>Select everything that fits, or skip this if your brain has filed a formal complaint.</p>
          <div className="chip-grid">
            {bodySignals.map((signal) => (
              <button
                className={`chip ${signals.includes(signal) ? 'selected' : ''}`}
                key={signal}
                type="button"
                aria-pressed={signals.includes(signal)}
                onClick={() => toggleSignal(signal)}
              >
                {signal}
              </button>
            ))}
          </div>
          <div className="panel-actions">
            <button className="button button-ghost" type="button" onClick={() => setStep(0)}>Back</button>
            <button className="button button-primary" type="button" onClick={() => setStep(2)}>Show me one thing to try</button>
          </div>
        </section>
      )}

      {step === 2 && selectedState && (
        <section className="rescue-panel tool-panel" aria-labelledby="tool-title">
          <div className="tool-icon" aria-hidden="true">{selectedState.emoji}</div>
          <p className="eyebrow">ONE SMALL RESCUE ACTION</p>
          <h2 id="tool-title">{selectedState.tool.title}</h2>
          <p className="tool-instruction">{selectedState.tool.instruction}</p>
          <div className="why-box">
            <strong>Why this might help</strong>
            <p>{selectedState.tool.why}</p>
          </div>
          <p className="permission-note">You do not have to do this perfectly. Trying the tiniest version counts.</p>
          <div className="panel-actions">
            <button className="button button-ghost" type="button" onClick={() => setStep(1)}>Back</button>
            <button className="button button-primary" type="button" onClick={() => setStep(3)}>I tried it, or I’m ready to continue</button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="rescue-panel" aria-labelledby="need-title">
          <h2 id="need-title">What do you need next?</h2>
          <p>Choose the need that feels most useful, not the one that sounds most impressive.</p>
          <div className="choice-grid compact-grid">
            {needs.map((need) => (
              <button
                className={`choice-card compact-choice ${selectedNeed === need ? 'selected' : ''}`}
                key={need}
                type="button"
                aria-pressed={selectedNeed === need}
                onClick={() => setSelectedNeed(need)}
              >
                {need}
              </button>
            ))}
          </div>
          <div className="panel-actions">
            <button className="button button-ghost" type="button" onClick={() => setStep(2)}>Back</button>
            <button className="button button-primary" type="button" disabled={!selectedNeed} onClick={() => setStep(4)}>Choose my next step</button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="rescue-panel" aria-labelledby="next-title">
          <p className="eyebrow">YOU NEED: {selectedNeed}</p>
          <h2 id="next-title">What is one helpful next step?</h2>
          <div className="choice-grid next-grid">
            {nextSteps.map((nextStep) => (
              <button
                className={`choice-card next-choice ${selectedNext === nextStep ? 'selected' : ''}`}
                key={nextStep}
                type="button"
                aria-pressed={selectedNext === nextStep}
                onClick={() => setSelectedNext(nextStep)}
              >
                {nextStep}
              </button>
            ))}
          </div>
          <div className="panel-actions">
            <button className="button button-ghost" type="button" onClick={() => setStep(3)}>Back</button>
            <button className="button button-primary" type="button" disabled={!selectedNext} onClick={() => setStep(5)}>That is my next step</button>
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="rescue-panel finish-panel" aria-labelledby="finish-title">
          <div className="finish-icon" aria-hidden="true">🌿</div>
          <p className="eyebrow">YOUR PLAN FOR RIGHT NOW</p>
          <h2 id="finish-title">You found the next helpful thing.</h2>
          <dl className="summary-list">
            <div><dt>Moment</dt><dd>{selectedState?.title}</dd></div>
            {signals.length > 0 && <div><dt>Body</dt><dd>{signals.join(', ')}</dd></div>}
            <div><dt>Need</dt><dd>{selectedNeed}</dd></div>
            <div><dt>Next step</dt><dd>{selectedNext}</dd></div>
          </dl>

          {!outcome && (
            <div className="outcome-box">
              <h3>Did anything shift, even five percent?</h3>
              <div className="button-row stacked-mobile">
                <button className="button button-primary" type="button" onClick={() => setOutcome('yes')}>Yes, I know what to do next</button>
                <button className="button button-secondary" type="button" onClick={() => setOutcome('little')}>A little, give me the tool again</button>
                <button className="button button-ghost" type="button" onClick={() => setOutcome('no')}>No, I still need help</button>
              </div>
            </div>
          )}

          {outcome === 'yes' && <p className="outcome-message" role="status">That is enough. Go do only the next thing. The rest can wait outside.</p>}
          {outcome === 'little' && (
            <div className="outcome-message" role="status">
              <p>Small shifts count. You can repeat the same tool without graduating to a harder one.</p>
              <button className="button button-secondary" type="button" onClick={() => { setOutcome(''); setStep(2); }}>Show the tool again</button>
            </div>
          )}
          {outcome === 'no' && (
            <div className="outcome-message" role="status">
              <p>You did not fail the tool. This moment may need more support than one screen can provide.</p>
              <button className="button button-emergency" type="button" onClick={onEmergency}>Open Emergency Reset</button>
            </div>
          )}

          <button className="text-button" type="button" onClick={restart}>Start over</button>
        </section>
      )}
    </div>
  );
}

function GuidePage({ installPrompt }) {
  const userAgent = navigator.userAgent.toLowerCase();
  const likelyIOS = /iphone|ipad|ipod/.test(userAgent);
  const likelyAndroid = /android/.test(userAgent);
  const likelyMac = /macintosh|mac os x/.test(userAgent);
  const likelyWindows = /windows/.test(userAgent);

  let deviceHint = 'Choose your device below.';
  if (likelyIOS) deviceHint = 'You appear to be using an iPhone or iPad.';
  else if (likelyAndroid) deviceHint = 'You appear to be using Android.';
  else if (likelyMac) deviceHint = 'You appear to be using a Mac.';
  else if (likelyWindows) deviceHint = 'You appear to be using Windows.';

  return (
    <div className="page guide-page">
      <section className="guide-intro">
        <p className="eyebrow">SUPER-DUPER BASIC GUIDE</p>
        <h1>How to use OK, Squirrel!</h1>
        <p>No manual, emotional scavenger hunt, or fourteen-part onboarding quest required.</p>
      </section>

      <section className="section-card">
        <h2>The entire app in five steps</h2>
        <ol className="how-list">
          <li><span>1</span><div><strong>Visit Today</strong><p>Choose an oracle card and see your daily animal, quote, and reminder.</p></div></li>
          <li><span>2</span><div><strong>Tap Rescue</strong><p>Use it when a moment feels too big, loud, frozen, reactive, or confusing.</p></div></li>
          <li><span>3</span><div><strong>Answer only what you can</strong><p>“Close enough” answers are welcome. Skipping is allowed.</p></div></li>
          <li><span>4</span><div><strong>Try one small action</strong><p>The app offers one tool instead of dumping an entire coping-skills warehouse on you.</p></div></li>
          <li><span>5</span><div><strong>Stop when you know the next step</strong><p>You do not need to become completely calm or solve the whole underlying problem.</p></div></li>
        </ol>
        <div className="core-promise">You are only looking for the next helpful thing.</div>
      </section>

      <section className="section-card install-section" aria-labelledby="install-title">
        <p className="eyebrow">ADD IT LIKE AN APP</p>
        <h2 id="install-title">Install OK, Squirrel! on your device</h2>
        <p>{deviceHint}</p>

        {installPrompt.isInstalled && <div className="installed-note">✓ This app appears to be installed already.</div>}
        {installPrompt.canInstall && !installPrompt.isInstalled && (
          <button className="button button-primary button-large" type="button" onClick={installPrompt.install}>
            Install OK, Squirrel!
          </button>
        )}

        <div className="install-accordions">
          <details open={likelyIOS}>
            <summary>iPhone or iPad</summary>
            <ol>
              <li>Open this site in <strong>Safari</strong>.</li>
              <li>Tap the <strong>Share</strong> button.</li>
              <li>Tap <strong>Add to Home Screen</strong>.</li>
              <li>Turn on <strong>Open as Web App</strong> if it appears.</li>
              <li>Tap <strong>Add</strong>.</li>
            </ol>
          </details>

          <details open={likelyAndroid}>
            <summary>Android phone or tablet</summary>
            <ol>
              <li>Open this site in <strong>Chrome</strong>.</li>
              <li>Tap the three-dot menu.</li>
              <li>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
              <li>Follow the prompts.</li>
            </ol>
          </details>

          <details open={likelyWindows}>
            <summary>Windows computer</summary>
            <ol>
              <li>Open this site in <strong>Edge</strong> or <strong>Chrome</strong>.</li>
              <li>Look for the install icon near the address bar, or open the browser menu.</li>
              <li>Choose <strong>Apps → Install this site as an app</strong> in Edge, or <strong>Install page as app</strong> in Chrome.</li>
              <li>Pin it to Start or the taskbar if useful.</li>
            </ol>
          </details>

          <details open={likelyMac}>
            <summary>Mac</summary>
            <ol>
              <li>In Safari, open the <strong>Share</strong> menu.</li>
              <li>Choose <strong>Add to Dock</strong>.</li>
              <li>Or use Chrome and choose <strong>Install page as app</strong> from its menu.</li>
            </ol>
          </details>

          <details>
            <summary>Chromebook or Linux</summary>
            <ol>
              <li>Open the site in Chrome or Edge.</li>
              <li>Choose the install icon near the address bar or <strong>Install page as app</strong> from the menu.</li>
            </ol>
          </details>
        </div>
      </section>

      <section className="section-card two-column-info">
        <div>
          <p className="eyebrow">WHAT IT DOES</p>
          <h2>A small tool for the current moment</h2>
          <p>OK, Squirrel! offers daily reflection, grounding, and simple decision support when emotions or nervous-system reactions become overwhelming.</p>
        </div>
        <div>
          <p className="eyebrow">WHAT IT DOES NOT DO</p>
          <h2>No diagnosis. No giant suitcase.</h2>
          <p>It does not diagnose conditions, replace therapy, provide emergency services, or require you to unpack your entire emotional history.</p>
        </div>
      </section>

      <section className="section-card privacy-card">
        <p className="eyebrow">PRIVACY FOR VERSION ONE</p>
        <h2>Your daily card stays on your device</h2>
        <p>The current version does not require an account. Your selected oracle card is saved in your browser for the day. Rescue answers are not sent anywhere or permanently stored.</p>
      </section>
    </div>
  );
}

function EmergencyReset({ onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="emergency-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close Emergency Reset">×</button>
        <p className="eyebrow">EMERGENCY RESET</p>
        <h2 id="emergency-title">Nothing needs to be solved in the next sixty seconds.</h2>
        <div className="reset-steps">
          <div><span>1</span><p><strong>Find pressure.</strong> Put both feet on the floor or press your back into what is supporting you.</p></div>
          <div><span>2</span><p><strong>Make the exhale longer.</strong> Breathe out slowly. Do not worry about taking a magnificent wellness breath.</p></div>
          <div><span>3</span><p><strong>Name what is true.</strong> “I am having a strong reaction. I do not have to act on it yet.”</p></div>
        </div>
        <div className="reset-callout">Do not send it, quit it, confess it, purchase it, or solve it until the intensity drops.</div>
        <button className="button button-primary button-large full-width" type="button" onClick={onClose}>I can take the next minute from here</button>
      </section>
    </div>
  );
}

function BeforeSend({ onClose }) {
  const [checked, setChecked] = useState([]);
  const checks = [
    'I have read it once for facts instead of emotional voltage.',
    'I would be comfortable with this being forwarded or screenshotted.',
    'The response needs to happen now, not simply while I am activated.',
    'It clearly asks for what I need or communicates the decision.'
  ];

  const toggle = (item) => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="send-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close Before You Send">×</button>
        <p className="eyebrow">BEFORE YOU SEND</p>
        <h2 id="send-title">OK, squirrel. Does this need to leave the nest right now?</h2>
        <div className="check-list">
          {checks.map((item) => (
            <label key={item}>
              <input type="checkbox" checked={checked.includes(item)} onChange={() => toggle(item)} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <div className="send-options">
          <button className="button button-secondary" type="button" onClick={onClose}>Save it and wait</button>
          <button className="button button-primary" type="button" onClick={onClose} disabled={checked.length < 3}>I checked. I’m choosing to send.</button>
        </div>
        <p className="modal-footnote">The app cannot stop you. It can merely stand nearby with one raised squirrel eyebrow.</p>
      </section>
    </div>
  );
}

function BottomNavigation({ activeTab, onChange }) {
  const items = [
    { id: TABS.TODAY, label: 'Today', icon: '☀️' },
    { id: TABS.RESCUE, label: 'Rescue', icon: '🛟', primary: true },
    { id: TABS.GUIDE, label: 'Guide', icon: '🧭' }
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map((item) => (
        <button
          className={`${item.primary ? 'nav-rescue' : ''} ${activeTab === item.id ? 'active' : ''}`}
          key={item.id}
          type="button"
          aria-current={activeTab === item.id ? 'page' : undefined}
          onClick={() => onChange(item.id)}
        >
          <span aria-hidden="true">{item.icon}</span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  );
}

export default App;

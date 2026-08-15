function finalizeFeelingsView() {
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
}

function finalizeFeelingsExit() {
  const page = document.getElementById('feelings-page');
  if (!page) return;
  page.hidden = true;
  page.style.display = 'none';
  document.querySelector('[data-feelings-tab]')?.classList.remove('active');
}

function bindNavOrderFix() {
  const nav = document.querySelector('.bottom-nav');
  const feelingsTab = nav?.querySelector('[data-feelings-tab]');
  if (!nav || !feelingsTab) return;

  if (!feelingsTab.dataset.finalizeBound) {
    feelingsTab.dataset.finalizeBound = '1';
    feelingsTab.addEventListener('click', () => window.setTimeout(finalizeFeelingsView, 0));
  }

  nav.querySelectorAll('button:not([data-feelings-tab])').forEach((button) => {
    if (button.dataset.finalizeFeelingsExitBound) return;
    button.dataset.finalizeFeelingsExitBound = '1';
    button.addEventListener('click', () => window.setTimeout(finalizeFeelingsExit, 0));
  });
}

function bindDragClickFix() {
  const wheel = document.getElementById('feelingsWheel');
  if (!wheel || wheel.dataset.dragClickFixBound) return;
  wheel.dataset.dragClickFixBound = '1';
  let moved = false;

  wheel.addEventListener('pointerdown', () => { moved = false; });
  wheel.addEventListener('pointermove', () => { moved = true; });
  wheel.addEventListener('pointerup', (event) => {
    if (!moved || event.target.closest('[data-wheel-family]')) return;
    window.setTimeout(() => {
      const firstFamily = wheel.querySelector('[data-wheel-family]');
      firstFamily?.click();
    }, 80);
  });
}

function applyRuntimeFixes() {
  bindNavOrderFix();
  bindDragClickFix();
}

let runtimeFixQueued = false;
function queueRuntimeFixes() {
  if (runtimeFixQueued) return;
  runtimeFixQueued = true;
  requestAnimationFrame(() => {
    runtimeFixQueued = false;
    applyRuntimeFixes();
  });
}

window.addEventListener('DOMContentLoaded', queueRuntimeFixes);
window.addEventListener('load', queueRuntimeFixes);
new MutationObserver(queueRuntimeFixes).observe(document.documentElement, { childList: true, subtree: true });

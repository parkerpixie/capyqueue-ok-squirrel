const BRAND_ROOT = '/public/assets/ok-squirl';
const BLONDIE_ROOT = '/assets/ok-squirl';
const ASSET_VERSION = '20260803-3';

const brandAsset = (name) => `${BRAND_ROOT}/${name}?v=${ASSET_VERSION}`;
const blondieAsset = (name) => `${BLONDIE_ROOT}/${name}?v=${ASSET_VERSION}`;

function setImageSource(image, source, alt, fallback) {
  if (!image) return;

  if (image.getAttribute('src') !== source) {
    image.setAttribute('src', source);
  }

  if (typeof alt === 'string') image.setAttribute('alt', alt);

  if (!image.dataset.assetFallbackBound) {
    image.dataset.assetFallbackBound = 'true';
    image.addEventListener('error', () => {
      if (!fallback || image.getAttribute('src') === fallback) return;
      image.setAttribute('src', fallback);
    });
  }
}

function fixBrandAssets() {
  setImageSource(
    document.querySelector('.brand-icon'),
    brandAsset('ok-squirl-mark-icon-only.png'),
    '',
    '/icon.svg'
  );

  setImageSource(
    document.querySelector('.brand-footer img'),
    brandAsset('ok-squirl-logo-horizontal.png'),
    'OK Squirl. A calm corner for squirrelly moments.',
    brandAsset('ok-squirl-mark-icon-only.png')
  );

  const navFiles = {
    Today: 'ok-squirl-icon-home.svg',
    Rescue: 'ok-squirl-icon-breathe.svg',
    Guide: 'ok-squirl-icon-journal.svg'
  };

  document.querySelectorAll('.bottom-nav button').forEach((button) => {
    const label = button.querySelector('small')?.textContent?.trim();
    const image = button.querySelector('span img');
    if (image && navFiles[label]) {
      setImageSource(image, brandAsset(navFiles[label]), '', '/icon.svg');
    }
  });

  document.querySelectorAll('.tool-icon img').forEach((image) => {
    setImageSource(image, brandAsset('ok-squirl-icon-breathe.svg'), '', '/icon.svg');
  });

  document.querySelectorAll('.finish-icon img').forEach((image) => {
    setImageSource(image, brandAsset('ok-squirl-icon-check-in.svg'), '', '/icon.svg');
  });
}

function fixBlondieAssets() {
  const fallback = brandAsset('ok-squirl-mark-icon-only.png');

  setImageSource(
    document.querySelector('.blondie-intro-art img'),
    blondieAsset('01-blondie-wave.png'),
    'Blondie, the friendly blonde squirrel guide, waving hello',
    fallback
  );

  setImageSource(
    document.querySelector('.blondie-breathe-button img'),
    blondieAsset('02-blondie-meditate.png'),
    'Blondie sitting calmly with her eyes closed',
    fallback
  );

  setImageSource(
    document.querySelector('.reminder-squirrel img'),
    blondieAsset('04-blondie-avatar.png'),
    'Blondie the squirrel',
    fallback
  );

  setImageSource(
    document.querySelector('.blondie-guide-art'),
    blondieAsset('03-blondie-thoughtful.png'),
    'Blondie listening thoughtfully',
    fallback
  );
}

function applyAssetFixes() {
  fixBrandAssets();
  fixBlondieAssets();
}

let assetFixQueued = false;
function queueAssetFixes() {
  if (assetFixQueued) return;
  assetFixQueued = true;
  window.requestAnimationFrame(() => {
    assetFixQueued = false;
    applyAssetFixes();
  });
}

window.addEventListener('DOMContentLoaded', queueAssetFixes);
window.addEventListener('load', queueAssetFixes);
new MutationObserver(queueAssetFixes).observe(document.documentElement, {
  childList: true,
  subtree: true
});

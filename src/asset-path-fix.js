const LEGACY_ASSET_ROOT = '/public/assets/ok-squirl/';
const PUBLIC_ASSET_ROOT = '/assets/ok-squirl/';

function normalizeAssetPath(value) {
  if (typeof value !== 'string' || !value.includes(LEGACY_ASSET_ROOT)) return value;
  return value.replaceAll(LEGACY_ASSET_ROOT, PUBLIC_ASSET_ROOT);
}

function fixElementAssetPaths(element) {
  if (!(element instanceof Element)) return;

  ['src', 'href', 'poster', 'content'].forEach((attribute) => {
    const current = element.getAttribute(attribute);
    const corrected = normalizeAssetPath(current);
    if (corrected !== current) element.setAttribute(attribute, corrected);
  });

  const srcset = element.getAttribute('srcset');
  const correctedSrcset = normalizeAssetPath(srcset);
  if (correctedSrcset !== srcset) element.setAttribute('srcset', correctedSrcset);

  const inlineStyle = element.getAttribute('style');
  const correctedStyle = normalizeAssetPath(inlineStyle);
  if (correctedStyle !== inlineStyle) element.setAttribute('style', correctedStyle);
}

function fixAssetTree(root = document) {
  if (root instanceof Element) fixElementAssetPaths(root);
  root.querySelectorAll?.('[src], [href], [poster], [content], [srcset], [style]').forEach(fixElementAssetPaths);
}

fixAssetTree();

new MutationObserver((records) => {
  records.forEach((record) => {
    if (record.type === 'attributes') {
      fixElementAssetPaths(record.target);
      return;
    }

    record.addedNodes.forEach((node) => {
      if (node instanceof Element) fixAssetTree(node);
    });
  });
}).observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src', 'href', 'poster', 'content', 'srcset', 'style']
});

window.addEventListener('DOMContentLoaded', () => fixAssetTree());
window.addEventListener('load', () => fixAssetTree());

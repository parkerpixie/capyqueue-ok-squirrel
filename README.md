# OK, Squirrel!

**Help for the moment you’re having.**

A mobile-first, DBT-inspired daily grounding and emotional rescue app by **CapyQueue**.

> **CapyQueue**  
> Systems for Humans

## What is included

### Today

- Pick one of three daily oracle cards
- Animal Guide of the Day using the artwork in `public/`
- Quote of the Day
- Daily CapyQueue reminder
- Fast access to Rescue and Emergency Reset

### Rescue

- Choose the closest nervous-system state
- Notice body signals
- Receive one small regulation action
- Identify the most useful current need
- Choose one helpful next step
- Check whether anything shifted, even five percent
- Emergency Reset
- Before You Send pause checklist

### Guide

- Super-basic instructions
- Device-aware installation help
- iPhone/iPad, Android, Windows, Mac, Chromebook, and Linux instructions
- Plain-language privacy and scope notes

## Add or edit content

All editable text content lives in:

```text
src/content.js
```

### Add a quote

Find the `quotes` array and add an object:

```js
{
  text: 'Your verified quote goes here.',
  author: 'Author Name'
}
```

Please verify the exact wording and attribution before publishing a quote.

### Add an oracle card

Add an object to the `oracleCards` array:

```js
{
  id: 'unique-short-name',
  title: 'Card Title',
  symbol: '🌿',
  message: 'The central message.',
  reflection: 'One question to consider?',
  action: 'One small action for today.'
}
```

### Add an animal card

1. Upload the image into `public/`.
2. Add an object to the `animalCards` array:

```js
{
  name: 'Animal Name',
  affirmation: 'The card affirmation',
  file: 'Exact uploaded filename.png'
}
```

The exact filename matters, including spaces, punctuation, and capitalization.

## Local development

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Netlify

The repository includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`
- Node 20
- Single-page app routing
- Basic security headers

Every push to the connected production branch triggers a new Netlify deploy.

## PWA and offline behavior

The app includes a web app manifest and service worker. After the first successful visit, the app shell and previously opened assets can remain available during an unreliable connection.

## Important scope note

OK, Squirrel! provides educational reflection and grounding tools. It does not diagnose conditions, replace therapy, or provide emergency services.

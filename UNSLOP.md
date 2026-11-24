# Unslop pass (November 24, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0.

## Audit

Light slop: a designed store with its own palette (paper, ink, terracotta, moss), Fraunces and Manrope, and drawn product art. Signs found:

- Uppercase tracked eyebrows (`.eyebrow` in `app/globals.css`; home, shop, about, contact labels, 404), the product badge on the product page and footer column headings
- Italic accent-colored emphasis in headlines ("slowly" on home, "keep" on about)
- A pale decorative circle behind every product drawing (`components/ProductArt.tsx`) and a pale arch in the studio illustration
- Four equal colored category tiles with a black "+" disc that rotates on hover and a hover lift (home)
- `hover:scale` on product card art, catch-all `transition` on colorway buttons
- Everything a pill: buttons, filter chips, size options, quantity steppers, bag button, badges
- 600 weights on buttons, value titles, team names and the logo; tracked announcement bar
- Mixed big radii (28px, 32px, 40px) and a quarter-circle corner cut into the candle tile
- Trailing periods on headlines and empty-state titles; wordy search placeholder ("Search mugs, linen, fig...")

## Direction

- Product: a small studio selling its own stoneware, linen and candles online
- Character: patient, tactile, plainspoken
- World: a converted boat shed with a wheel and a kiln; raw clay, glaze tests, washed linen
- Moments: the drawn objects on their own tinted grounds (hero trio and product cards)
- Signature: glaze swatches; small round color chips under products, now also marking each category

## Changes

- Spacing and details: cards 16px, panels 24px, buttons and controls 10px, tags 6px; only the vase's arch keeps a full curve
- Color: decorative circles removed from every product drawing and the studio scene; accent kept for eyebrows, figures and the logo dot
- Copy: trailing periods dropped on headlines and titles; search placeholder is "Search"
- Type: sentence-case eyebrows and headings, no italic emphasis, 500 weights, no tracking on small text
- Layout: categories became a quiet ruled row (swatch, name, blurb) instead of four colored tiles
- Motion: no zoom on product art, no lift or rotating "+"; named transitions on one easing curve

screenshot-2: Product page (Morning Mug)
screenshot-3: Shop page with category filters and search

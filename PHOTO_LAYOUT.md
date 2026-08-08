# The Corner Salamanca — Photography Layout

## 1. Assignment policy

This plan uses exactly the 15 photographs approved in `data/media.json`. No unselected image is introduced, and no selected image is repeated. A photograph receives one exact location so the page feels curated rather than assembled from a stock gallery.

All paths point to the optimized WebP derivative. Original JPG files remain archival sources.

## 2. Exact placement map

| Order | Image | Exact location | Presentation | Reason |
| --- | --- | --- | --- | --- |
| 1 | `dsc-5720` | Hero, sole background image | Full viewport; portrait focal crop on mobile, wider center crop on desktop | The table-level story combines brunch, coffee and hospitality in one frame. Its overhead depth supports centered typography while immediately communicating the complete offer. |
| 2 | `dsc-5790` | Our Philosophy, primary brand image | Tall portrait, right side on desktop; full-width after copy on mobile | The embroidered uniform expresses identity through material and craft without repeating the storefront sign or turning the section into product advertising. |
| 3 | `dsc-5794` | Our Philosophy, first process detail | Small 4:3 crop below the primary brand image | Hands placing fruit show preparation and care. Its dark background creates a quiet transition from brand to process. |
| 4 | `dsc-5876` | Our Philosophy, second process detail | Small 4:3 companion crop, vertically offset | The completed toast preparation closes the two-frame craft sequence and connects philosophy to the food chapters that follow. |
| 5 | `dsc-5692` | Brunch, dominant photograph | Large portrait-to-4:5 editorial frame spanning eight desktop columns | The full table scene communicates abundance without clutter and includes coffee, juice and a composed savory plate. It is the strongest complete brunch narrative after the hero. |
| 6 | `dsc-5666` | Brunch, supporting photograph | Smaller portrait frame aligned to the lower right of the main image | Its cleaner salmon presentation provides detail and negative space, balancing the broader table scene without showing a competing dish at equal scale. |
| 7 | `dsc-5629` | Specialty Coffee, primary craft image | Tall portrait on the left; near-square crop only at wide desktop | The visible pour and latte art show human skill. It communicates specialty coffee more credibly than a static cup alone. |
| 8 | `dsc-5635` | Specialty Coffee, supporting lifestyle image | Small landscape crop beneath or beside the copy | Coffee paired with cake introduces warmth and time spent at the café. It supports atmosphere while remaining subordinate to the craft image. |
| 9 | `dsc-5683` | Summer Drinks, chapter image | Wide cinematic crop, nearly full content width | The sunlit iced coffee provides brightness, motion and seasonal energy. A single image keeps this short chapter distinct from the more layered brunch and coffee layouts. |
| 10 | `dsc-5766` | Signature Toasts, sole product image | Tall 4:5 frame spanning seven desktop columns | The salmon toast has a clean plate edge, controlled color and enough surrounding space to feel composed rather than catalog-like. One hero product avoids duplicate toast imagery. |
| 11 | `dsc-5704` | Gallery, first and largest image | Portrait, five desktop columns; first on mobile | The overhead brunch plate adds a graphic composition not used elsewhere and opens the gallery with strong color and detail. |
| 12 | `dsc-5782` | Gallery, second image | Compact landscape/detail crop, three desktop columns | The almond croissant adds texture and a bakery subject, broadening the experience beyond plated brunch and drinks. |
| 13 | `dsc-5814` | Gallery, third image | Medium landscape/detail crop, four desktop columns and lower offset | The preparation scene introduces a darker, tactile counterpoint and gives the gallery a behind-the-scenes ending. |
| 14 | `brand-storefront-sign` | Visit Us, location photograph | Uncropped 2:3 portrait where possible; beside map on desktop | It is the only selected exterior identifier and gives visitors a real-world recognition cue. It must be described as signage, never treated as a clean logo asset. |
| 15 | `dsc-5752` | Integrated Menu, contextual introduction | Portrait crop beside the menu introduction; above categories on mobile | The visible printed menu within a table setting connects the existing café experience to the digital menu without using a PDF or assigning imagery to every item. |

## 3. Source paths

| Image | Optimized source |
| --- | --- |
| `dsc-5720` | `/assets/images/optimized/brunch/dsc-5720.webp` |
| `dsc-5790` | `/assets/images/optimized/brand/dsc-5790.webp` |
| `dsc-5794` | `/assets/images/optimized/process/dsc-5794.webp` |
| `dsc-5876` | `/assets/images/optimized/process/dsc-5876.webp` |
| `dsc-5692` | `/assets/images/optimized/brunch/dsc-5692.webp` |
| `dsc-5666` | `/assets/images/optimized/brunch/dsc-5666.webp` |
| `dsc-5629` | `/assets/images/optimized/coffee/dsc-5629.webp` |
| `dsc-5635` | `/assets/images/optimized/coffee/dsc-5635.webp` |
| `dsc-5683` | `/assets/images/optimized/coffee/dsc-5683.webp` |
| `dsc-5766` | `/assets/images/optimized/toasts/dsc-5766.webp` |
| `dsc-5704` | `/assets/images/optimized/brunch/dsc-5704.webp` |
| `dsc-5782` | `/assets/images/optimized/bakery/dsc-5782.webp` |
| `dsc-5814` | `/assets/images/optimized/process/dsc-5814.webp` |
| `brand-storefront-sign` | `/assets/images/optimized/brand/brand-storefront-sign.webp` |
| `dsc-5752` | `/assets/images/optimized/brunch/dsc-5752.webp` |

## 4. Crop and loading rules

- The hero is the only eagerly loaded photograph and receives high fetch priority.
- Every later photograph is lazy loaded and reserves its final aspect ratio before download.
- Faces and hands are not cut at joints; plates retain enough rim to read as intentional compositions.
- Food is never stretched, rotated or retouched into a different color character.
- Mobile crops prioritize the principal dish or action; desktop crops reveal more table context.
- The storefront sign keeps its full sign and enough stone surround to remain recognizable.
- Gallery crops may vary in ratio, but their focal subject must remain unchanged.
- Responsive derivatives should be generated during implementation from the approved originals rather than enlarging the current WebP files.

## 5. Whitespace around photography

- Hero: no external whitespace; contrast comes from the overlay and centered content safe area.
- Philosophy: the three images sit inside generous cream space and never overlap the heading.
- Brunch and coffee: unequal image sizes are separated by at least one grid gutter and a vertical offset.
- Summer drinks: the wide image receives substantial space above and a compact text block below.
- Toasts: the image is isolated against paper or cream so its color remains the focal point.
- Gallery: gaps are deliberately uneven but always derived from the spacing system.
- Visit and menu: images support practical content and do not exceed its visual importance.

## 6. Alternative-text intent

Alternative text will describe useful visual content rather than repeat adjacent headings. Process images should identify the action; food images should identify the principal dish only when that information is not already supplied by nearby copy. The hero requires concise descriptive alternative text or may be marked decorative if the same proposition is fully communicated in visible text. Final wording depends on approved menu names and brand language.

## 7. Explicit exclusions

The remaining 76 archived images are not approved for the first implementation. They may be reconsidered later for seasonal updates, but they must not be added merely to fill space. No photography is assigned to individual menu rows, the navbar, social links, map, or footer.


# The Corner Salamanca — Design System

## 1. Design intent

The visual system should feel quiet, tactile and precise. Its luxury comes from proportion, restraint and photography rather than ornament. The interface must never compete with the food, coffee or physical space.

Three principles govern every decision:

1. **Editorial, not promotional.** Large type, deliberate image crops and controlled asymmetry replace banners, badges and sales language.
2. **Warm, not rustic.** Cream, warm black and wood-derived neutrals create hospitality without farmhouse clichés.
3. **Minimal, not empty.** Whitespace establishes hierarchy and anticipation; every visible element must have a reason to exist.

## 2. Typography

Only Google Fonts will be used.

### Font families

- **Display and headings — Cormorant Garamond:** weights 500 and 600. Its high contrast and human shapes provide editorial character without feeling ceremonial. Use it for expressive copy, never for controls or long paragraphs.
- **Body and interface — Manrope:** weights 400, 500 and 600. Its open forms remain clear at small mobile sizes and balance the display face with contemporary restraint.
- **Fallbacks:** Georgia for display; Arial and system sans-serif for body. These preserve the serif/sans hierarchy while fonts load.

The brand name is a typographic wordmark, not a third font style. It uses Cormorant Garamond 600 in uppercase with controlled tracking. Script typography from the physical sign is not imitated in interface copy.

### Type hierarchy

| Style | Mobile | Desktop | Weight | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- | --- |
| Display XL | 3.5rem | 6.75rem | 500 | 0.88 | -0.035em | Hero brand statement |
| Display L | 2.75rem | 5rem | 500 | 0.94 | -0.025em | Major editorial sections |
| Heading 1 | 2.25rem | 3.75rem | 500 | 1.00 | -0.02em | Page-level title if needed |
| Heading 2 | 1.875rem | 3rem | 500 | 1.05 | -0.015em | Section title |
| Heading 3 | 1.5rem | 2rem | 600 | 1.10 | -0.01em | Card/category heading |
| Lead | 1.125rem | 1.375rem | 400 | 1.55 | 0 | Introductory body copy |
| Body | 1rem | 1.0625rem | 400 | 1.65 | 0 | Standard reading copy |
| Small | 0.875rem | 0.875rem | 400 | 1.55 | Supporting details |
| Label | 0.75rem | 0.75rem | 600 | 1.20 | 0.14em | Eyebrows, navigation and metadata |
| Menu price | 0.875rem | 0.9375rem | 500 | 1.30 | 0.02em | Prices and compact numeric data |

Display styles use the serif family; Lead through Menu price use the sans family. Text measures are capped at 38 characters for display copy and 66 characters for body copy. This prevents weak line endings and keeps reading comfortable.

## 3. Color palette

| Token | Value | Role |
| --- | --- | --- |
| Paper | `#FFFEFB` | Primary light surface |
| Cream | `#F6F1E8` | Warm section surface and page background |
| Oat | `#E8DFD1` | Quiet tonal contrast and selected menu state |
| Stone | `#C9BEAE` | Rules, disabled detail and image placeholders |
| Taupe | `#746C61` | Secondary text on light surfaces |
| Warm black | `#1B1916` | Primary text, dark surfaces and primary controls |
| Soft black | `#292620` | Alternate dark surface |
| Muted gold | `#AA7E2E` | Tiny brand accents and focus details only |
| White ink | `#FFFDF8` | Text on photography and dark surfaces |
| Dark overlay | `rgba(20, 17, 13, 0.34)` | Hero readability layer |

Warm black on cream is the default high-contrast pairing. Gold is never used for paragraph text, large fills or decorative gradients; it is limited to short rules, active indicators and fine details so it remains special. Pure black and cool gray are avoided because they make the photographic palette feel harsher.

## 4. Spacing system

The system uses a 4px base unit with a deliberately limited scale.

| Token | Size | Typical use |
| --- | --- | --- |
| 1 | 4px | Icon micro-alignment |
| 2 | 8px | Tight label relationships |
| 3 | 12px | Compact control gaps |
| 4 | 16px | Standard inline gap |
| 5 | 24px | Card and content grouping |
| 6 | 32px | Mobile component separation |
| 7 | 48px | Large internal separation |
| 8 | 64px | Mobile section padding |
| 9 | 80px | Tablet section padding |
| 10 | 96px | Standard desktop section padding |
| 11 | 128px | Large desktop chapter break |
| 12 | 160px | Signature editorial pause |

Sections use 80–96px vertical padding on mobile and 128–160px on desktop. Smaller spacing describes relationships inside a component; larger spacing separates ideas. Arbitrary one-off values should not be introduced unless required for optical alignment.

## 5. Grid

### Mobile: 0–767px

- 4 columns.
- 20px outer margins below 480px; 24px from 480px.
- 16px gutters.
- Content may span all four columns, while captions can intentionally span three to create editorial negative space.

### Tablet: 768–1023px

- 8 columns.
- 32px outer margins.
- 20px gutters.
- Text/image pairings normally split 3/5 or 4/4 depending on copy length.

### Desktop: 1024px and above

- 12 columns.
- 32px gutters at 1024–1279px; 40px gutters from 1280px.
- A standard editorial split is 5/7; a more dramatic split is 4/8.
- Deliberate asymmetry is encouraged, but every edge must resolve to a grid line.

The grid changes density rather than merely scaling. Mobile compositions stack in narrative order; desktop compositions gain asymmetry and offset alignment.

## 6. Container widths

| Container | Maximum | Purpose |
| --- | --- | --- |
| Reading | 680px | Long copy and philosophy statements |
| Content | 1200px | Most sections, menu and visit information |
| Wide | 1440px | Editorial image compositions and gallery |
| Full bleed | None | Hero and rare image-led chapter breaks |

Containers never reduce mobile gutters below 20px. Text does not automatically stretch with its parent container; reading width remains independent from image width.

## 7. Border radius

- **0px:** editorial images, full-bleed media and structural surfaces.
- **2px:** buttons, menu category controls and compact interface elements.
- **4px:** map frame or utility panels only when separation is necessary.
- **999px:** circular icon buttons, status dots and the scroll indicator capsule.

Sharp photography feels more like a magazine spread and less like an application card grid. Rounded containers are therefore exceptional rather than default.

## 8. Borders and shadows

- Default rule: 1px solid Oat or Stone, depending on required contrast.
- Focus ring: 2px Muted gold with a 3px Paper offset.
- Ambient shadow: `0 16px 48px rgba(27, 25, 22, 0.08)`.
- Raised-control shadow: `0 8px 24px rgba(27, 25, 22, 0.10)`.

Cards do not receive shadows. Shadows are reserved for the mobile navigation overlay, an expanded menu surface if needed, and floating controls. Structural hierarchy should come from spacing and tone first.

## 9. Buttons and links

### Primary button

- Warm-black background, White-ink text.
- 48px minimum height; 52px on desktop.
- 20px horizontal padding on mobile; 24px on desktop.
- Manrope 600, 0.75rem, uppercase, 0.12em tracking.
- 2px radius and a 1px warm-black border.

Used once in the hero for “View Menu” and sparingly for a decisive action. Its visual weight comes from contrast, not size.

### Secondary button

- Transparent background, warm-black text and border.
- Same dimensions and typography as primary.
- Used for directions or optional secondary actions.

### Text link

- Sentence case or label case depending on context.
- Underline is offset by 5px and 1px thick.
- Arrow icons may follow directional links; they never precede them.

All controls maintain a 44px minimum touch target. Disabled states use Taupe text and Oat borders without reducing opacity below readable levels.

## 10. Icon rules

- Use custom, local SVG icons only; no external icon library.
- 1.5px strokes, round caps and joins.
- Standard sizes: 16px inline, 20px controls, 24px standalone.
- Icons inherit the current text color.
- Decorative icons are hidden from assistive technology; meaningful icon-only controls require an accessible label.
- Do not mix filled and outlined families.
- Social marks may retain their recognizable geometry but share the same visual box and optical size.

Icons clarify actions; they do not decorate headings or substitute for clear language.

## 11. Motion system

| Motion | Duration | Easing | Use |
| --- | --- | --- | --- |
| Instant feedback | 120ms | ease-out | Pressed state |
| Micro transition | 180ms | ease-out | Color, border and opacity |
| Hover movement | 280ms | cubic-bezier(0.22, 1, 0.36, 1) | Arrow or image response |
| Component reveal | 560ms | cubic-bezier(0.22, 1, 0.36, 1) | Fade plus small translateY |
| Editorial reveal | 720ms | cubic-bezier(0.16, 1, 0.3, 1) | Hero and major images |
| Navigation panel | 420ms | cubic-bezier(0.22, 1, 0.36, 1) | Mobile menu open/close |

Entrance movement is limited to 12–20px vertically. Stagger intervals are 60–90ms and never exceed four items. Elements must not animate merely because the user scrolls past them repeatedly.

`prefers-reduced-motion` removes transforms, parallax and smooth scrolling while preserving immediate state changes. No content depends on animation to become available.

## 12. Hover and interaction behavior

- Buttons invert their surface and text colors over 180ms; they do not scale.
- Text-link underlines expand or shift subtly from left to right.
- Directional arrows move no more than 4px.
- Editorial images may scale to a maximum of 1.015 inside an overflow-hidden frame over 720ms.
- Gallery captions increase from 70% to 100% opacity.
- Navigation links use a fine underline rather than a color jump.
- Touch devices receive clear pressed and focus states without simulated hover behavior.

The response should feel physical but calm. Large zooms, bounces, elastic easing and continuous animation are prohibited.

## 13. Breakpoints

Breakpoints respond to composition failure, not device brands.

### Mobile breakpoints

- **0–479px — Compact mobile:** 20px gutters, single-column narratives, condensed hero copy.
- **480–767px — Large mobile:** 24px gutters, more generous image ratios and optional two-column micro-layouts.

### Tablet breakpoint

- **768–1023px:** 8-column grid, split editorial blocks where copy remains comfortable, expanded menu navigation.

### Desktop breakpoints

- **1024–1279px — Compact desktop:** desktop navigation and 12-column layout begin.
- **1280–1599px — Standard desktop:** 1200px content container and 40px grid gutters.
- **1600px and above — Wide desktop:** wide imagery can reach 1440px, while text remains capped; extra width becomes whitespace rather than oversized content.

Landscape mobile is treated through available height: the hero remains immersive but cannot hide the primary action or force the scroll indicator off-screen.

## 14. Accessibility and consistency rules

- Body text never drops below 16px.
- Text laid over photography requires a tested overlay and a stable crop-safe region.
- Keyboard focus is always visible and distinct from hover.
- Color is never the sole indicator of state.
- Heading levels follow document order even when visual styles differ.
- Tap targets are at least 44 × 44px.
- Menu prices and item names remain readable at 200% zoom.
- Decorative restraint never removes essential labels, directions or operating information.


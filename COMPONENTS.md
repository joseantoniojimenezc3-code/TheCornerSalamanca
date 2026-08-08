# The Corner Salamanca — Component Specification

## 1. Component philosophy

Components provide consistency without making the site look templated. Reuse applies to behavior, spacing and accessibility; composition may still vary by section. Every component must work mobile-first, support keyboard navigation where interactive, and respect reduced-motion preferences.

## 2. Global shell

### Site header

- Contains wordmark, primary navigation and mobile menu trigger.
- Variants: transparent over hero; cream sticky state; warm-black mobile overlay.
- States: default, scrolled, menu open, focus within.
- Must prevent layout shift when changing surface.

### Wordmark

- Text-based brand lockup until an approved vector mark exists.
- Variants: horizontal desktop and compact two-line mobile.
- Never shrinks below a legible optical width or appears as a decorative watermark.

### Primary navigation

- Desktop anchor list for Story, Brunch, Coffee, Menu, Gallery and Visit.
- Active position may be indicated with a fine underline.
- Anchor movement respects reduced motion and fixed-header offset.

### Mobile navigation panel

- Full-screen modal navigation with clear close control.
- Locks background scrolling, traps focus and returns focus to its trigger.
- Includes primary links, Instagram and language only; no duplicated marketing content.

### Main content container

- Variants: reading, content, wide and full bleed.
- Owns horizontal gutters and maximum widths.
- Never owns section-specific vertical spacing.

## 3. Typography components

### Section heading

- Optional numbered eyebrow, display title and optional short introduction.
- Alignments: left by default; centered only in the hero.
- Sizes respond through the approved type hierarchy rather than arbitrary section overrides.

### Eyebrow label

- Uppercase Manrope with generous tracking.
- Used for section numbering and compact metadata.
- Muted gold is permitted for the number or short rule, not the full label.

### Lead paragraph

- Maximum 52–58 characters for editorial introductions.
- May pair with a section heading but never repeat it in different words.

### Body copy block

- Maximum 66 characters per line.
- Supports paragraphs and one restrained inline link.

### Caption

- Identifies craft, context or subject only when useful.
- Never describes what is already visually obvious.

## 4. Actions

### Button

- Variants: primary, secondary and quiet/text.
- Sizes: default 48px minimum height; compact only for non-primary desktop controls while retaining a 44px target.
- Supports optional trailing arrow.
- States: default, hover, focus-visible, active and disabled.

### Text link

- Used inside editorial sections and footer utility links.
- Variants: underlined, directional and inverse.
- External destinations receive accessible context; icons do not replace link text.

### Icon button

- Reserved for close, previous/next if required, and back-to-top.
- Always includes a programmatic label and 44px target.

## 5. Hero

### Hero shell

- Owns viewport height, safe-area handling and overlay contrast.
- Contains exactly one hero image, wordmark/title, descriptor, primary action and scroll cue.
- Has no carousel, promotional badge, social proof or secondary action.

### Hero media

- Responsive image frame with art-directed crop and stable aspect/height reservation.
- Focal point is stored as content metadata rather than hard-coded per breakpoint.

### Hero content

- Narrow centered stack with controlled maximum width.
- Remains inside mobile safe areas and away from the primary food focal point.

### Scroll indicator

- Small line/arrow and optional “Scroll” label.
- Decorative only; it does not behave as a necessary navigation control.

## 6. Editorial sections

### Editorial split

- Reusable image/text composition.
- Variants: media left, media right, 5/7 and 4/8 proportions.
- Stacks into narrative order on mobile, never merely source order.

### Asymmetric image group

- One dominant image plus one or two supporting images.
- Uses grid alignment and offset spacing, not overlap for its own sake.
- Collapses to a paced vertical sequence on mobile.

### Chapter image

- Wide, visually dominant image used for a short seasonal interlude.
- Supports a caption outside the image; text overlay is exceptional.

### Section divider

- Whitespace is the default divider.
- Optional 1px rule is allowed only in information-dense areas such as menu and footer.

## 7. Photography

### Image block

- Variants: portrait, editorial-wide, detail and full bleed.
- Always reserves dimensions to prevent layout shift.
- Supports object-position metadata, lazy loading outside the hero, and a meaningful alternative text decision.

### Image caption

- Separate from the image frame so it remains readable and selectable.
- Uses small sans typography and a maximum of one concise line where possible.

### Gallery spread

- Three-image asymmetric composition on desktop; linear sequence on mobile.
- Does not auto-play, slide or mimic an Instagram grid.
- Optional full-screen viewing may be added only if usability testing proves value.

### Gallery item

- Contains image and optional caption.
- Hover response is a maximum 1.015 image scale and caption-opacity change.
- Entire item is non-interactive unless a larger view is implemented.

## 8. Menu

### Menu shell

- Contains introduction, contextual photograph, category navigation, category panels and dietary legend.
- Data-driven from `data/menu.json`; visual structure does not depend on item count.

### Menu category navigation

- Horizontal tabs with visible selected state.
- Mobile row may scroll horizontally with edge affordance and no hidden dropdown.
- Implements correct tab semantics and keyboard arrow behavior if panels switch in place.

### Menu category panel

- Heading, optional description and menu-item list.
- Only one panel may be emphasized at a time on compact screens.
- A no-script or failed-data state must still offer useful visit/contact information.

### Menu item

- Name, price, concise description and optional dietary markers.
- Name and price share the first line; the price remains right aligned.
- Long names wrap without displacing the price into ambiguity.
- No product thumbnail: photography is curated at section level rather than repeated per dish.

### Dietary marker

- Text abbreviation with a visible legend.
- Cannot rely solely on color or an unexplained icon.

### Menu rule

- Fine divider between items, inset consistently.
- Creates scan rhythm without boxing each item into a card.

## 9. Visit section

### Visit information block

- Address, neighborhood, opening hours and directions action.
- Values are content dependencies and remain unfilled until confirmed.
- Address is plain text as well as part of the directions link.

### Hours list

- Day groups on the left and times on the right.
- Mobile alignment remains readable with long localized day names.
- Temporary closures require a separate status message, not silent replacement.

### Map block

- Preferred form: lightweight static map preview linked to the chosen map provider.
- Fallback: neutral location panel with address and directions link.
- Interactive embeds, if later approved, load only after consent and must not block core information.

### Location image

- Storefront-sign photograph with an arrival-oriented alternative description.
- Uses a portrait crop and is never presented as the official logo.

## 10. Footer

### Footer shell

- Warm-black closing surface with wordmark, descriptor, visit details and utilities.
- Responsive columns collapse in semantic reading order.

### Footer contact group

- Address and confirmed opening hours.
- Does not repeat full menu navigation.

### Social links

- Text label plus optional local SVG mark.
- Opens external profiles with clear accessible names.
- Only active, maintained channels are included.

### Legal links

- Privacy, cookies and required business information.
- Smaller visually, but never below accessible text size requirements.

### Back-to-top control

- Text plus upward arrow on desktop; compact labeled control on mobile.
- Appears only after meaningful scrolling and respects reduced motion.

## 11. Feedback and utility components

### Focus ring

- Shared keyboard-only visual treatment for every interactive component.

### Loading state

- Used only for asynchronously loaded menu data or optional map content.
- Reserves final geometry; no indefinite animated spinner is required.

### Empty/error state

- Plain-language message and useful next action.
- Never exposes technical errors to visitors.

### Skip link

- First focusable element, hidden until focused.
- Moves directly to main content.

### Visually hidden text

- Shared accessibility utility for icon labels and supplementary context.

## 12. Reusable spacing primitives

### Section wrapper

- Applies approved section padding and optional surface color.
- Variants: standard, spacious and compact/information-dense.

### Stack

- Vertical flow using approved gaps: 8, 12, 16, 24, 32 or 48px.
- Used for headings, text groups and menu content.

### Cluster

- Wrapping horizontal group for navigation, buttons, tags or metadata.
- Uses 8, 12, 16 or 24px gaps.

### Grid

- Responsive 4/8/12-column layout primitive.
- Section components declare spans; they do not recreate gutters.

### Bleed

- Allows selected media to reach a viewport edge on mobile or both edges for the hero.
- Text never uses the bleed primitive.

### Spacer

- Permitted only for intentional editorial pauses using the spacing scale.
- It cannot compensate for inconsistent component margins.

## 13. Component exclusions

The design intentionally excludes carousels, testimonials, pop-ups, floating reservation prompts, promotional ribbons, rating widgets, counters, accordions for short content, image-heavy menu cards and autoplay media. None supports the calm, premium visit intent established for the brand.


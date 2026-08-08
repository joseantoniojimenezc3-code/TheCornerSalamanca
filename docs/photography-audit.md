# Photography audit

Reviewed: 90 professional photographs from `photos.zip`, plus the supplied storefront-sign photograph.

## Archive decisions

Every supplied frame is retained as an untouched JPG and has a metadata-free WebP derivative. Camera identifiers are preserved in lowercase form so each derivative can always be traced back to its source. The full, machine-readable inventory lives in `data/media.json`.

The 91 images are grouped by subject:

- Bakery: 9
- Brand and visit: 5
- Brunch: 25
- Coffee: 15
- Drinks: 4
- Kitchen and process: 22
- Signature toasts: 11

## Editorial shortlist

Only 15 photographs are flagged for likely use. This prevents near-duplicate dishes from competing with one another and gives each section a distinct visual rhythm.

| Role | Preferred frame | Reason |
| --- | --- | --- |
| Hero | `dsc-5720` | Layered overhead brunch composition with clear editorial depth |
| Brunch | `dsc-5692` | Balanced table scene with food, coffee and natural light |
| Brunch support | `dsc-5666` | Clean salmon presentation with generous negative space |
| Coffee | `dsc-5629` | Human craft moment and strong latte-art detail |
| Coffee support | `dsc-5635` | Warm tabletop pairing that communicates atmosphere |
| Summer drinks | `dsc-5683` | Bright iced-coffee action shot with sunlight and movement |
| Signature toasts | `dsc-5766` | Strong salmon-toast composition and controlled color |
| Gallery | `dsc-5704`, `dsc-5720`, `dsc-5635`, `dsc-5782` | Varied scale, subjects and visual texture without repetition |
| Visit | `brand-storefront-sign` | Clearly anchors the brand to its physical Madrid location |
| Brand support | `dsc-5790` | Quiet uniform detail suited to restrained editorial pacing |
| Process support | `dsc-5794`, `dsc-5814`, `dsc-5876` | A concise preparation sequence with hands and craft |
| Editorial support | `dsc-5752` | Menu-in-context scene that supports the integrated-menu story |

## Deferred decisions

Final hero crop, responsive source sets and section-level art direction are intentionally deferred until layout work begins. The shortlist can be adjusted by editing `selectedFor` fields in `data/media.json`; no files need to be moved or duplicated.

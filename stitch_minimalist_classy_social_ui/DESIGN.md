# Design System Strategy: The Quiet Gallery

## 1. Overview & Creative North Star
This design system is built upon the "Creative North Star" of **The Quiet Gallery**. 

In a digital landscape cluttered with noise and aggressive engagement patterns, this system functions as a high-end editorial space. We are not building a typical social media "feed"; we are curating a digital exhibition. The aesthetic is defined by "Soft Minimalism"—a philosophy where the interface recedes to let the user's content breathe. 

To achieve this premium feel, we break the "template" look through:
*   **Intentional Asymmetry:** Rejecting rigid, centered grids in favor of dynamic layouts where whitespace is a functional element, not just a gap.
*   **Tonal Depth:** Replacing harsh structural lines with soft shifts in value.
*   **Editorial Scaling:** Using dramatic typography scales to create a sense of hierarchy and prestige.

---

## 2. Colors & The Surface Philosophy
The palette is a sophisticated study in neutrals, utilizing deep grays and off-whites to create a tactile, paper-like quality.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. In this system, boundaries are invisible. Use background color shifts to define areas. For example, a main content area using `surface` (#f9f9f9) should be separated from a sidebar using `surface_container_low` (#f2f4f4).

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
*   **Base:** `surface` (#f9f9f9)
*   **The Nesting Principle:** Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f2f4f4) background. This creates a "lift" that feels organic and high-end, rather than artificial.

### The "Glass & Gradient" Rule
To move beyond a flat, "out-of-the-box" look:
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface_container_lowest` at 80% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#5f5e5e) to `primary_dim` (#535252). This adds a "weighted" feel to the button that flat color cannot provide.

---

## 3. Typography
We utilize **Manrope** for its architectural precision and modern clarity.

*   **Display Scale (`display-lg` to `display-sm`):** Reserved for high-impact editorial moments, such as profile names on headers or section titles. Use tight letter-spacing (-0.02em) to give it a "heavy" fashion-mag feel.
*   **Headline & Title:** Used for post titles and navigation. These should always be `on_surface` (#2d3435) to ensure maximum authority.
*   **Body & Labels:** `body-md` is our workhorse. For secondary metadata (timestamps, view counts), use `on_surface_variant` (#5a6061) to create a visual "recess" from the main narrative.

---

## 4. Elevation & Depth
In this system, depth is a whisper, not a shout.

*   **The Layering Principle:** Use the tonal range of the `surface_container` tokens to stack information. The more "important" an item, the closer it sits to `surface_container_lowest` (the brightest white).
*   **Ambient Shadows:** If a floating element (like a FAB or a detached menu) requires a shadow, use a custom property: `box-shadow: 0 12px 40px rgba(45, 52, 53, 0.06);`. The shadow color must be a derivative of `on_surface`, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use a "Ghost Border": the `outline_variant` (#adb3b4) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (#5f5e5e), Text `on_primary` (#faf7f6). Use `md` (0.375rem) rounding for a modern, slightly sharp finish.
*   **Secondary:** Background `secondary_container` (#e4e2e2), Text `on_secondary_container` (#515252). No border.
*   **Tertiary:** No background. Text `primary`. Use for low-emphasis actions like "Cancel" or "Read More."

### Cards & Feed Items
*   **Style:** Absolutely no borders. Use `surface_container_low` as the card background against a `surface` page background.
*   **Spacing:** Use generous padding (e.g., 2rem) within cards to maintain the "Gallery" aesthetic.

### Input Fields
*   **Style:** Minimalist. A bottom-only line using `outline_variant` at 30% opacity. Upon focus, the line transitions to `primary` (#5f5e5e) and the container gains a subtle `surface_container_highest` (#dde4e5) tint.

### Navigation (The Curator Bar)
*   **Implementation:** A floating bottom or side bar using the Glassmorphism rule. Icons should be light-stroke (1.5pt) using `on_surface_variant`. Active states should use a simple `primary` dot—avoid "pill" backgrounds for active icons to keep the UI clean.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace the "Negative Space": If a screen feels empty, resist the urge to fill it. Allow the white space to act as a luxury feature.
*   **Do** use asymmetrical image alignments in the feed (e.g., a 2x3 image followed by a 4x5 image) to mimic an editorial lookbook.
*   **Do** prioritize `surface_container` shifts over lines for all UI groupings.

### Don't:
*   **Don't** use pure #000000 for text. It is too harsh. Use `on_surface` (#2d3435).
*   **Don't** use the `full` (pill) rounding on buttons unless they are Action Chips. Stick to `md` or `lg` to maintain a sophisticated architectural feel.
*   **Don't** use high-contrast dividers between comments or list items. Use vertical spacing (margin/padding) as the primary separator.
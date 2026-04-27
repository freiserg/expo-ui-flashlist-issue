# expo-ui-flashlist-issue

Test repo for reproducing a bug with `@expo/ui` (SwiftUI) components inside `@shopify/flash-list`.

## Bug

SwiftUI `Menu` inside `FlashList` `ListHeaderComponent` — when a menu action toggles a conditional RN view (changes header height), the `Host`/`Menu` trigger loses its background.

**Steps to reproduce:**
1. Scroll the list up and down
2. Tap the "•••" (More) button to open the native Menu
3. Tap "Action 1" to toggle the conditional banner
4. Observe the `actionIconCircle` background disappears or the layout glitches

**Environment:** Expo SDK 55, `@expo/ui` 55.0.12, `@shopify/flash-list` 2.0.2.

## Setup

```bash
pnpm install
npx expo prebuild --platform ios
npx expo run:ios
```

## Stack

- Expo SDK 55
- `@expo/ui` (SwiftUI — `Menu`, `Button`, `Section`, `Host`, `RNHostView`)
- `@shopify/flash-list`

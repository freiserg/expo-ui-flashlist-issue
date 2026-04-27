# expo-ui-flashlist-issue

Test repo for reproducing a bug with `@expo/ui` (SwiftUI) components inside `@shopify/flash-list`.

## Bug

SwiftUI components (`Menu`, `Button`, `Toggle`, etc.) wrapped in `<Host>` lose background rendering or behave glitchy when placed inside a scrollable `FlashList` (as `ListHeaderComponent` or `renderItem`).

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

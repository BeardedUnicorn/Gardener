# Gardener

Gardener is a desktop-first garden watering tracker built with React, TypeScript, Tauri v2, and MUI v7. It keeps local watering schedules for plants in pots, beds, and in-ground plantings, then adjusts due dates using cached Open-Meteo weather data for one saved garden location.

## Features

- Local-first SQLite storage through the Tauri SQL plugin
- Weather-aware watering schedule with rain, heat, and wind adjustments
- Planting management for `pot`, `bed`, and `ground` entries
- Watering history and quick dashboard actions
- Desktop notifications while the app is open
- Current-location autofill for garden settings on supported desktop builds

## Stack

- React 19 + TypeScript + Vite
- Tauri v2
- MUI v7
- SQLite via `@tauri-apps/plugin-sql`
- Notifications via `@tauri-apps/plugin-notification`
- Geolocation via `@tauri-apps/plugin-geolocation`

## Development

Install dependencies:

```bash
npm install
```

Run the desktop app in development:

```bash
npm run tauri -- dev
```

Run tests:

```bash
npm run test:run
```

Build the frontend:

```bash
npm run build
```

Build the desktop app:

```bash
npm run tauri -- build
```

## Location Notes

- `Use current location` fills the Settings form, then `Save settings` persists it for weather refreshes.
- On macOS, the first location request should trigger a system permission prompt after a fresh app launch.
- If location access was denied earlier, re-enable `Gardener` in `System Settings > Privacy & Security > Location Services`.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Tauri VS Code extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License

MIT. See [LICENSE](./LICENSE).

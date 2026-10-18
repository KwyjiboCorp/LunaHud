# 月行 / LUNA HUD

Landscape iPhone film-prop interface for a scrappy lunar EVA suit. Simplified Chinese / English labels throughout. No build tools or dependencies; Node.js 20+.

## Run

```sh
npm start
```

Listens on `0.0.0.0:3000` (`PORT` overrides). Open through an HTTPS hosting service or your development environment's forwarded HTTPS port. For iPhone, open in Safari, rotate landscape, and optionally use Share → Add to Home Screen. Safari cannot reliably enforce landscape or enter fullscreen on iPhone; the app presents a rotation prompt in portrait. The web manifest requests landscape where supported.

## Controls

Five fixed tabs: comms, life support, solar weather, navigation, utilities. Utility controls local theme and idle timeout. Advanced settings control fade, cut, scan wipe, or no sleep. Touch or keyboard wakes the display. Settings persist locally. Placeholder submenus are deliberately blank. Decompression requires confirmation and only changes simulated UI state. Comms controls do not transmit or record audio.

Navigation begins in simulated lunar mode with illustrative contours, updating fictional coordinates, and a blinking astronaut marker. Enable Sensors explicitly requests device heading and Earth GPS; secure HTTPS and device permission are required. Earth GPS is labeled as such and does not represent lunar positioning. Heading uses Safari compass readings where available; other browsers may supply relative orientation. Terrain, satcom, weather and suit telemetry are fictional, not operational or safety data. GPS is used only in this browser and is not sent to a service. Google Fonts are optional; system font fallbacks work offline.

## Validation

`npm run check` checks JavaScript syntax. Use a real iPhone to verify sensor permissions, home-screen behavior, landscape presentation and filming exposure. Automated desktop smoke validation does not verify iOS sensor accuracy.

## GitHub Pages

The included GitHub Actions workflow deploys this static app whenever `main` changes. In repository Settings → Pages, select **GitHub Actions** as the source. No Node server runs on Pages; only `index.html`, `style.css`, `app.js`, and the manifest are published. HTTPS supports the optional device sensors.

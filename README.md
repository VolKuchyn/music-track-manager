# React + Vite

To Run:

git clone https://github.com/VolKuchyn/music-track-manager.git
cd music-track-manager
npm install
npm start


BUG!!!
You cannot upload audio with the same name to the server. But there are tracks with the same slug on the server. Therefore, when you open the modal window by slug, the first track with this slug is downloaded from the server. 
On the server, each track must have a unique slug to prevent this.


Key Features:


Share via the link: You can send a link to the track in the format http://localhost:3000/tracks/{slug} and a window with this track will open
Search and Filtering: Easily find tracks by genre using built-in filters
Loading Indicators: Smooth skeleton loaders and preloaders provide visual feedback during data fetching
Audio Playback: Built-in audio player with progress bar and playback controls
Track Management: Full support for editing or deleting entire tracks, or just the associated audio file
Media Uploads: Upload cover images and audio files directly via the interface
Delete Confirmation: Modal confirmation dialogs help prevent accidental deletions


React 19.0.10 + react-redux@9.2.0











This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

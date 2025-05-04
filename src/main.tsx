import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import preloadBannerImages from './lib/preloadImages';

// Preload all banner images to prevent loading issues
preloadBannerImages();

createRoot(document.getElementById("root")!).render(<App />);

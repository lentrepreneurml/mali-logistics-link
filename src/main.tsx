import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import preloadBannerImages from './lib/preloadImages';
import { init as initEmailJs } from '@emailjs/browser';

// Initialize Email.js
// Replace 'your_public_key' with your actual Email.js public key
initEmailJs('your_public_key');

// Preload all banner images to prevent loading issues
preloadBannerImages();

createRoot(document.getElementById("root")!).render(<App />);

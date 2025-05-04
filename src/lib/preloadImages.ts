// List of all banner images used in the application
const bannerImages = [
  '/images/home-banner.jpg',
  '/images/dedouanement-banner.jpg',
  '/images/transport-banner.jpg',
  '/images/fret-banner.jpg',
  '/images/logistique-banner.jpg',
  '/images/import-export-banner.jpg',
  '/images/services-divers-banner.jpg',
  '/images/nos-services-banner.jpg',
  '/images/devis-banner.jpg',
];

/**
 * Preloads all the banner images when the application starts
 * This helps prevent flickering or missing images when navigating between pages
 */
export const preloadBannerImages = (): void => {
  bannerImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default preloadBannerImages; 
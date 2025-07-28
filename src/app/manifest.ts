import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '../../public/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '../../public/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        "src":"../../public/screenshots/desktop.jpg",
        "sizes":"1280x720",
        "type":"image/jpg",
        "form_factor":"wide",
        "label":"Главный экран на десктопе"
      },
      {
        "src":"../../public/screenshots/mobile.jpg",
        "sizes":"360x640",
        "type":"image/jpg",
        "label":"Главный экран на мобилке"
      }
    ]
  }
}
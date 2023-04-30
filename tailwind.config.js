/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1565c0',
        'secondary': '#2c3e50',
        'light': '#f5f6fa',
        'text': 'rgba(44,62,80, 0.9)'
      },
      backgroundImage: {
        'hero': "url('/src/assets/img/icon-hero.svg')",
        'sdpPc': "url('/src/assets/img/icon-sdp-pc.svg')",
        'dev': "url('/src/assets/img/dev.jpg')",
        'digital': "url('/src/assets/img/digital.jpg')",
        'info': "url('/src/assets/img/info.jpg')",
        'it': "url('/src/assets/img/it.jpg')",
        'net': "url('/src/assets/img/net.jpg')",
        'uiux': "url('/src/assets/img/uiux.jpg')",
        'galsengirl': "url('/src/assets/img/galsengirl.jpg')",
        'cyber': "url('/src/assets/img/cyber.jpg')",
        'contact': "url('/src/assets/img/contact.jpg')",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
import localFont from 'next/font/local'

// Define Aileron font
export const aileron = localFont({
  src: [
    {
      path: '../../public/fonts/aileron/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aileron',
  display: 'swap',
})

// Define Chromate font for headings
export const chromate = localFont({
  src: [
    {
      path: '../../public/fonts/chromate/Chromate-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-chromate',
  display: 'swap',
}) 
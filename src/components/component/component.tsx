/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/To1ptDiblpW
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gray-200 dark:bg-gray-700 p-6 flex flex-col items-start md:items-start md:pr-8 relative">
          <div className="flex items-center mb-4">
            <Avatar className="w-20 h-20 mr-4">
              <AvatarImage alt="User Avatar" src="https://cdn.discordapp.com/avatars/257177177378914304/02066510896c8a92c949ca5c20673b65?size=1024" />
              <AvatarFallback>Fab</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Fabzact</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Streamer und Darsteller</p>
            </div>
          </div>
          <div className="md:text-left mt-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">24 Jahre alt</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Schweitz</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              Ich bin eine Schlechte Paplatte kopie.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
            href="https://fabzact.de/discord" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25}
                   viewBox="0 0 640 512">
                <path
                    d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">Discord</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Place to be</p>
            </div>
          </a>
          <a
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
              href="https://fabzact.de/twitch" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25}
                   viewBox="0 0 512 512">
                <path
                    d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">Twitch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">@Fabzact</p>
            </div>
          </a>
          <a
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
              href="https://youtube.com/@fabzact" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25}
                   viewBox="0 0 576 512">
                <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">YouTube</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">@Fabzact</p>
            </div>
          </a>
          <a
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
              href="https://instagram.com/fabzact" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25"
                   viewBox="0 0 448 512">
                <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">Instagram</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">@Fabzact</p>
            </div>
          </a>
          <a
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
              href="https://tiktok.com/@fabzact" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25"
                   viewBox="0 0 448 512">
                <path
                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">TikTok</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">@Fabzact</p>
            </div>
          </a>
          <a
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
              href="https://www.whatsapp.com/channel/0029Va7o44M4o7qSf8EcG50l" target="_blank"
          >
            <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25"
                   viewBox="0 0 448 512">
                <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">Whatsapp</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Komm in Die Gruppe!!</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

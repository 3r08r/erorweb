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
import React from "react";
export function Component() {
  return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
        <div
            className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div
              className="md:w-1/2 bg-gray-200 dark:bg-gray-700 p-6 flex flex-col items-start md:items-start md:pr-8 relative">
            <div className="flex items-center mb-4">
              <Avatar className="w-20 h-20 mr-4">
                <AvatarImage alt="User Avatar"
                             src="https://cdn.discordapp.com/avatars/962060530506399784/8af2561dc3920eb3ecc72c194d905584?size=1024"/>
                <AvatarFallback>Eror</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Err0r</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Schüler und schlechter Coder</p>
              </div>
            </div>
            <div className="md:text-left mt-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">16 Jahre alt</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Deutschalnd</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                Ich bin ein Schlechter coder aber ein gunter Sportler.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
                href="https://discord.com/users/962060530506399784" target="_blank"
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
                <p className="text-gray-600 dark:text-gray-400 text-sm">@Er_r</p>
              </div>
            </a>
            <a
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
                href="https://open.spotify.com/user/wyxgeko3wzyro8qyfh49mfaxe?si=17033e81561040a9" target="_blank"
            >
              <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 496 512" height={25} width={25}>
                  <path
                      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-800 dark:text-gray-200 font-medium">Spotify</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Scheiß musik geschamck ig.</p>
              </div>
            </a>
            <a
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
                href="https://github.com/3r08r" target="_blank"
            >
              <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 496 512" height={25} width={25}>
                  <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-800 dark:text-gray-200 font-medium">Github</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">@3r08r</p>
              </div>
            </a>
            <a
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
                href="https://steamcommunity.com/profiles/76561199233541058/" target="_blank"
            >
              <div className="bg-gray-200 dark:bg-gray-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 496 512" height={25} width={25}>
                  <path
                      d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-800 dark:text-gray-200 font-medium">Steam</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">@FischmitBeinen</p>
              </div>
            </a>
            <a
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4"
                href="https://tiktok.com/@er_0rr" target="_blank"
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
                <p className="text-gray-600 dark:text-gray-400 text-sm">@er_0rr</p>
              </div>
            </a>
          </div>

        </div>
        <div className="disable_on_mobile">
          <iframe
              src="https://github-readme-activity-graph.vercel.app/graph?username=3r08r&bg_color=111827&color=95a3a7&line=9e4c98&point=949494&area=true&hide_border=true"
              title="Activity Graph"
              style={{border: 'none', width: '500%', height: '500px', marginLeft: '-200%'}}
          />
        </div>
      </div>
  )
}

import React from 'react'
import Indiawifi from '../assets/indianwifi.txt'
import ten from '../assets/10000.txt'
import all from '../assets/AllPass.txt'
export default function Navbar() {
  return (
    <>
  <header className="bg-greenlite ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600 dark:text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <svg
            className="h-8"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
             d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <a
                className="text-gray-500 font-lg font-bold transition hover:text-greendark dark:text-white dark:hover:text-white/75"
                href="#"
              >
                CyberGEN
              </a>
            </li>
           
            <li>
              <a
                className="text-gray-500 transition font-bold hover:text-myred dark:text-white dark:hover:text-white/75"
                href={all}
                target='_blank'
              >
                All In One 
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition font-bold hover:text-myred dark:text-white dark:hover:text-white/75"
                href={Indiawifi}
                target='_blank'
              >
                Wifi Special
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition font-bold hover:text-myred dark:text-white dark:hover:text-white/75"
                href={ten}
                target='_blank'
              >
                10000 Special
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md border-2 border-myred bg-teal-600 hover:bg-myred hover:text-mywhite px-3 py-1 text-sm font-medium text-myred shadow dark:hover:bg-teal-500"
            href="https://www.buymeacoffee.com/narendranishad"
          >
            Support+
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md border-2 border-teal-600 hover:bg-myblack hover:border-myblack hover:text-greenlite bg-gray-100 px-4 py-1 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              href="https://github.com/nkrider7"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded border-2 border-teal-600 bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </>
  )
}

import React from 'react'
import Location from './Location'

export default function Navbar() {
  return (
    <div>

    <nav className="bg-white border-yellow-200 dark:bg-yellow-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mazdoor Rozgar</span>
        </a>
        <Location/>
      </div>
    </nav>
    </div>
  )
}

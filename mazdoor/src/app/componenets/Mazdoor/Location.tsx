import React from 'react'

export default function Location() {
  return (
    <div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-yellow-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-yellow-900 dark:border-yellow-700">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800" type="button">Location <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className="z-10 hidden bg-white divide-y divide-yellow-100 rounded-lg shadow w-44 dark:bg-yellow-700">
    <ul className="py-2 text-sm text-yellow-700 dark:text-yellow-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-yellow-600 dark:hover:text-white">Delhi</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-yellow-600 dark:hover:text-white">Mumbai</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-yellow-600 dark:hover:text-white">Ghaziabad</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-yellow-600 dark:hover:text-white">Patna</a>
      </li>
    </ul>
</div>
          </ul>
        </div>
    </div>
  )
}

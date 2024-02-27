import React from "react";

export default function Jobcard() {
  return (
    <div style={{margin : "51px"}}>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://media.assettype.com/TNIE%2Fimport%2F2020%2F10%2F13%2Foriginal%2FCVBCVBHJhs.jpg?w=480&auto=format%2Ccompress&fit=max"
          alt=""
          style={{margin:"6px"}}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
}

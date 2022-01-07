import React from "react";

/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from "@heroicons/react/solid";
import photo from "../assets/images/tryusphoto.png";

export default function Tryusout() {
  return (
    <div className="relative green lg:mx-40 sm:m-10">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center  py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">
              We help you make your Employees financial{" "}
            </span>
            <span className="block">wellness a priority</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="inline-flex">
              <a
                href="#"
                className=" flex items-center justify-center shadow  mt-10 border border-transparent text-base font-medium rounded-full text-white blue hover:green  md:text-sm py-4 px-10 "
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
          </div>
         
          <div className="relative ">
     <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img className="w-full h-full object-cover" src={photo} alt="" />
          </div>
          
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10 ">
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Try Us Out
          </p>
          <p className="mt-3 text-lg text-gray-300">No credit card needed</p>
          <div className="mt-8">
            <div className="inline-flex rounded-full shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50"
              >
                Watch Demo
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
              </div>
              </div>
    </div>
  );
}

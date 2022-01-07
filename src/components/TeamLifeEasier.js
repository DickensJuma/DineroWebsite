/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

import Time from "../assets/images/back-in-time.png"
import Loop from "../assets/images/process.png"
import Access from "../assets/images/access-control.png"
import Group from "../assets/images/group.png"

export default function TeamLifeEasier() {
  return (
    <div className="max-w-8xl mx-auto py-24 px-4 purple sm:px-6 lg:px-8 md:justify-items-center text-center">
      <h2 className="text-2xl font-extrabold text-dark-900 sm:text-2xl sm:leading-none sm:tracking-tight lg:text-4xl text-center">
        ​How Do We Make Your <br/>Team Life Easier? 
      </h2>
<div className="lg:px-28 md:px-10 sm:mx-16">
<div className="mt-24 space-y-12  lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-16 md:justify-items-center">
        <div className="relative py-10 px-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:justify-items-center">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center justify-items-center sm:justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src={Group}
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold  mt-10">
              Encourage Team Communication
            </p>
          </div>
        </div>
        <div className="relative p-10 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10 "
              src={Time}
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold mt-10">
              Help Save Time & Money
            </p>
          </div>
        </div>
        <div className="relative p-10 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className=" grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src={Access}
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold mt-10">
              Makes Information Accessible
            </p>
          </div>
              </div>
              <div className="relative py-10 px-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src={Loop}
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold mt-10">
              Keeps Everyone in The Loop
            </p>
          </div>
        </div>
      </div>
</div>
      
    </div>
  );
}

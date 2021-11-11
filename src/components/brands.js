/* This example requires Tailwind CSS v2.0+ */

import Brand1 from "../assets/images/bbox.png"
import Brand2 from "../assets/images/lakehub.png"
import Brand3 from "../assets/images/Winam Capital.png"
import Brand4 from "../assets/images/world-vision.png"
import Brand5 from "../assets/images/oaf.png"
export default function Brands() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center bg-white-700">
          <h2 className="text-3xl font-extrabold text-dark">​Trusted by the Greatest</h2>
          <div className="flow-root mt-8 lg:mt-10">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src={Brand2}  alt="Mirage" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={Brand3} 
                  alt="StaticKit"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={Brand4} 
                  alt="Transistor"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={Brand5} 
                  alt="Workcation"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src={Brand1} alt="Tuple" />
              </div>
            </div>
          </div>
        </div>
       
      </div>
    )
  }
  
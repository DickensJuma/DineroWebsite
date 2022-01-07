import James from '../assets/images/james.jpeg'
export default function Testimony() {
  return (
    <>
   
      <div className="py-8 green overflow-hidden md:py-12 lg:py-12">
     
      <h2 className="text-2xl font-extrabold text-white sm:text-2xl sm:leading-none sm:tracking-tight lg:text-4xl text-center mb-5">
        Hear It from Our Customers
      </h2>
      <div className="carousel relative rounded-full relative overflow-hidden shadow-xl lg:mx-40 md:mx-10 mt-5">
        <div className="carousel-inner relative overflow-hidden w-full ">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked="checked"
          />
          <div
            className="carousel-item absolute opacity-0 bg-center"
            style={{
              height: 230,
              backgroundColor: "#fff",
            }}
          >
           
              <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-2 lg:py-2">
                <div className="relative lg:flex lg:items-center px-6">
                  <div className="hidden lg:block lg:flex-shrink-0">
                    <img
                      className="h-32 w-32 rounded-full xl:h-32 xl:w-32"
                      src={James}
                      alt=""
                    />
                  </div>

                  <div className="relative lg:ml-10">
                    <blockquote className="relative">
                      <div className="text-md leading-9 font-medium text-gray-900">
                        <p className="p-6">
                          
						        	"Getpaid is a great way to help employees who may have issues matching bill dates with their salary date. It also spares them the embarrassment of asking for an advance from employers."						        
                        </p>
                        <div className="ml-8 lg:ml-8">
                          <div className="text-base font-medium text-gray-900">
                            Jame Odede
                          </div>
                          <div className="text-base font-medium text-indigo-600">
                            CEO, Lakehub
                          </div>
                        </div>
                      </div>
                      <footer className="mt-8">
                        <div className="flex">
                          <div className="flex-shrink-0 lg:hidden">
                            <img
                              className="h-2 w-2 rounded-full"
                              src={James}
                              alt=""
                            />
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
           
          </div>
      
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0 bg-center"
            style={{
              height: 230,
              backgroundColor: "#fff",
            }}
          >
           
              <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-2 lg:py-2">
                <div className="relative lg:flex lg:items-center px-6">
                  <div className="hidden lg:block lg:flex-shrink-0">
                    <img
                      className="h-32 w-32 rounded-full xl:h-32 xl:w-32"
                      src={James}
                      alt=""
                    />
                  </div>

                  <div className="relative lg:ml-10">
                    <blockquote className="relative">
                    <div className="text-md leading-9 font-medium text-gray-900">
                        <p className="p-6">
                          
						        	"Getpaid is a great way to help employees who may have issues matching bill dates with their salary date. It also spares them the embarrassment of asking for an advance from employers."						        
                        </p>
                        <div className="ml-8 lg:ml-8">
                          <div className="text-base font-medium text-gray-900">
                            Jame Odede
                          </div>
                          <div className="text-base font-medium text-indigo-600">
                            CEO, Lakehub
                          </div>
                        </div>
                      </div>
                      <footer className="mt-8">
                        <div className="flex">
                          <div className="flex-shrink-0 lg:hidden">
                            <img
                              className="h-2 w-2 rounded-full"
                              src={James}
                              alt=""
                            />
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
       
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{
              height: 230,
              backgroundColor: "#fff",
            }}
          >
            <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-2 lg:py-2">
              <div className="relative lg:flex lg:items-center px-6">
                <div className="hidden lg:block lg:flex-shrink-0">
                  <img
                    className="h-32 w-32 rounded-full xl:h-32 xl:w-32"
                    src={James}
                    alt=""
                  />
                </div>

                <div className="relative lg:ml-10">
                  <blockquote className="relative">
                  <div className="text-md leading-9 font-medium text-gray-900">
                        <p className="p-6 text-base">
                          
						        	"Getpaid is a great way to help employees who may have issues matching bill dates with their salary date. It also spares them the embarrassment of asking for an advance from employers."						        
                        </p>
                        <div className="ml-8 lg:ml-8">
                          <div className="text-base font-medium text-gray-900">
                            Jame Odede
                          </div>
                          <div className="text-base font-medium text-indigo-600">
                            CEO, Lakehub
                          </div>
                        </div>
                      </div>
                    <footer className="mt-8">
                      <div className="flex">
                        <div className="flex-shrink-0 lg:hidden">
                          <img
                            className="h-2 w-2 rounded-full"
                            src={James}
                            alt=""
                          />
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
         
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="
      carousel-bullet
      cursor-pointer
      block
      text-4xl text-black
      hover:text-blue-700
    "
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="
      carousel-bullet
      cursor-pointer
      block
      text-4xl text-white
      hover:text-blue-700
    "
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="
      carousel-bullet
      cursor-pointer
      block
      text-4xl text-white
      hover:text-blue-700
    "
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
      </div>
      </>
  );
}

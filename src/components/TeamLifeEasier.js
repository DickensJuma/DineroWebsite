/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Startup",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TeamLifeEasier() {
  return (
    <div className="max-w-8xl mx-auto py-24 px-4 purple sm:px-6 lg:px-8 md:justify-items-center text-center">
      <h2 className="text-2xl font-extrabold text-dark-900 sm:text-2xl sm:leading-none sm:tracking-tight lg:text-4xl text-center">
        ​How Do We Make Your <br/>Team Life Easier? 
      </h2>
<div className="px-28">
<div className="mt-24 space-y-12  lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-16 md:justify-items-center">
        <div className="relative py-10 px-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:justify-items-center">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold  mt-10">
              Encourage Team Communication
            </p>
          </div>
        </div>
        <div className="relative p-10 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10 "
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold mt-10">
              Help Save Time & Money
            </p>
          </div>
        </div>
        <div className="relative p-10 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className=" grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
            <p className="mt-6 text-xl font-medium green-text font-bold mt-10">
              Makes Information Accessible
            </p>
          </div>
              </div>
              <div className="relative py-10 px-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="grid aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 md:justify-items-center text-center">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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

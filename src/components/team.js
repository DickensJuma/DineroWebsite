/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import React from 'react';
import team from '../assets/images/team.png';

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

export default function Team() {
  return (
    <>
      <svg
      className="absolute w-full h-6 -mt-5 sm:-mt-10 sm:h-16 "
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >
      <path
        fill="#012241"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      />
    </svg>
    <div className=" grid justify-items-center max-w-7xl mx-auto py-24 px-4 blue sm:px-6 lg:px-8 md:justify-items-center text-center">
      <h2 className="text-2xl font-extrabold text-white sm:text-2xl sm:leading-none sm:tracking-tight lg:text-4xl text-center">
        ​Become a Better Team, Together.
          </h2>
          <p className="text-white mt-10">
          Bills and emergencies do not occur only during payday periods; <br/>they occur on a daily basis as life unfolds. We understand this all too well,<br/> and we want to assist you in resolving it for your employees at no cost to you
          </p>
          <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src={team}
                    alt=""
                  />
                </div>
              </div>
      </div>
      </>
  );
}

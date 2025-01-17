import React from "react";
import { SectionsHeader } from "@/components/common";
import { Marquee } from "@/components/ui";
import { clientListData } from "./clientList.data";
import CountUp from "react-countup"; // Import CountUp for animation

interface Props extends React.ComponentProps<"div"> {}
interface CardProps extends React.ComponentProps<"div"> {
  data: (typeof clientListData)[number];
}

const CompanyCard = ({ data }: CardProps) => {
  return (
    <div className="mx-4">
      <data.image className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" />
    </div>
  );
};

const stats = [
  { value: 387, label: "Projects Delivered & Counting" },
  { value: 22, label: "Years of Combined Experience" },
  { value: 65, label: "Brand Shaped" },
  { value: 4.2, label: "Trust Score" },
  { value: 14, label: "Industries Served" },
];

export const ClientList = ({ ...props }: Props) => {
  return (
    <div {...props} className="my-8">
      <SectionsHeader
        heading="OUR CLIENTS"
        description1="Step-by-Step Guide to Achieving"
        description2="Your Business Goals"
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s]">
          {clientListData.map((company) => (
            <CompanyCard key={company.name} data={company} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {clientListData.map((company) => (
            <CompanyCard key={company.name} data={company} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex w-full items-center justify-between px-6 sm:px-12 lg:px-24">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-primary"
          >
            <CountUp
              start={0}
              end={stat.value}
              duration={2.5}
              className="text-4xl font-bold"
              suffix="+" // For values with a "+" suffix
            />
            <span className="mt-2 text-lg">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Partnered With Section */}
      <div className="mt-16 bg-black text-white py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Partnered With</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {clientListData.map((company, index) => (
            <CompanyCard key={index} data={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

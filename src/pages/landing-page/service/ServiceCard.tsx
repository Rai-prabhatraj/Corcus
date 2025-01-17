import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils";
import { serviceList } from "./serviceList.data";

interface Props extends React.ComponentProps<"div"> {
  service: (typeof serviceList)[number];
}

export const ServiceCard = ({ service, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "border border-main-black w-full rounded-3xl p-8 text-center space-y-4",
        className
      )}
    >
      {/* Image */}
      <div className="flex justify-center">
        <service.Element className="w-28 h-28" />
      </div>

      {/* Name */}
      <h6 className="text-xl font-semibold">
        {service.heading1} {service.heading2 && <br />} {service.heading2}
      </h6>

      {/* Know More Button */}
      <div className="flex justify-center">
        <Link
          to={service.extantLink || "#"}
          className="flex items-center gap-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          <ArrowUpRight className="text-white" />
          <span>Know More</span>
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui";
import { navigationData } from "@/data";
import { cn } from "@/utils";
import { Phone } from "lucide-react"; // Example icon, replace with your preferred icon library.

interface Props extends React.ComponentProps<"div"> {}

export const LargeDeviceNav = ({ className, ...props }: Props) => {
  return (
    <div
      id="large-device-nav"
      className={cn(
        "flex items-center justify-between gap-x-6 px-4 lg:px-8",
        className
      )}
      {...props}
    >
      {/* Navigation Links */}
      <div className="flex gap-x-6 text-gray-600">
        {navigationData?.map(({ label }) => (
          <Link
            to="/"
            key={label}
            className="text-sm font-medium hover:text-black"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <Button
        variant="secondary"
        className="bg-black text-white flex items-center gap-x-2 px-6 py-2 rounded-lg hover:bg-gray-800"
      >
        Contact us
        <Phone className="w-5 h-5" />
      </Button>
    </div>
  );
};

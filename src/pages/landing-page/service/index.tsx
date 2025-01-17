import React from "react";

import { SectionsHeader } from "@/components/common";
import { ProposalBanner } from "./ProposalBanner";
import { ServiceCard } from "./ServiceCard";
import { serviceList } from "./serviceList.data";

interface Props extends React.ComponentProps<"div"> {}

export const Service = ({ ...props }: Props) => {
  return (
    <div {...props}>
        <SectionsHeader
        heading="The Service We Provide For You" description1={""} description2={""}       
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {serviceList.map((data) => (
          <ServiceCard service={data} key={data.heading1 + data.heading2} />
        ))}
      </div>

      <div style={{ margin: "2rem 0", padding: "1rem" }}>
  <ProposalBanner />
</div>
    </div>
  );
};

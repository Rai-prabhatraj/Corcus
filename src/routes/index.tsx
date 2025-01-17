import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/common";
import {
  CaseStudies,
  ClientList,
  ContactUs,
  Hero,
  Service,
   Testimonials,
 } from "@/pages/landing-page";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="*:container">
      <Hero />
     
      <Service />
      <CaseStudies />
        <ClientList />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

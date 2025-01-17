import { FooterContact } from "./FooterContact";
import { FooterCopyright } from "./FooterCopyright";


interface Props extends React.ComponentProps<"div"> {}

export const Footer = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="rounded-t-3xl bg-black mt-10 text-gray-400 pt-4 px-2 md:p-8"

    >
      {/* <FooterNavigation /> */}
      <FooterContact />
      <FooterCopyright />
    </div>
  );
};

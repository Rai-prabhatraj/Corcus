import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  heading: string;
  description1: string;
  description2: string;
}

export const SectionsHeader = ({
  heading,
  description1,
  description2,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center gap-y-4 my-10",
        className
      )}
      {...props}
    >
      <h3 className="text-3xl md:text-4xl lg:text-3xl font-bold text-main-black">
        {heading}
      </h3>
     
    </div>
  );
};

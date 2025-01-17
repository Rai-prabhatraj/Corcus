// import HeroImg from "@/assets/Illustration/Illustration.svg?react";
import { Button } from "@/components/ui";

interface Props extends React.ComponentProps<"main"> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 px-6 md:px-12 lg:px-20 py-10"
      {...rest}
    >
      {/* Left Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
          Build Your <br /> Awesome Platform
        </h1>
        <h2 className="text-gray-600 text-lg md:text-xl">
          Corcus Studio LLP is the one-stop solution for businesses searching
          for digital services.
        </h2>
        <div className="flex items-center gap-4">
          <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Get Started <span className="ml-2">↗</span>
          </Button>
          <Button
            variant="outline"
            className="border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Contact Us <span className="ml-2">📞</span>
          </Button>
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="flex items-center justify-center">
        <HeroImg className="w-full max-w-lg" />
      </div> */}
    </main>
  );
};

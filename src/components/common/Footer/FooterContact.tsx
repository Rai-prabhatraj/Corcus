import { Button } from "@/components/ui";

interface Props extends React.ComponentProps<"div"> {}

export const FooterContact = ({ ...props }: Props) => {
  return (
    <footer {...props} className="bg-black text-white py-8 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
        <img
  src="/log1.png"
  alt="Corcus Studio Logo"
  className="h-20 w-auto"
/>

          <p className="text-sm text-gray-400">
            CorcusStudio is your trusted partner in the digital world, helping
            businesses thrive with innovative strategies and measurable
            results. From branding to performance marketing, we turn your goals
            into achievements.
          </p>
        </div>

        {/* Middle Column */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
          <ul className="space-y-2">
            <li>Home</li>
            <li>Service</li>
            <li>Our Story</li>
          </ul>
          <ul className="space-y-2">
            <li>Join us</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start lg:items-end space-y-4">
          <Button className="px-8 py-4 bg-white text-black rounded-lg">
            Contact us
          </Button>
       
        </div>
      </div>
    </footer>
  );
};

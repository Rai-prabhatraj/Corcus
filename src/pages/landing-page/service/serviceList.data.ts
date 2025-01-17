// import Img5 from "@/assets/Illustration/browser-windows-with-different-information 1.svg?react";
import StarEmoticon from "@/assets/Illustration/emoticon-likes-and-stars-around 2.svg?react";
import Img2 from "@/assets/Illustration/selecting-a-value-in-the-browser-window 1.svg?react";
import SendingMessage from "@/assets/Illustration/sending-messages-from-one-place-to-another 1.svg?react";
// import VolumetricAnalytics from "@/assets/Illustration/volumetric-analytics-of-different-types-in-web-browsers 2.svg?react";
import Img1 from "@/assets/Illustration/web-search-with-elements 2.svg?react";

type ServiceType = {
  heading1: string;
  heading2: string;
  Element: typeof Img2;
  extantLink: string;
  bgColor: "gray" | "yellow" | "black";
};

export const serviceList: ServiceType[] = [
  {
    heading1: "Social Media",
    heading2: "Marketing",
    Element: Img1,
    bgColor: "gray",
    extantLink: "#",
  },
  {
    heading1: "Website",
    heading2: "Development",
    Element: Img2,
    bgColor: "yellow",
    extantLink: "#",
  },
  {
    heading1: "Video",
    heading2: "Production",
    Element: StarEmoticon,
    bgColor: "black",
    extantLink: "#",
  },
  {
    heading1: "Brand",
    heading2: "Strategy",
    Element: SendingMessage,
    bgColor: "gray",
    extantLink: "#",
  },

];

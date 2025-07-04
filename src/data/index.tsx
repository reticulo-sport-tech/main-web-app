import { Category } from "./types";
import { IoMdAnalytics } from "react-icons/io";
import { BiDesktop } from "react-icons/bi";
import { BsCameraVideoFill, BsFillGearFill } from "react-icons/bs";

export const products: Category[] = [
  {
    name: "Studio",
    subLabel: "AI Based Video Analytics Platform",
    id: "studio",
    description:
      "A state of the art AI based Video Analytics platform which provides with valuable insights to your game.",
    icon: IoMdAnalytics,
    featureImage: "/Studio/stats.png",
  },
  {
    name: "Radlo",
    subLabel: "A Multi sport collaboration app",
    id: "radlo",
    description:
      "A Multi sport collaboration app tailored to teach basics of any sport in a fun and intuitive way and manage day to day activities.",
    icon: BiDesktop,
    featureImage: "/gameplan/cover.png",
  },
];

export const resources: Category[] = [
  {
    name: "Product Documentation",
    subLabel: "Product Documentation",
    id: "product-documentation",
  },
  {
    name: "Customer Stories",
    subLabel: "Customer Stories",
    id: "customer-stories",
  },
  {
    name: "Blog",
    subLabel: "",
    id: "blog",
  },
  {
    name: "Events",
    subLabel: "",
    id: "events",
  },
];

export const companyLinks: Category[] = [
  {
    name: "About Us",
    subLabel: "",
    id: "about-us",
  },
  {
    name: "Careers",
    subLabel: "",
    id: "careers",
    show: false,
  },
  {
    name: "Contact Us",
    subLabel: "",
    id: "contact-us",
  },
];

export const solutions: Category[] = [
  {
    name: "Basic",
    subLabel: "Basic",
    id: "basic",
  },
  {
    name: "Pro",
    subLabel: "Pro",
    id: "pro",
  },
  {
    name: "Elite",
    subLabel: "Elite",
    id: "elite",
  },
];

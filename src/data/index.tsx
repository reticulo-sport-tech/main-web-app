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
    name: "Whiteboard",
    subLabel: "Whiteboard for Sports teaching",
    id: "whiteboard",
    description: "A unique Whiteboard like app tailored to teach basics of the sport in a fun and intuitive way.",
    icon: BiDesktop,
    featureImage: "/Whiteboard/wb-dash.png",
  },
  {
    name: "Training Equipment",
    subLabel: "Smart Training Machines",
    id: "trainex",
    description:
      "A collection of Smart Training Equipments which can provide very useful insights to your training.",
    icon: BsFillGearFill,
    featureImage: "/TrainEx/trainex.jpg",
  },
  {
    name: "Vision Camera",
    subLabel: "Low-cost Camera Solutions",
    id: "vcam",
    description:
      "A Low-cost Camera for recording High Quality video for analysing your game.",
    icon: BsCameraVideoFill,
    featureImage: "/VCam/rpi-camera-red.jpg",
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

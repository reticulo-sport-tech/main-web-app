import { companyLinks, products, resources } from "../../data";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  show?: boolean;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Products",
    children: products.map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `/${category.id}`,
    })),
  },
  {
    label: "How it Works",
    href: `/how-it-works`,
    show: false,
  },
  {
    label: "Pricing",
    href: `/pricing`,
    show: false,
  },
  {
    label: "Resources",
    children: resources.map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `/${category.id}`,
    })),
    show: false,
  },
  {
    label: "Company",
    children: companyLinks.map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `/${category.id}`,
      show: category.show,
    })),
  },
];

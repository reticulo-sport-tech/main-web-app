import { IconType } from "react-icons";

export interface Category {
  name: string;
  subLabel: string;
  id: string;
  description?: string;
  children?: SubCategory[];
  icon?: IconType;
  featureImage?: string;
  show?: boolean;
}

export interface SubCategory {
  name: string;
  id: string;
  description?: string;
}

export enum FeatureType {
  IMAGE,
  VIDEO,
  YOUTUBE_VIDEO,
}

export enum ItemPlacement {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

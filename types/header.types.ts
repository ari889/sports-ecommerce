import { Category } from "./category.types";

export type HeaderElementType = {
  id: number;
  name: string | JSX.Element;
  children?: Category[];
  isSearch?: boolean;
  isLink?: boolean;
  link?: string;
};

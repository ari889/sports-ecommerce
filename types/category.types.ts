export type Category = {
  id: number;
  name: string;
  children: Category[];
  url?: string;
};

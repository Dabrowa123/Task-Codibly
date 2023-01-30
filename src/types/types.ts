export type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type ProductsInfo = {
  totalProducts: number | null;
  products: Product[];
};

export type PageEndPoint = {
  page: number;
  per_page: number;
  support: { url: string };
  total: number;
  total_pages: number;
  data: Product[];
};

export type IdEndPoint = {
  data: Product;
  support: Support;
};

export type Support = {
  url: string;
};

export type IdAndPage = {
  id: string;
  page: number;
};

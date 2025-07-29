export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type PaginationQuery = {
  page?: number;
  limit?: number;
};

export type HomeParams = {
  lang: string;
  section: number;
};

export type HomeQuery = {
  lang: string;
  section: number;
};

export type StoreQuery = {
  page?: number;
  limit?: number;
  province?: string;
  city?: string;
  storeName?: string;
};

export type StoreParams = {
  page?: number;
  limit?: number;
  province?: string;
  city?: string;
  storeName?: string;
};

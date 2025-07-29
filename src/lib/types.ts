export type DataResponse<T> = {
  error: string;
  statusCode: number;
  message: string;
  data: T;
};

export type PaginatedDataResponse<T> = {
  error: string;
  statusCode: number;
  message: string;
  data: {
    totalAllData: number;
    totalData: number;
    limit: number;
    totalPage: number;
    currentPage: number;
    lastPage: number;
    nextPage: number;
    previousPage: number;
    payload: T;
  };
};

export type Base = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export interface News extends Base {
  titleImage: string;
  titleImageUrl: string;
  titleIDN: string;
  contentIDN: string;
  titleENG: string;
  contentENG: string;
}

export interface EventGallery extends Base {
  heroImage: string;
  heroImageUrl: string;
  eventDate: Date;
  titleIDN: string;
  eventVenueIDN: string;
  eventThemeIDN: string;
  eventDescriptionIDN: string;
  titleENG: string;
  eventVenueENG: string;
  eventThemeENG: string;
  eventDescriptionENG: string;
}

export interface Home extends Base {
  language: string;
  content: string;
  contentType: string;
  key: string;
  fileUrl: string;
}

export interface ProductAdvantage extends Base {
  product: string;
  productId: number;
  heroImageUrl: string;
  heroImage: string;
  titleIDN: string;
  descriptionIDN: string;
  titleENG: string;
  descriptionENG: string;
}

export interface Product extends Base {
  heroImage: string;
  heroImageUrl: string;
  titleIDN: string;
  descriptionIDN: string;
  titleENG: string;
  descriptionENG: string;
  productAdvantage: ProductAdvantage[];
}

export interface Project extends Base {
  heroImage: string;
  heroImageUrl: string;
  titleIDN: string;
  firstDescriptionIDN: string;
  secondDescriptionIDN: string;
  titleENG: string;
  firstDescriptionENG: string;
  secondDescriptionENG: string;
}

export interface Use extends Base {
  heroImage: string;
  titleIDN: string;
  titleENG: string;
  useComposition: UseComposition[];
}

export interface UseFor extends Base {
  useComposition: string;
  useCompositionId: number;
  titleIDN: string;
  titleENG: string;
  descriptionIDN: string;
  descriptionENG: string;
}

export interface UseComposition extends Base {
  use: Use;
  useId: number;
  titleIDN: string;
  titleENG: string;
  descriptionIDN: string;
  descriptionENG: string;
  useCompositionUseFor: UseFor[];
}

export type City = {
  value: string;
  label: string;
};

export type Province = {
  value: string;
  label: string;
  city: City[];
};

export interface Store extends Base {
  province: string;
  city: string;
  storeName: string;
  storeAddress: string;
  storeAddressGoogleMap: string;
  storePhone: string;
}

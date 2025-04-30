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
  id: string;
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

import { HomeParams, HomeQuery, PaginationParams, PaginationQuery, StoreParams, StoreQuery } from "./queryparams";

export const paginationQueryToParams = (query: PaginationQuery): PaginationParams => {
  return {
    page: query.page ?? undefined,
    limit: query.limit ?? undefined,
  };
};

export const handleChangePaginationQuery = (q: PaginationQuery) => {
  if (q) {
    if (!q?.limit) delete q.limit;
    if (!q?.page) delete q.page;
  }

  return q;
};

export const homeQuerytoParams = (query: HomeQuery): HomeParams => {
  return {
    lang: query.lang ?? undefined,
    section: query.section ?? undefined,
  };
};

export const storeQuerytoParams = (query: StoreQuery): StoreParams => {
  return {
    page: query.page ?? undefined,
    limit: query.limit ?? undefined,
    city: query.city ?? undefined,
    province: query.province ?? undefined,
    storeName: query.storeName ?? undefined,
  };
};

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const convertDate = (tgl?: Date) => {
  if (tgl) {
    const dateNow = new Date(tgl);
    const curr_date = dateNow.getDate();
    const curr_month = dateNow.getMonth(); //Months are zero based
    const curr_year = dateNow.getFullYear();
    const curr_day = dateNow.getDay();
    return days[curr_day] + ", " + curr_date + " " + months[curr_month] + " " + curr_year;
  }
};

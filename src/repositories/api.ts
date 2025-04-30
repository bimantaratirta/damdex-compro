import { damdexPublicAPI } from "@/lib/apiClient";
import { PaginationParams } from "@/lib/queryparams";
import { DataResponse, EventGallery, Home, News, PaginatedDataResponse } from "@/lib/types";
import axios from "axios";

export const fetchNews = async (params: PaginationParams): Promise<PaginatedDataResponse<News[]>> => {
  try {
    const res = await damdexPublicAPI.get<PaginatedDataResponse<News[]>>(`/news`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchNewsbyId = async (id: string): Promise<DataResponse<News[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<News[]>>(`/news/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchHome = async (params: { language: "id" | "eng"; section: number }): Promise<DataResponse<Home[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<Home[]>>(`/homepage`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchEventGallery = async (params: PaginationParams): Promise<PaginatedDataResponse<EventGallery[]>> => {
  try {
    const res = await damdexPublicAPI.get<PaginatedDataResponse<EventGallery[]>>(`/gallery-event`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchEventGallerybyId = async (id: string): Promise<DataResponse<EventGallery[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<EventGallery[]>>(`/gallery-event/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

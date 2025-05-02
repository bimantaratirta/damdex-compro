import { damdexPublicAPI } from "@/lib/apiClient";
import { PaginationParams } from "@/lib/queryparams";
import { DataResponse, EventGallery, Home, News, PaginatedDataResponse, Product, Project } from "@/lib/types";
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

export const fetchHome = async (params: { lang: string; section: number }): Promise<DataResponse<Home[]>> => {
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

export const fetchProduct = async (params: PaginationParams): Promise<PaginatedDataResponse<Product[]>> => {
  try {
    const res = await damdexPublicAPI.get<PaginatedDataResponse<Product[]>>(`/product`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchProductbyId = async (id: string): Promise<DataResponse<Product[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<Product[]>>(`/product/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchProject = async (params: PaginationParams): Promise<PaginatedDataResponse<Project[]>> => {
  try {
    const res = await damdexPublicAPI.get<PaginatedDataResponse<Project[]>>(`/project`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchProjectbyId = async (id: string): Promise<DataResponse<Project[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<Project[]>>(`/project/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

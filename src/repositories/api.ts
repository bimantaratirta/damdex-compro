import { damdexPublicAPI } from "@/lib/apiClient";
import { PaginationParams } from "@/lib/queryparams";
import {
  DataResponse,
  EventGallery,
  Home,
  News,
  PaginatedDataResponse,
  Product,
  Project,
  Use,
  UseComposition,
  UseFor,
} from "@/lib/types";
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

export const fetchNewsbyId = async (id: number): Promise<DataResponse<News[]>> => {
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

export const fetchEventGallerybyId = async (id: number): Promise<DataResponse<EventGallery[]>> => {
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

export const fetchProductbyId = async (id: number): Promise<DataResponse<Product[]>> => {
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

export const fetchProjectbyId = async (id: number): Promise<DataResponse<Project[]>> => {
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

export const fetchUse = async (params: PaginationParams): Promise<PaginatedDataResponse<Use[]>> => {
  try {
    const res = await damdexPublicAPI.get<PaginatedDataResponse<Use[]>>(`/use`, { params });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchUseNoPagination = async (): Promise<DataResponse<Use[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<Use[]>>(`/use/get-use-options`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchUsebyId = async (id: number): Promise<DataResponse<Use[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<Use[]>>(`/use/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchUseCompositionNoPagination = async (): Promise<DataResponse<UseComposition[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<UseComposition[]>>(
      `/use/use-composition/get-use-composition-options`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchUseCompositionbyId = async (id: number): Promise<DataResponse<UseComposition[]>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<UseComposition[]>>(`/use/use-composition/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

export const fetchUseForbyId = async (id: number): Promise<DataResponse<UseFor>> => {
  try {
    const res = await damdexPublicAPI.get<DataResponse<UseFor>>(`/use/use-composition-use-for/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    }
    throw error;
  }
};

import apiClient from "./apiClient";

export const getFaqData = async (params) =>
  await apiClient.get("/faqs", { params: params }).then((res) => res.data);

export const getFaqById = async (id) => await apiClient.get(`faqs/${id}`);

// export const createFaq = (data) => apiClient.post("/services", data);

// export const updateFaq = (id, data) =>
//   apiClient.put(`/services/${id}`, data);

// export const deleteFaq = (id) => apiClient.delete(`/services/${id}`);

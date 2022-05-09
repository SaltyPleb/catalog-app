import { $authHost } from "./index";

export const fetchHistory = async () => {
  const { data } = await $authHost.get("api/history");
  return data;
};

export const fetchHistoryByUserId = async (id) => {
  const { data } = await $authHost.get("api/history/" + id);
  return data;
};

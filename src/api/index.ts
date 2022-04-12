import { ContactQuery, NewsLetterUser } from "data/types";

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
export const publicAPIKey = process.env.NEXT_PUBLIC_API_KEY ?? "";

const getAPIUrl = (url: string) => {
  return `${apiBaseUrl}/public${url}`;
};

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${publicAPIKey}`,
  };
};

export const submitContactQuery = async (data: ContactQuery) => {
  return fetch(getAPIUrl("/contactquery"), {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders(),
  });
};

export const submitNewsLetterUser = async (data: NewsLetterUser) => {
  return fetch(getAPIUrl("/newsletteruser"), {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders(),
  });
};

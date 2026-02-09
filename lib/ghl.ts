import axios from "axios";

export const ghlClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GHL_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GHL_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  },
});

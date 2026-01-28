import { baseURL } from "@/resources";

export default async function sitemap() {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];
}

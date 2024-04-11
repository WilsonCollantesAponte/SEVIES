import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.ORIGIN}/`,
      lastModified: new Date(),
    },
  ];
}

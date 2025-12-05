import { categories } from "@/lib/calculators";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shortstayroi.com"; // <-- change to your domain

  // Main static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookie",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const, // explicitly as const
    priority: 0.8,
  }));

  // Dynamic calculator categories & calculators
  const calculatorPages = categories.flatMap((cat) => {
    const categoryUrl = `${baseUrl}/calculators/${cat.slug}`;
    const calcUrls = cat.calculators.map((calc) => ({
      url: `${categoryUrl}/${calc.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    return [
      {
        url: categoryUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      ...calcUrls,
    ];
  });

  return [...staticPages, ...calculatorPages];
}

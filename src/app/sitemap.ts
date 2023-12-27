import { MetadataRoute } from 'next';

const rootUrl = 'https://brijeshkumaryadav.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: rootUrl,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'weekly',
    },
  ];
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eofficeai.io.vn',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
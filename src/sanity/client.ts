import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'po12mj9t',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // fast cached reads for public blog
})

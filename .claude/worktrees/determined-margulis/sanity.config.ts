import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'banyan-global-learning',
  title: 'Banyan Global Learning',
  projectId: 'po12mj9t',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})

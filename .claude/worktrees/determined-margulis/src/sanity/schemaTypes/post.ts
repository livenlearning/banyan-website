import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in the blog index and SEO description.',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'AI in Education', value: 'ai-in-education' },
          { title: 'Global Learning', value: 'global-learning' },
          { title: 'Digital Citizenship', value: 'digital-citizenship' },
          { title: 'Virtual Field Trips', value: 'virtual-field-trips' },
          { title: 'SEL', value: 'sel' },
          { title: 'Teacher PD', value: 'teacher-pd' },
          { title: 'Online Learning', value: 'online-learning' },
          { title: 'News', value: 'news' },
        ],
      },
    }),
    defineField({
      name: 'body',
      title: 'Body (new posts)',
      type: 'blockContent',
      description: 'Use this for new posts written in Sanity. Leave blank for migrated posts.',
    }),
    defineField({
      name: 'legacyContent',
      title: 'Legacy Content (migrated from WordPress)',
      type: 'text',
      description: 'HTML content imported from WordPress. Do not edit this field — edit Body instead.',
    }),
  ],
  preview: {
    select: { title: 'title', date: 'publishedAt' },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'No date',
      }
    },
  },
})

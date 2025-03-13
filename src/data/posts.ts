export interface Post {
  title: string;
  url: string;
  date: string;
  description: string;
}

export interface GroupPost {
  title: string;
  baseUrl: string;
  posts: Post[];
}

export const groupPosts: GroupPost[] = [
  {
    title: "🚀 Contenido de Nuxt 3",
    baseUrl: "nuxt-content",
    posts: [
      {
        title: "Mejora el rendimiento de tu aplicación Nuxt 3",
        url: "improve-performance-nuxt3",
        date: "2024-03-10",
        description:
          "Optimiza tu aplicación Nuxt 3 con técnicas avanzadas para mejorar su rendimiento y SEO.",
      },
    ],
  },
];

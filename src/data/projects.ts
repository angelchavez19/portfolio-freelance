import IconHTML from "../components/icon/languages/html.astro";
import IconCSS from "../components/icon/languages/css.astro";
import IconJavaScript from "../components/icon/languages/javascript.astro";
import IconGithub from "../components/icon/tools/github.astro";
import IconTypeScript from "../components/icon/languages/typescript.astro";
import IconSass from "../components/icon/languages/sass.astro";
import IconNestJS from "../components/icon/frameworks/nestjs.astro";
import IconNuxt from "../components/icon/frameworks/nuxt.astro";
import IconPrisma from "../components/icon/frameworks/prisma.astro";
import IconFastAPI from "../components/icon/frameworks/fastapi.astro";
import IconVue from "../components/icon/frameworks/vue.astro";
import IconTailwind from "../components/icon/frameworks/tailwind.astro";
import IconMongoDB from "../components/icon/tools/mongodb.astro";
import IconYoutube from "../components/icon/social/youtube.astro";

export interface ProjectI {
  title: string;
  icon?: (_props: Record<string, any>) => any;
  image?: string;
  description: string;
  progress?: string;
  startDate: string;
  links: {
    icon: (_props: Record<string, any>) => any;
    text: string;
    url: string;
  }[];
  tech: {
    icon: (_props: Record<string, any>) => any;
    text: string;
  }[];
}

export const projects: ProjectI[] = [
  {
    title: "Puzzle Shop",
    image: "",
    description:
      "Implementación de un E-commerce de venta de puzzles como cubos de rubik y hanayamas.",
    progress: "En progreso",
    startDate: "10 de Mayo, 2025",
    links: [
      {
        icon: IconGithub,
        text: "Repositorio",
        url: "https://github.com/angelchavez19/puzzle-shop",
      },
    ],
    tech: [
      { icon: IconTailwind, text: "Tailwind" },
      { icon: IconNuxt, text: "Nuxt" },
      { icon: IconNestJS, text: "NestJS" },
      { icon: IconMongoDB, text: "MongoDB" },
    ],
  },
  {
    title: "Nuxt Auth Template",
    image:
      "https://raw.githubusercontent.com/angelchavez19/nuxt-auth-template/refs/heads/main/nuxt-auth-template.png",
    description:
      "Template de autenticación para Nuxt.js integrado con Nest Auth Template.",
    startDate: "18 de Enero, 2025",
    links: [
      {
        icon: IconGithub,
        text: "Repositorio",
        url: "https://github.com/angelchavez19/nuxt-auth-template",
      },
    ],
    tech: [
      { icon: IconSass, text: "Sass" },
      { icon: IconNuxt, text: "Nuxt" },
    ],
  },
  {
    title: "Nest Auth Template",
    image:
      "https://raw.githubusercontent.com/angelchavez19/nest-auth-template/refs/heads/main/nest-auth-template.png",
    description: "Template de autenticación para Nest.js",
    startDate: "2 de Noviembre, 2024",
    links: [
      {
        icon: IconGithub,
        text: "Repositorio",
        url: "https://github.com/angelchavez19/nest-auth-template",
      },
    ],
    tech: [
      { icon: IconNestJS, text: "NestJS" },
      { icon: IconPrisma, text: "Prisma" },
    ],
  },
  {
    title: "Acortador de URLs",
    image:
      "https://raw.githubusercontent.com/angelchavez19/url-shortener/refs/heads/main/url-shortener.jpg",
    description: "Desarrollo de un servicio de acortador de URLs",
    startDate: "16 de Septiembre, 2024",
    links: [
      {
        icon: IconGithub,
        text: "Repositorio",
        url: "https://github.com/angelchavez19/url-shortener",
      },
    ],
    tech: [
      { icon: IconHTML, text: "HTML" },
      { icon: IconCSS, text: "CSS" },
      { icon: IconJavaScript, text: "JavaScript" },
      { icon: IconNestJS, text: "NestJS" },
      { icon: IconPrisma, text: "Prisma" },
    ],
  },
  {
    title: "Mini Clon de Google Drive",
    image:
      "https://raw.githubusercontent.com/angelchavez19/google-drive-clone-v1/refs/heads/main/google-drive-clone-v1.png",
    description: "Desarrollo de un mini clon de Google Drive",
    startDate: "19 de Marzo, 2024",
    links: [
      {
        icon: IconGithub,
        text: "Repositorio",
        url: "https://github.com/angelchavez19/google-drive-clone-v1",
      },
      {
        icon: IconYoutube,
        text: "Demo",
        url: "https://youtu.be/cA-ixmOaHZY",
      },
    ],
    tech: [
      { icon: IconFastAPI, text: "FastAPI" },
      { icon: IconVue, text: "Vue" },
      { icon: IconSass, text: "SASS" },
    ],
  },
];

export const workingNow: ProjectI[] = [projects[0]];

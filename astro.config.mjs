import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://authfailed.github.io",
  base: "/flomaster",
  integrations: [
    starlight({
      title: "Фломастер",
      social: {
        github: "https://github.com/AuthFailed/flomaster/",
        telegram: "https://t.me/+jH1mblw0ytcwOWUy",
      },
      sidebar: [
        {
          label: "🏠 Главная",
          link: "/",
        },
        { label: "👋 База", link: "/chat-phrases" },
        {
          label: "Технические вопросы",
          autogenerate: { directory: "chat-phrases/tech" },
        },
        {
          label: "Абонентские вопросы",
          autogenerate: { directory: "chat-phrases/abon" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/authfailed/flomaster/edit/main/",
      },
      locales: {
        root: {
          label: "Russian",
          lang: "ru",
        },
      },
    }),
  ],
});

---
title: "Mejora el rendimiento de tu aplicación Nuxt 3"
layout: "../../../layouts/md.astro"
---

### **🚀 Mejora el rendimiento de tu aplicación Nuxt 3**

📅 _Publicado el 13 de marzo de 2025_

#### **Introducción**

Nuxt 3 ha revolucionado el desarrollo de aplicaciones web con su enfoque híbrido para el renderizado (SSR, SSG e ISR), pero **optimizar el rendimiento** sigue siendo clave para garantizar una buena experiencia de usuario y un mejor posicionamiento en buscadores (SEO).

En este artículo, exploraremos estrategias para mejorar el rendimiento en Nuxt 3, desde la carga diferida hasta la optimización del servidor.

---

## **1️⃣ Usa el modo híbrido de renderizado**

Nuxt 3 permite mezclar distintos modos de renderizado según la página:

- **SSR (Server-Side Rendering)** para contenido dinámico.
- **SSG (Static Site Generation)** para contenido estático.
- **ISR (Incremental Static Regeneration)** para regenerar páginas dinámicamente.

💡 **Ejemplo:**  
Si tienes un blog, puedes hacer que la lista de posts se genere estáticamente (**SSG**), pero que los detalles de cada post usen **SSR** si cambian con frecuencia:

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/blog"],
    },
  },
});
```

---

## **2️⃣ Carga diferida de componentes (Lazy Loading)**

Importar todos los componentes de golpe puede ralentizar la carga inicial. Usa `defineAsyncComponent` para cargar solo cuando se necesiten:

```vue
<script setup>
import { defineAsyncComponent } from "vue";

const PostCard = defineAsyncComponent(() =>
  import("@/components/PostCard.vue")
);
</script>

<template>
  <div>
    <PostCard v-if="showPost" />
  </div>
</template>
```

✅ Esto reduce el tiempo de carga inicial y mejora el rendimiento.

---

## **3️⃣ Optimización de imágenes con Nuxt Image**

Las imágenes grandes pueden afectar el rendimiento. Usa `@nuxt/image` para optimizar imágenes automáticamente:

```vue
<template>
  <NuxtImg src="/imagen.jpg" width="800" height="600" format="webp" />
</template>
```

💡 Esto sirve para ajustar tamaños, cambiar formatos y aplicar lazy loading.

---

## **4️⃣ Uso de Middleware en el Servidor**

Si necesitas autenticación o manipulación de respuestas, usa middlewares en Nitro:

```ts
export default defineEventHandler((event) => {
  console.log(`Nueva petición: ${getRequestURL(event)}`);
});
```

💡 Evita cargar datos innecesarios y usa caché donde sea posible.

---

## **5️⃣ Reduce el tamaño del bundle**

Para minimizar el tamaño del bundle, asegúrate de:  
✅ Usar `import()` en lugar de `import` estático.  
✅ Evitar dependencias innecesarias.  
✅ Activar la optimización en `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  build: {
    analyze: true,
    transpile: ["vue-toastification"],
  },
});
```

---

## **Conclusión**

Optimizar Nuxt 3 es clave para mejorar la velocidad y la experiencia del usuario. Implementando estas estrategias, puedes hacer que tu aplicación sea más rápida y eficiente.

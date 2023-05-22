# vuepress-plugin-custom-authors

Add custom authors to the VuePress.

## Install

```shell
yarn add vuepress-plugin-custom-authors
```

## Config

Add it to your Vuepress configuration's plugin list:

```javascript
// .vuepress/config.ts
import { defineUserConfig } from 'vuepress';
import { customAuthorsPlugin } from 'vuepress-plugin-custom-authors';

export default defineUserConfig({
  plugins: [
    customAuthorsPlugin({
      label: 'Your Custom Label', // Custom label text, default: Authors
    }),
  ],
});
```

## Usage

Add `authors` at the frontmatter of the markdown document:

```markdown
---
authors: AuthorA, AuthorB
---
```

Display anywhere in the component:

```vue
<script setup lang="ts">
import { computed } from 'vue';
import { usePageData } from '@vuepress/client';

const page = usePageData();

const authors = computed(() => ({
  label: page.value.authorLabel,
  name: page.value.authors,
}));
</script>

<template>
  <p>
    <span>{{ authors.label }}: </span>
    <span>{{ authors.name }}</span>
  </p>
</template>
```

interface AuthorOptions {
  label?: string;
}

export const customAuthorsPlugin = (options?: AuthorOptions) => {
  return app => {
    return {
      name: 'vuepress-plugin-custom-authors',
      extendsPage: async page => {
        page.data.authorLabel =
          page.frontmatter?.authorLabel ?? options?.label ?? 'Authors';
        page.data.authors = page.frontmatter?.authors ?? '';
      },
    };
  };
};

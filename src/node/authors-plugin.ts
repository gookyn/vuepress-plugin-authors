interface AuthorOptions {
  label?: string;
}

export const authorsPlugin = (options?: AuthorOptions) => {
  return app => {
    return {
      name: 'vuepress-plugin-authors',
      extendsPage: async page => {
        page.data.authorLabel =
          page.frontmatter?.authorLabel ?? options?.label ?? 'Authors';
        page.data.authors = page.frontmatter?.authors ?? '';
      },
    };
  };
};

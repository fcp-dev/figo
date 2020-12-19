const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const oldPage = Object.assign({}, page);
  if (page.path.includes('/news/news')) {
    deletePage(oldPage);
    return;
  }
  const language = page.context.i18n.language;
  const baseUrl = language === 'de' ? '' : `/${language}`;

  if (page.path.includes('/teams/team')) {
    deletePage(oldPage);
    for (let teamId of [1, 2, 3]) {
      page.path = `${baseUrl}/teams/${teamId}`;
      page.matchPath = `${baseUrl}/teams/${teamId}`;
      createPage({
        ...page,
        context: {
          ...page.context,
          locale: language,
          teamId: teamId
        }
      });
    }
    return;
  }
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: language
    }
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/news/" }, fields: { locale: { eq: "de" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const newsList = result.data.allMarkdownRemark.edges;
  newsList.forEach((news) => {
    createPage({
      path: news.node.fields.slug,
      component: `${__dirname}/src/pages/news/news.tsx`,
      context: {
        slug: news.node.fields.slug
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath.includes('/news/')) {
    const filePath = createFilePath({ node, getNode, trailingSlash: false });
    const [slug, lang] = filePath.split('.');

    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'locale', value: lang === null ? 'de' : lang });
  }
}
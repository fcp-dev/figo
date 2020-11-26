exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const oldPage = Object.assign({}, page);

  const language = page.context.i18n.language;
  const baseUrl = language === 'de' ? '' : `/${language}`;

  if (page.path === `${baseUrl}/teams/team/`) {
    page.path = `${baseUrl}/teams/*`;
    page.matchPath = `${baseUrl}/teams/*`;
  }
  if (page.path === `${baseUrl}/news/news/`) {
    page.path = `${baseUrl}/news/*`;
    page.matchPath = `${baseUrl}/news/*`;
  } 
  if (oldPage.path !== page.path) {
    deletePage(oldPage);
    createPage(page);
  } 
}
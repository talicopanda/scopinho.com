const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        path
                    }
                }
            }
        }`);
    
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve('./src/templates/article.js'),
            context: { path_addr: node.frontmatter.path }
        })
    });

}
const path = require('path');

 exports.createPages = ({actions, graphql}) => {
     const {createPage} = actions;

     const postTemplate = path.resolve('src/templates/post.js');

//grabs every single one of our posts
    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }

        //array of all of our pages, iterates, created with path and component
        res.data.allMarkdownRemark.edges.forEach( ({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
 }
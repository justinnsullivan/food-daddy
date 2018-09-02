module.exports = {
    siteMetadata: {
        title: '🌶 FOOD DADDY 🌶',
        author: 'JT Friedman',
        description:
            'Brooklyn Food Daddy blog featuring recipes, restaurants, baking and yolks!'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: ['src/styles']
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: []
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
        'gatsby-plugin-netlify' // make sure to keep it last in the array
    ]
};

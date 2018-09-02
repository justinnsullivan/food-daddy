import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './index.scss';

export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;
        return (
            <div className={'home'}>
                {posts.map(({ node: post }) => (
                    <div className="post-preview" key={post.id}>
                        <div
                            onClick={() => window.___navigateTo(post.fields.slug)}
                            className="thumbnail"
                            style={{
                                backgroundImage: `url('${post.frontmatter
                                    .thumbnail || null}')`
                            }}
                        />
                        <h3>
                            <Link to={post.fields.slug}>
                                {post.frontmatter.title}
                            </Link>
                        </h3>
                        <p className="date">{post.frontmatter.date}</p>
                        <p className="excerpt">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        thumbnail
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;

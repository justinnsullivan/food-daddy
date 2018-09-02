import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

import './blog-post.scss'

export class BlogPostTemplate extends React.Component {
    static propTypes = {
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
            .isRequired,
        contentComponent: PropTypes.func,
        date: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string
    };
    render() {
        const {
            content,
            contentComponent,
            date,
            description,
            tags,
            title,
            helmet
        } = this.props;

        const PostContent = contentComponent || Content;
        return (
            <div className="blog-post">
                {helmet || ''}
                <h3>{title}</h3>
                <p className="date">{date}</p>
                <p>{description}</p>
                <div className="content">
                    <PostContent content={content} />
                </div>
            </div>
        );
    }
}

export default class BlogPost extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            markdownRemark: PropTypes.object
        })
    };
    render() {
        const { markdownRemark: post } = this.props.data;
        console.log(post)
        return (
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        );
    }
}

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                thumbnail
            }
        }
    }
`;

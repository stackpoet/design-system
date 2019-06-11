import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import { Alert } from '../components/Alert/Alert';

const PostTemplate = ({ data }) => {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h2>{data.markdownRemark.frontmatter.date}</h2>
        <h3>{data.markdownRemark.frontmatter.status}</h3>
        <div>{renderAst(data.markdownRemark.htmlAst)}</div>
      </div>
    </div>
  );
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { Alert: Alert }
}).Compiler;

export default PostTemplate;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        status
      }
    }
  }
`;

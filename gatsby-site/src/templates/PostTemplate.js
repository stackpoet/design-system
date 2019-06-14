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
        <p>Status: {data.markdownRemark.frontmatter.status}</p>

        <div className="body-section">{renderAst(data.markdownRemark.htmlAst)}</div>
        // Trying to render the plain HTML example here
        <iframe src={data.markdownRemark.frontmatter.example}>Add Source here</iframe>
      </div>
    </div>

  );
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "alert": Alert }
  // NOTE: the key has to be in small-caps.
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
        example
      }
    }
  }
`;

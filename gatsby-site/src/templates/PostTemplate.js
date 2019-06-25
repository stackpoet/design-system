import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { pageExamples } from '../pages/pageExamples';

const PostTemplate = ({ data }) => {
  const examples = pageExamples[data.markdownRemark.frontmatter.title];
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h2>{data.markdownRemark.frontmatter.date}</h2>
        <p>Status: {data.markdownRemark.frontmatter.status}</p>

        <h3>HTML example: </h3>
        <div dangerouslySetInnerHTML={{ __html: examples.htmlExample }} />

        <h3>React example: </h3>
        <div>{examples.reactExample}</div>
      </div>
    </div>
  );
};

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

PostTemplate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })
};

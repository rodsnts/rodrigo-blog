const GET_POSTS = /* GraphQL */ `
  query GET_POSTS {
    posts {
      data {
        id
        attributes {
          title
          slug
          datePosted
          content
          postedBy
          locale
        }
      }
    }
  }
`;

export default GET_POSTS;

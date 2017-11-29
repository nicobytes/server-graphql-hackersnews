const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client'
  },
];

const resolvers = {
  Query: {
    allLinks: () => links,
  },
  Mutation: {
    createLink: (_, params) => {
      const newLink = {
        id: links.length + 1,
        ...params.link
      }
      links.push(newLink);
      return newLink;
    }
  },
};

module.exports = resolvers;
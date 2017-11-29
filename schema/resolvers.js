const Link = require('./../models/Link');
const User = require('./../models/User');

const resolvers = {
  Query: {
    allLinks: () => Link.query().eager('postedBy'),
    allUsers: () => User.query().eager('links'),
  },
  Mutation: {
    createLink: (_, params) => {
      return Link.query().eager('postedBy').insert(params.link)
    },
    updateLink: (_, params) => {
      return Link.query().patchAndFetchById(params.id, params.link)
    },
    deleteLink: (_, params) => {
      return Link
      .query()
      .findById(params.id)
      .then((link) => {
        return Link.query().deleteById(params.id)
        .then(() => link);
      })
    },
    createUser: (_, params) => {
      return User.query().insert(params.user)
    },
  },
};

module.exports = resolvers;
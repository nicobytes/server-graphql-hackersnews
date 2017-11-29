const Link = require('./../models/Link');
const User = require('./../models/User');

const resolvers = {
  Query: {
    allLinks: () => Link.query().eager('users'),
    allUsers: () => User.query(),
  },
  Mutation: {
    createLink: (_, params) => {
      return Link.query().insert(params.link)
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
    }
  },
};

module.exports = resolvers;
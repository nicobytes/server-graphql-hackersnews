const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const LinkDef = require('./Link');
const UserDef = require('./User');

const rootQuery = `
type Query {
  allLinks: [Link!]
  allUsers: [User!]
}
type Mutation {
  createLink(link: newLink): Link
  updateLink(id: Int!, link: updateLink): Link
  deleteLink(id: Int!): Link
}
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery, LinkDef, UserDef],
  resolvers
});
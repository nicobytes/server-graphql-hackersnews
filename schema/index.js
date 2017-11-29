const { makeExecutableSchema } = require('graphql-tools');

const LinkDef = require('./Link')


// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
  typeDefs: [LinkDef]
});
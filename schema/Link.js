const LinkDef = `
# Representa un link
type Link {
  # Es el id unico
  id: ID!
  url: String!
  description: String!
}

input newLink{
  url: String!
  description: String!
}
`;

module.exports = LinkDef;
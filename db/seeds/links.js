
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {
          id: 1,
          url: 'http://graphql.org/',
          description: 'The Best Query Language',
          postedBy: 1
        },
        {
          id: 2,
          url: 'http://dev.apollodata.com',
          description: 'Awesome GraphQL Client',
          postedBy: 1
        },
        {
          id: 3,
          url: 'http://devode.la',
          description: 'Devcode',
          postedBy: 1
        },
      ]);
    });
};

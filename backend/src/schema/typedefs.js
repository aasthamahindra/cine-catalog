const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        getMovies: [Movie]
    }
    type Mutation {
        addMovie(name: String!, genre: String!, image: String!, year: String): Movie
    }
    type Movie {
        name: String,
        genre: String,
        year: String,
        image: String
    }
`;

module.exports = { typeDefs };

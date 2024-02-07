const gql = require('graphql-tag');

const typeDefs = gql`
    type Movie {
        name: String,
        genre: String,
        year: String,
        image: String
        error: String
    }

    type User {
        username: String
        email: String
        password: String
        role: String
    }

    type SignInResponse {
        token: String
        error: String
    }

    type SignUpResponse {
        token: String
        error: String
    }

    type Query {
        getMovies: [Movie],
        getUsers: [User] 
    }

    type Mutation {
        addMovie(name: String!, genre: String!, image: String!, year: String): Movie
        signUp(email: String!, username: String, password: String!, role: String): SignUpResponse
        signIn(email: String!, password: String!): SignInResponse
    }
`;

module.exports = { typeDefs };

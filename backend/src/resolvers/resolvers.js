const { model } = require('../models/movie.models');

const resolvers = {
    Query: {
        getMovies: async (parent, args) => {
            const movies = await model.find({});
            if (movies.length > 0) {
                return movies;
            } else {
                return [];
            } 
        },
    },
    Mutation: {
        addMovie: (parent, args) => {
            let movies = new model({
                name: args.name,
                genre: args.genre,
                year: args.year,
                image: args.image,
            })
            movies.save();
            return movies;
        },
    },
};

module.exports = {
    resolvers,
};

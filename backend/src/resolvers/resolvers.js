require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { movieModel } = require('../models/movie.models');
const { userModel } = require('../models/user.models')

const resolvers = {
    Query: {
        getMovies: async (parent, args) => {
            const movies = await movieModel.find({});
            if (movies.length > 0) {
                return movies;
            } else {
                return [];
            } 
        },

        getUsers: async () => {
            const user = await userModel.find({});
            return user;
        }
    },
    Mutation: {
        addMovie: async (parent, args) => {
            const { name, genre, year, image} = args;

            let movies = new movieModel({
                name,
                genre,
                year,
                image,
            })
            movies.save();
            return movies;
        },

        signIn: async (parent, args, context, info) => {
            const { email, password } = args;
            const user = await userModel.findOne({ email });

            // if no user is found
            if (!user) {
                return { error: "User doesn't exist! Please sign up." }
            } else {
                // check password: if it doesn't match throw authentication error
                const validate = await bcrypt.compare(password, user.password).then((result) => {
                    return result;
                }).catch(e => { return { error: e} } );
                if (!validate) {
                    return { error: "Password doesn't match!" };
                } else {
                    return {
                        token: jwt.sign(
                            { id: user._id },
                            process.env.SECRET,
                        )
                    }
                }
            }
        },

        signUp: async (parent, args, context, info) => {
            const { email, password, username } = args;
            let { role } = args;
            const existingUser = await userModel.findOne({ email });

            if (existingUser) {
                return { error: 'User already exists! Please sign in.'};
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);

                if (!role) {
                    role = 'reader';
                };
                
                const user = new userModel({
                    email,
                    username,
                    role,
                    password: hashPassword
                });
                user.save();
                return {
                    message: 'User created successfully',
                    user,
                    token: jwt.sign(
                        { id: user._id },
                        process.env.SECRET,
                    )
                }
            }
        },
    },
};

module.exports = {
    resolvers,
};

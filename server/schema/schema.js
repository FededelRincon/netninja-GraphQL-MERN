const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;


//dummy data
var books = [
    { pages: 100 , name: 'name of the wind', genre: 'Fantasy', id: '1'},
    { pages: 200, name: 'The final empire', genre: 'Fantasy', id: '2'},
    { pages: 300, name: 'The long Earth', genre: 'Sci-fi', id: '3'},
];



const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        // pages: { type: GraphQLInt }, // si quisiera tener mas campos habilitados los "creo aca"
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},   // si quiero tener mas busquedas
            resolve(parent, args){
                //code to get data from db
                return books.find(book => book.id == args.id);
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
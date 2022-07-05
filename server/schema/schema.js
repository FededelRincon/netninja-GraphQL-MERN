const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString,  //tipo de strings
    GraphQLInt,     //tipo de numeros
    GraphQLID,  // tipo id, osea buscar en query funciona tanto con '2' o como 2
    GraphQLSchema 
} = graphql;


//dummy data
var books = [
    { name: 'name of the wind', genre: 'Fantasy', id: '1'},
    { name: 'The final empire', genre: 'Fantasy', id: '2'},
    { name: 'The long Earth', genre: 'Sci-fi', id: '3'},
];

var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1'},
    { name: 'Brandon Sanderson', age: 42, id: '2'},
    { name: 'Terry Pratchett', age: 66, id: '3'},
];



const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        // pages: { type: GraphQLInt }, // si quisiera tener mas campos habilitados los "creo aca"
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},   // si quiero tener mas busquedas
            resolve(parent, args){
                //code to get data from db
                return books.find(book => book.id == args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return authors.find(author => author.id == args.id);
            }
        },
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
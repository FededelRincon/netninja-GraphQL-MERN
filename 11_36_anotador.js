// Segun graphql todas las busquedas tienen esta forma
//      {
//        field(arg: "value") {
//          subField
//        }
//      }




// usando la dummy data
    var books = [
        {name: 'name of the wind', genre: 'Fantasy', id: '1'},
        {name: 'The final empire', genre: 'Fantasy', id: '2'},
        {name: 'The long Earth', genre: 'Sci-fi', id: '3'},
    ];

// y teniendo esto como resolve en el  RootQuery
    return books.find(book => book.id == args.id);


// ingresamos a http://localhost:4000/graphql

//y podemos setear esta busqueda para obtener cosas de la dummy data
// lado izquierdo de graphiQL: peticion
//    {
//        book(id:"1" ) {
//        id,
//        name,
//        genre
//        }
//    }


// lado derecho de graphiQL: resultado
// {
//     "data": {
//       "book": {
//         "id": "1",
//         "name": "name of the wind",
//         "genre": "Fantasy",
//         "__typename": "Book"
//       }
//     }
//   }
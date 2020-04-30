# graphql-playlist

All course files for the GraphQL tutorial playlist on The Net Ninja YouTube channel.

Node modules are not included in the course files. After download, run npm install to install the modules (client and server folders)

## Server

Pour lancer le server

```bash
cd server
npx nodemon app.js
```

http://localhost:4000/graphql

### Exemple de queries avec graphiQL

```graphql
{
  book(id: "1") {
    name
    genre
    id
  }
}
```

```
{
  author(id: 1) {
    name
    age
    id
  }
}
```

```
{
  book(id: "5ea9e47b35194ab5f222233a") {
    name
    genre
    author {
      name
    }
  }
}
```

```
/* tous les book avec le nom et l'age de l'auteur
{
  books {
    name
    author{
      name
      age
    }
  }
}
```

### Mutation

```
mutation{
  addAuthor(name: "Terry Pratchett", age: 66){
    name
    age
  }
}


mutation{
  addBook(name: "Name of the Wind", genre: "Fantasy", authorId:"5ea9e304cdfa53b5c5841df3" ){
    name
    genre
  }
}
```

jlumineau1@gmail
atlas db user : jlum85

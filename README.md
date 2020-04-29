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
  book(id: "1") {
    name
    genre
    author{
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

jlumineau1@gmail
atlas jlum85

mongodb+srv://jlum85:<password>@jl-graphql-wz2uj.mongodb.net/test?retryWrites=true&w=majority

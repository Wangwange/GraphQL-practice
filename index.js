const graphqlYoga = require("graphql-yoga");
const resolvers = require("./graphql/resolvers");

const server = new graphqlYoga.GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server Running!"));

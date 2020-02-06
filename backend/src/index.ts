import { GraphQLServer, PubSub } from "graphql-yoga";
import connection from "./ormConfig";
import schema from "./schema";

//웹소켓
//subscription
const pubSub = new PubSub();
//그래프큐엘서 안에 웹소켓 넣어ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓ
// mutation, query 
const server = new GraphQLServer({schema, context:{pubSub}});

connection.then(() => 
    server.start(() =>
      console.log("My first GraphQL Server is running on localhost:4000")
    )
);

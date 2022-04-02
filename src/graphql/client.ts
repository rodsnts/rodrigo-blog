import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`);

client.setHeader("Authorization", `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);

export default client;

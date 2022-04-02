import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(`http://localhost:1337/graphql`);

client.setHeader("Authorization", `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);

export default client;

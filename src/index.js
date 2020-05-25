const {GraphQLServer} = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Herd = require('./resolvers/Herd')
const User = require('./resolvers/User')
const {prisma} = require('./generated/prisma-client')
const {GraphQLUpload} = require('graphql-upload')
const {storeUpload} = require('./helpers/upload')
const {typeDefs} = require('./schema.graphql')
const {makeExecutableSchema} = require('graphql-tools')

const listenPort = process.env.PORT || 4000;

const resolvers = {
    Query,
    Mutation,
    Herd,
    User,
    Upload: GraphQLUpload
}
const schema = makeExecutableSchema({typeDefs,resolvers})
const server = new GraphQLServer({
    schema,
    context: request=> ({...request,prisma,storeUpload})
})
server.start({ port: listenPort }, ({ port }) =>
    console.log(
        `Mokine GraphQl Server Started, is running on http://localhost:${port}`
    )
)

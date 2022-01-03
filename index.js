const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-grapql')
const gql = require('graphql-tag')
const { buildSchema } = require('graphql')
require('dotenv').config();

const app = express()
app.use(cors())

const schema = buildSchema(`
    type Query {
        data: String
    }
`)

const rootValue = {
    name: () => 'Necmi'
}

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
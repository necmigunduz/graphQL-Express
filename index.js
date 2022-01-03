const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-grapql')
const gql = require('graphql-tag')
const { buildSchema } = require('graphql')

const app = express()
app.use(cors())

const schema = buildSchema(`
    type Query {
        name: String
    }
`)


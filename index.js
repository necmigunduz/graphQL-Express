const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const body_parser = require('body-parser')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(body_parser.json())

app.use('/graphql', graphqlHTTP({
    schema: defineSchema(),
    rootValue: {
        library: getLibrary()
    },
    graphiql: true
 }))

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
})

function defineSchema() {
    var schema = null
    schema = buildSchema(`
        type MainQuery {
            library: [String!]!
        }
        type MainMutation {
            recordBook(title: String): String
        }
        schema {
            query: MainQuery
            mutation: MainMutation
        }
    `)
    return schema
}

function getLibrary() {
    return [
        "A tale of two cities",
        "In the chest of a woman",
        "Things fall apart"
    ]
}
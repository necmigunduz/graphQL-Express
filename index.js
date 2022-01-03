const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-grapql')
const gql = require('graphql-tag')
const { buildSchema } = require('graphql')


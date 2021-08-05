import { Client } from 'faunadb'

console.log(process.env.FAUNADB_SECRET_KEY)

export const fauna = new Client({
  secret: process.env.FAUNADB_SECRET_KEY,
  domain: 'db.us.fauna.com'
})

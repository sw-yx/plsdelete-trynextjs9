// import INDEX from "./resources/index.js"

// const express = require("express")
// const serverless = require("serverless-http")
// const app = express()

// app.use("*", (res, req) => {
//   const app = INDEX({ dev: true, dir: process.cwd() })
//   console.log({ app })
//   // const handler = app.getRequestHandler()
//   // handler(req, res)

//   // console.log("hihihih", app, INDEX.name, INDEX.length)
//   req.json({ foo: "bar" })
// })

// export const handler = serverless(app)

// // const bodyParser = require('body-parser');

// // function updateDatabase(data) {
// //   ... // update the database
// //   return newValue;
// // }

// // app.use(bodyParser);

const compat = require("next-aws-lambda")
const page = require("../.next/serverless/pages/resources/index.js")

module.exports.handler = (event, context, callback) => {
  const { req, res } = compat(page)(event, callback)
  page.render(req, res)
}

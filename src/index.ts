import "reflect-metadata"
import express from "express"
import * as bodyParser from "body-parser"
import routes from "./routes"
import { createConnection } from "typeorm"
import cors from "cors"

const app = express()
createConnection()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('Servidor em execução.')  
}) 

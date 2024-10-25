import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { ReserveRouter } from './routers/reserve';
import { TeamsRouter } from './routers/teams';

const app = express();

app.use(cors({
  // Edit origin when the frontend server ready
  origin: ['http://localhost'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/teams", TeamsRouter)
app.use("/api/reserve", ReserveRouter)
app.listen(3000, () => console.log("Server opened."))

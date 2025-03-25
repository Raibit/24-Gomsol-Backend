import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import { ManagingRouter } from './routers/managing';
import { ReserveRouter } from './routers/reserve';
import { TeamsRouter } from './routers/teams';

config();
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
app.use("/api/manage", ManagingRouter)
app.listen(3000, () => console.log("Server opened."))

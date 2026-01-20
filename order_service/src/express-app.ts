import express, {Request, Response} from 'express';
import cors from "cors";

const app  = express();
app.use(cors());
app.use(express.json());

app.use("/", (req: Request, res: Response) => {
    return res.status(200).json({message: "I am Healthy"});
});

export default app;

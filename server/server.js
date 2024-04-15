import express from 'express';
import cors from 'cors';
import records from './routes/records.js';

const PORT = process.env.PORT || 5000;//access the port from the environment variable
const app = express();

app.use(cors());
app.use(express.json());
app.use('/records', records);
//this starts the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
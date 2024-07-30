import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import sequelize from './sequelize.js';

import nopelRoutes from './routes/nopel.js';

dotenv.config()

const app = express();
const PORT = process.env.DB_PORT || 5000

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("WELCOME TO UPT4 NOPEL TRACKING APPLICATION!")
});

app.use('/nopel', nopelRoutes);

// SEQUELIZE CONNECTION TO MYSQL SERVER -> Sync the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });


app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port: ${PORT}`);
});
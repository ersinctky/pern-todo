const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const dotenv = require('dotenv');

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('app has started on localhost 5000');
});

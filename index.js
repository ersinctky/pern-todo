const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('app has started on localhost 5000');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  
  console.log(`Received form submission: ${name}, ${email}, ${message}`);

  res.send('Thanks for submitting the form!');
});

app.listen(5500, () => {
  console.log('Server is listening on port 3000');
});
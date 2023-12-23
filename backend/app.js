const express = require('express');
const bodyParser = require('body-parser');
const { login } = require('./authentication'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await login(email, password);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ message: result.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

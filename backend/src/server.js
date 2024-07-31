const app = require('./app');
require('dotenv').config();

//define the port that the server will run on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
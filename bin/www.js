const app = require('../app');
const port = 8000;

app.listen(port, () => {
    console.log(`memo app listening on port ${port}`)
  });

  module.exports = app;
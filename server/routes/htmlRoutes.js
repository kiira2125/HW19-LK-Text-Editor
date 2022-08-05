const path = require('path');

module = (app) => 
  app.get('/', (req, res) => 
    res.sendFile(path.join(_dirname, '../client/dist/index.html'))
  );
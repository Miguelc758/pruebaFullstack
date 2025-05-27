const app = require('./server/app');
const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

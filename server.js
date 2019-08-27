import http from 'http';  
import app from './app';

import db from './database';

db();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app)
server.listen(PORT)
console.log(`server running on port ${PORT}`);

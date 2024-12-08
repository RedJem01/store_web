const express = require('express');
const app = express();
app.use(express.json());
app.listen(5432., () => 'Server running on port 5432')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

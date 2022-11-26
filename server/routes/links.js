const express = require('express');
const { join } = require('path');
const router = express.Router();

const database = require(join(require.main.path, '../database/config/database'));

module.exports = router;
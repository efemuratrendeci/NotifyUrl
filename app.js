//
// ─── REQUIREMENTS ───────────────────────────────────────────────────────────────
//
const PORT = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');

// ────────────────────────────────────────────────────────────────────────────────

const app = express();
app.use(bodyParser.json());
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.post('/notify/:key', (req, res, next) => {
    console.log(req.params.key);
    console.log(req.body);
});

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── LISTEN ─────────────────────────────────────────────────────────────────────
//


const server = require('http').createServer(app);
server.listen(PORT);

// ────────────────────────────────────────────────────────────────────────────────
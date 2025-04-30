// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load comments from JSON file
function loadComments() {
    try {
        const data = fs.readFileSync('comments.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Save comments to JSON file
function saveComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}
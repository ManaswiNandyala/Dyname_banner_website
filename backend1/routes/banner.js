const express = require('express');
const router = express.Router();
const db = require('../db');

// Create Banner
router.post('/banner', (req, res) => {
    const { description, timer, link, visibility } = req.body;
    const query = 'INSERT INTO banner (description, timer, link, visibility) VALUES (?, ?, ?, ?)';
    db.query(query, [description, timer, link, visibility], (err, result) => {
        if (err) {
            console.error('Error creating banner:', err);
            return res.status(500).send('Error creating banner');
        }
        res.status(201).send('Banner created successfully');
    });
});

// Update Banner
router.put('/banner/:id', (req, res) => {
    const { id } = req.params;
    const { description, timer, link, visibility } = req.body;
    const query = 'UPDATE banner SET description = ?, timer = ?, link = ?, visibility = ? WHERE id = ?';
    db.query(query, [description, timer, link, visibility, id], (err, result) => {
        if (err) {
            console.error('Error updating banner:', err);
            return res.status(500).send('Error updating banner');
        }
        res.send('Banner updated successfully');
    });
});

// Delete Banner
router.delete('/banner/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM banner WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting banner:', err);
            return res.status(500).send('Error deleting banner');
        }
        res.send('Banner deleted successfully');
    });
});

// Get Banner
router.get('/banner', (req, res) => {
    const query = 'SELECT * FROM banner WHERE visibility = true';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching banner:', err);
            return res.status(500).send('Error fetching banner');
        }
        res.json(results);
    });
});

module.exports = router;

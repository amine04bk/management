// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route to add a new review (public access)
router.post('/', reviewController.addReview);

// Route to get all reviews (public access)
router.get('/', reviewController.getAllReviews);

// Route to delete a review (manager-only access)
router.delete('/:id', reviewController.deleteReview);

module.exports = router;

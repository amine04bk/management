// backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authenticate = require('../middleware/authMiddleware');

// Get Profile
router.get('/profile', authenticate, profileController.getProfile);

// Update Profile
router.put('/profile', authenticate, profileController.updateProfile);

// Submit Vacation Request
router.post('/vacation', authenticate, profileController.requestVacation);

module.exports = router;

// backend/controllers/profileController.js
const Profile = require('../models/Profile');

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  const { firstName, lastName, phone, photo } = req.body;
  try {
    const profile = await Profile.findOneAndUpdate(
      { userId: req.user._id },
      { firstName, lastName, phone, photo },
      { new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile' });
  }
};

// Request Vacation
exports.requestVacation = async (req, res) => {
  const { startDate, endDate } = req.body;
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    profile.vacationRequests.push({ startDate, endDate });
    await profile.save();
    res.status(201).json({ message: 'Vacation request submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting vacation request' });
  }
};

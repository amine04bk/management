// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem', // Referencing the Menu Item model
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'ready', 'completed'],
    default: 'pending',
  },
  waiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming 'User' model for waiters, chefs, etc.
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new order (restricted to managers and waiters)
router.post('/', authMiddleware(['manager', 'waiter']), orderController.createOrder);

// Route to get all orders (restricted to managers and chefs)
router.get('/', authMiddleware(['manager', 'chef']), orderController.getAllOrders);

// Route to update an order status (restricted to chefs for marking as "ready")
router.put('/:id', authMiddleware(['chef']), orderController.updateOrderStatus);

// Route to delete an order (restricted to managers)
router.delete('/:id', authMiddleware(['manager']), orderController.deleteOrder);

module.exports = router;

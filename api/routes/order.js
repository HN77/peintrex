import express from 'express';
import Order from '../models/order.js';
import asyncHander from '../middlewares/asyncHandler.js';

const router = express.Router();

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post(
  '/api/orders',
  asyncHander(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items found');
    } else {
      const order = new Order({
        orderItems: orderItems.map((item) => ({
          ...item,
          product: item._id,
          _id: undefined,
        })),
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);

// @desc    Get all orders
// @route   GET /api/orders
// @access  Privat/Admin
router.get(
  '/api/orders',
  asyncHander(async (req, res) => {
    res.send('Get all orders');
  })
);

// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Privat/Admin
router.get(
  '/api/orders/:id',
  asyncHander(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
      // 'name email' // for get user info
      // 'name email address' // for get user info
    );
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  })
);

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Privat/Admin
router.put(
  '/api/orders/:id/deliver',
  asyncHander(async (req, res) => {
    res.send('Update order to delivered');
  })
);

// @desc    Delete order to paid
// @route   DELETE /api/orders/:id/pay
// @access  Privat/Admin
router.put(
  '/api/orders/:id/pay',
  asyncHander(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  })
);

// @desc    Get order
// @route   GET /api/orders/myorders
// @access  Privat
router.get(
  '/api/orders/mine',
  asyncHander(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
  })
);

export { router as orderRouter };
